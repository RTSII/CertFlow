'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useToggleProgress } from '@/hooks/use-progress'
import ReactMarkdown from 'react-markdown'

interface LessonViewerProps {
    lesson: any
    module: {
        id: string
        title: string
    }
    initialCompleted: boolean
    userId: string
    navigation?: {
        prevLesson: { id: string; title: string } | null
        nextLesson: { id: string; title: string } | null
        currentIndex: number
        totalLessons: number
    }
}

// Calculate reading time based on word count (average 200 words per minute)
function calculateReadTime(content: string | null): number {
    if (!content) return 1
    const wordCount = content.trim().split(/\s+/).length
    const minutes = Math.ceil(wordCount / 200)
    return Math.max(1, minutes) // Minimum 1 minute
}

export function LessonViewer({
    lesson,
    module,
    initialCompleted,
    userId,
    navigation
}: LessonViewerProps) {
    const [completed, setCompleted] = useState(initialCompleted)
    const { mutate: toggleProgress, isPending } = useToggleProgress()

    const readTime = calculateReadTime(lesson.content)

    const handleToggle = () => {
        const newState = !completed
        setCompleted(newState)
        toggleProgress({
            userId,
            lessonId: lesson.id,
            completed: newState
        })
    }

    return (
        <div className="max-w-4xl mx-auto pb-8">
            {/* Header / Navigation */}
            <div className="flex items-center justify-between mb-8">
                <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="-ml-2 hover:bg-white/10 hover:text-cyan-400 transition-colors"
                >
                    <Link href={`/modules/${module.id}`}>
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Back to Module
                    </Link>
                </Button>
                <div className="flex items-center gap-2">
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30">
                        {module.title}
                    </Badge>
                </div>
            </div>

            {/* Content Area */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                        <Badge className="bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30">
                            {lesson.content_type?.toUpperCase() || 'LESSON'}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground gap-1.5 font-mono">
                            <Clock className="w-4 h-4" />
                            {readTime} min read
                        </div>
                        {navigation && (
                            <div className="text-sm text-muted-foreground font-mono ml-auto">
                                {navigation.currentIndex} / {navigation.totalLessons}
                            </div>
                        )}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                        {lesson.title}
                    </h1>
                </div>

                {/* Graphic Aid Display */}
                {lesson.image_url && (
                    <div className="aspect-video relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/10">
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />
                        <img
                            src={lesson.image_url}
                            alt={lesson.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                {/* Content Rendering */}
                <div className="prose prose-invert max-w-none 
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-h1:text-3xl prose-h1:bg-gradient-to-r prose-h1:from-cyan-400 prose-h1:to-fuchsia-400 prose-h1:bg-clip-text prose-h1:text-transparent
                    prose-h2:text-2xl prose-h2:text-cyan-300
                    prose-h3:text-xl prose-h3:text-fuchsia-300
                    prose-p:text-zinc-300 prose-p:leading-relaxed
                    prose-strong:text-white prose-strong:font-semibold
                    prose-li:text-zinc-300
                    prose-ul:text-zinc-300
                    prose-ol:text-zinc-300
                    prose-blockquote:border-l-cyan-500 prose-blockquote:bg-cyan-500/10 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:text-cyan-200
                    prose-code:text-fuchsia-400 prose-code:bg-fuchsia-500/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                ">
                    {lesson.content ? (
                        <ReactMarkdown>{lesson.content}</ReactMarkdown>
                    ) : (
                        <div className="py-20 text-center space-y-4 border-2 border-dashed border-white/10 rounded-3xl bg-white/5">
                            <div className="p-3 w-fit mx-auto rounded-full bg-white/10 text-zinc-400">
                                <BookOpen className="w-10 h-10" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-lg font-semibold text-foreground">Content Coming Soon</p>
                                <p className="text-sm text-muted-foreground">We're finalizing the study material for this lesson.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Actions - Polished Action Bar */}
            <div className="mt-16 pt-8 border-t border-white/10">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 backdrop-blur-xl">
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

                    <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Left: Previous button (if available) */}
                        <div className="hidden sm:block w-32">
                            {navigation?.prevLesson && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    asChild
                                    className="text-muted-foreground hover:text-cyan-400 hover:bg-white/5 transition-all"
                                >
                                    <Link href={`/modules/${module.id}/lessons/${navigation.prevLesson.id}`}>
                                        <ChevronLeft className="w-4 h-4 mr-1" />
                                        Previous
                                    </Link>
                                </Button>
                            )}
                        </div>

                        {/* Center: Mark Complete */}
                        <Button
                            className={cn(
                                "h-12 px-8 rounded-xl font-semibold text-base transition-all duration-300",
                                completed
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 shadow-[0_0_20px_rgba(0,255,136,0.15)]"
                                    : "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]"
                            )}
                            onClick={handleToggle}
                            disabled={isPending}
                        >
                            {completed ? (
                                <><CheckCircle2 className="w-4 h-4 mr-2" /> Completed</>
                            ) : (
                                "Mark Complete"
                            )}
                        </Button>

                        {/* Right: Next button */}
                        <div className="w-32 flex justify-end">
                            {navigation?.nextLesson ? (
                                <Button
                                    size="sm"
                                    asChild
                                    className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 text-foreground transition-all"
                                >
                                    <Link href={`/modules/${module.id}/lessons/${navigation.nextLesson.id}`}>
                                        Next
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </Button>
                            ) : (
                                <Button
                                    size="sm"
                                    asChild
                                    className="bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 text-foreground transition-all"
                                >
                                    <Link href={`/modules/${module.id}`}>
                                        Done
                                        <ChevronRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Mobile-only: Previous link */}
                    {navigation?.prevLesson && (
                        <div className="sm:hidden mt-4 text-center">
                            <Link
                                href={`/modules/${module.id}/lessons/${navigation.prevLesson.id}`}
                                className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                            >
                                ← Previous Lesson
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
