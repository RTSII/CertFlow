import { createClient } from '@/lib/supabase/server'
import { ModuleDetailClient } from '@/components/modules/module-detail-client'
import { redirect, notFound } from 'next/navigation'

export default async function ModuleDetailPage({ params }: { params: { moduleId: string } }) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/login')
    }

    const { moduleId } = params

    // Fetch module details
    const { data: module, error: moduleError } = await supabase
        .from('modules')
        .select(`
            id,
            title,
            description,
            icon,
            week_range,
            sections (
                id,
                title,
                display_order,
                lessons (
                    id,
                    title,
                    content_type,
                    display_order
                )
            )
        `)
        .eq('id', moduleId)
        .single()

    if (moduleError || !module) {
        console.error('Error fetching module:', moduleError)
        return notFound()
    }

    // Sort sections and lessons by display_order
    const sortedSections = module.sections
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        .map(section => ({
            ...section,
            lessons: section.lessons.sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
        }))

    // Fetch user progress for this module's lessons
    const lessonIds = sortedSections.flatMap(s => s.lessons.map(l => l.id))
    const { data: progressData } = await supabase
        .from('user_progress')
        .select('lesson_id, completed')
        .eq('user_id', user.id)
        .in('lesson_id', lessonIds)

    return (
        <ModuleDetailClient
            module={{ ...module, sections: sortedSections }}
            userId={user.id}
            initialProgress={progressData || []}
        />
    )
}

