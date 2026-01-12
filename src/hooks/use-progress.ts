'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createClient } from '@/lib/supabase/client'

interface ToggleProgressParams {
    userId: string
    lessonId: string
    completed: boolean
}

export function useToggleProgress() {
    const queryClient = useQueryClient()
    const supabase = createClient()

    return useMutation({
        mutationFn: async ({ userId, lessonId, completed }: ToggleProgressParams) => {
            const { data, error } = await supabase
                .from('user_progress')
                .upsert({
                    user_id: userId,
                    lesson_id: lessonId,
                    completed,
                    completed_at: completed ? new Date().toISOString() : null,
                }, {
                    onConflict: 'user_id,lesson_id',
                })
                .select()
                .single()

            if (error) throw error
            return data
        },
        // Optimistic update
        onMutate: async ({ lessonId, completed }) => {
            // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
            await queryClient.cancelQueries({ queryKey: ['progress'] })

            // Snapshot the previous value
            const previousProgress = queryClient.getQueryData(['progress'])

            // Optimistically update to the new value
            queryClient.setQueryData(['progress'], (old: any) => {
                const existing = old ? [...old] : []
                const index = existing.findIndex((p: any) => p.lesson_id === lessonId)
                if (index > -1) {
                    existing[index] = { ...existing[index], completed }
                } else {
                    existing.push({ lesson_id: lessonId, completed })
                }
                return existing
            })

            return { previousProgress }
        },
        onError: (err, variables, context) => {
            // Rollback to the previous value if mutation fails
            queryClient.setQueryData(['progress'], context?.previousProgress)
        },
        onSettled: () => {
            // Always refetch after error or success to ensure we have the correct data
            queryClient.invalidateQueries({ queryKey: ['progress'] })
        },
    })
}
