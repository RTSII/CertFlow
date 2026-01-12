'use client'

import { useEffect } from 'react'
import { LessonItem } from '@/components/modules/lesson-item'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import {
    ChevronLeft,
    LucideIcon,
    CheckCircle2,
    ClipboardList,
    Stethoscope,
    DollarSign,
    Shield,
    Target,
    BarChart,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
    ClipboardList,
    Stethoscope,
    DollarSign,
    Shield,
    Target,
    BarChart,
}

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useToggleProgress } from '@/hooks/use-progress'
import { createClient } from '@/lib/supabase/client'
import { useQuery, useQueryClient } from '@tanstack/react-query'

interface Lesson {
    id: string
    title: string
    content_type: string
    estimated_minutes?: number
}

interface Section {
    id: string
    title: string
    lessons: Lesson[]
}

interface Module {
    id: string
    title: string
    description: string | null
    icon: string | null
    week_range: string | null
    sections: Section[]
}

interface ModuleDetailClientProps {
    module: Module
    userId: string
    initialProgress: { lesson_id: string; completed: boolean }[]
}

export function ModuleDetailClient({
    module,
    userId,
    initialProgress,
}: ModuleDetailClientProps) {
    const queryClient = useQueryClient()
    const supabase = createClient()
    const { mutate: toggleProgress } = useToggleProgress()

    const { data: progressData } = useQuery({
        queryKey: ['progress'],
        queryFn: async () => {
            const { data } = await supabase
                .from('user_progress')
                .select('lesson_id, completed')
                .eq('user_id', userId)
            return data || []
        },
        initialData: initialProgress,
    })

    useEffect(() => {
        const channel = supabase
            .channel('progress-updates')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: 'user_progress',
                    filter: `user_id=eq.${userId}`,
                },
                () => {
                    queryClient.invalidateQueries({ queryKey: ['progress'] })
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, userId, queryClient])

    const completedLessonIds = new Set(
        progressData
            ?.filter(p => p.completed)
            .map(p => p.lesson_id) || []
    )

    const Icon = iconMap[module.icon || ''] || ClipboardList
    const allLessons = module.sections.flatMap(s => s.lessons)
    const totalLessons = allLessons.length
    const completedCount = allLessons.filter(l => completedLessonIds.has(l.id)).length
    const progress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

    // Find the first section with incomplete lessons to expand by default
    const firstIncompleteSection = module.sections.find(section =>
        section.lessons.some(lesson => !completedLessonIds.has(lesson.id))
    )
    const defaultExpandedSection = firstIncompleteSection?.id || module.sections[0]?.id || ''

    const handleToggle = (lessonId: string, completed: boolean) => {
        toggleProgress({ userId, lessonId, completed })
    }

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-start gap-4 md:gap-6">
                <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="mt-1 shrink-0 hover:bg-white/10 hover:text-cyan-400 transition-colors rounded-xl"
                >
                    <Link href="/modules">
                        <ChevronLeft className="h-5 w-5" />
                    </Link>
                </Button>
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-500/30">
                            <Icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30 font-mono">
                            {module.week_range}
                        </Badge>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                            {module.title}
                        </h1>
                        <p className="text-muted-foreground mt-2 text-base">{module.description}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-mono">
                            <span className="text-zinc-400">
                                {completedCount} of {totalLessons} lessons complete
                            </span>
                            <span className={cn(
                                "font-bold",
                                progress === 100 ? "text-emerald-400" : "text-cyan-400"
                            )}>
                                {progress}%
                            </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sections */}
            <Accordion type="single" collapsible defaultValue={defaultExpandedSection} className="space-y-4">
                {module.sections.map((section, idx) => {
                    const sectionLessons = section.lessons
                    const sectionCompleted = sectionLessons.every(l => completedLessonIds.has(l.id))
                    const sectionProgress = sectionLessons.filter(l => completedLessonIds.has(l.id)).length

                    return (
                        <AccordionItem
                            key={section.id}
                            value={section.id}
                            className={cn(
                                "rounded-xl overflow-hidden transition-all duration-300",
                                "bg-gradient-to-br from-white/5 to-transparent",
                                "border border-white/10 hover:border-cyan-500/30",
                                sectionCompleted && "border-emerald-500/30"
                            )}
                        >
                            <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors [&[data-state=open]>svg]:rotate-180">
                                <div className="flex items-center gap-4 text-left">
                                    <div className={cn(
                                        "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 transition-all",
                                        sectionCompleted
                                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
                                            : "bg-white/10 text-zinc-300 border border-white/10"
                                    )}>
                                        {sectionCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white text-base">
                                            {section.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-0.5 font-mono">
                                            {sectionProgress} of {sectionLessons.length} complete
                                        </p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 md:px-6 pb-4">
                                <div className="space-y-2 ml-0 md:ml-14">
                                    {section.lessons.map(lesson => (
                                        <LessonItem
                                            key={lesson.id}
                                            moduleId={module.id}
                                            lesson={{
                                                id: lesson.id,
                                                title: lesson.title,
                                                contentType: lesson.content_type,
                                                estimatedMinutes: lesson.estimated_minutes
                                            }}
                                            completed={completedLessonIds.has(lesson.id)}
                                            onToggle={handleToggle}
                                        />
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}
