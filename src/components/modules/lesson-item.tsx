import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'
import { Clock, BookOpen, Target, RefreshCw, Zap, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface LessonItemProps {
    moduleId: string
    lesson: {
        id: string
        title: string
        contentType: string
        estimatedMinutes?: number
    }
    completed: boolean
    onToggle: (lessonId: string, completed: boolean) => void
}

const contentTypeConfig = {
    lesson: { icon: BookOpen, label: 'Lesson', color: 'text-cyan-400' },
    practice: { icon: Target, label: 'Practice', color: 'text-amber-400' },
    review: { icon: RefreshCw, label: 'Review', color: 'text-fuchsia-400' },
    quiz: { icon: Zap, label: 'Quiz', color: 'text-emerald-400' },
}

export function LessonItem({ moduleId, lesson, completed, onToggle }: LessonItemProps) {
    const typeConfig = contentTypeConfig[lesson.contentType as keyof typeof contentTypeConfig] || contentTypeConfig.lesson

    return (
        <div className={cn(
            "group relative flex items-center gap-x-3 py-3 px-4 rounded-xl transition-all duration-300",
            "bg-white/5 hover:bg-white/10",
            "border border-white/10 hover:border-cyan-500/40",
            completed && "bg-emerald-500/10 border-emerald-500/30"
        )}>
            {/* Active indicator line */}
            {completed && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full" />
            )}

            <Checkbox
                id={lesson.id}
                checked={completed}
                onCheckedChange={(checked) => onToggle(lesson.id, checked as boolean)}
                className={cn(
                    "h-5 w-5 rounded-md border-2 transition-all duration-300 shrink-0",
                    "border-zinc-500 data-[state=checked]:border-emerald-500",
                    "data-[state=checked]:bg-emerald-500 data-[state=checked]:shadow-[0_0_10px_rgba(0,255,136,0.4)]"
                )}
            />

            <Link
                href={`/modules/${moduleId}/lessons/${lesson.id}`}
                className="flex-1 flex items-center justify-between group/link min-w-0"
            >
                <div className="flex-1 space-y-1 min-w-0">
                    <span className={cn(
                        "block text-sm font-semibold transition-all duration-300 truncate",
                        "text-white group-hover/link:text-cyan-300",
                        completed && "text-zinc-400 line-through decoration-emerald-500/50"
                    )}>
                        {lesson.title}
                    </span>

                    <div className="flex items-center gap-3 flex-wrap">
                        {/* Time estimate */}
                        {lesson.estimatedMinutes && (
                            <div className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                                <Clock className="h-3 w-3" />
                                <span>{lesson.estimatedMinutes}m</span>
                            </div>
                        )}

                        {/* Content type indicator */}
                        {lesson.contentType !== 'lesson' && (
                            <div className={cn(
                                "flex items-center gap-1 text-xs font-bold uppercase tracking-wider font-mono",
                                typeConfig.color
                            )}>
                                <typeConfig.icon className="h-3 w-3" />
                                {typeConfig.label}
                            </div>
                        )}
                    </div>
                </div>

                <ChevronRight className={cn(
                    "w-5 h-5 shrink-0 transition-all duration-300",
                    "text-zinc-500 group-hover:text-cyan-400",
                    "opacity-50 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                )} />
            </Link>
        </div>
    )
}
