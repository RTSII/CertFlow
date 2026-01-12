import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClipboardList, BookOpen, Target, Clock, ArrowUpRight, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/login')
    }

    // Fetch all lessons organized by module
    const { data: lessons } = await supabase
        .from('lessons')
        .select(`
            id,
            title,
            display_order,
            sections (
                id,
                title,
                display_order,
                modules (
                    id,
                    title,
                    week_range
                )
            )
        `)
        .order('display_order', { referencedTable: 'sections', ascending: true })
        .order('display_order', { ascending: true })

    // Fetch user progress
    const { data: progress } = await supabase
        .from('user_progress')
        .select('lesson_id, completed')
        .eq('user_id', user.id)
        .eq('completed', true)

    const completedIds = new Set(progress?.map(p => p.lesson_id) || [])
    const totalLessons = lessons?.length || 0
    const completedCount = completedIds.size
    const courseProgress = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

    // Find the current lesson to "Continue Learning"
    const sortedLessons = lessons || []
    const nextLesson = sortedLessons.find(l => !completedIds.has(l.id)) || sortedLessons[sortedLessons.length - 1]

    // Get module progress for milestones
    const modulesResponse = await supabase.from('modules').select('id, title, week_range').order('display_order', { ascending: true })
    const modules = modulesResponse.data || []

    const statCards = [
        {
            title: 'Full Course',
            value: `${courseProgress}%`,
            icon: BookOpen,
            color: 'cyan',
            gradient: 'from-cyan-500/20 to-cyan-500/5',
            iconColor: 'text-cyan-400',
            progress: courseProgress,
        },
        {
            title: 'Items Complete',
            value: `${completedCount} / ${totalLessons}`,
            subtitle: `${totalLessons - completedCount} more to go`,
            icon: ClipboardList,
            color: 'fuchsia',
            gradient: 'from-fuchsia-500/20 to-fuchsia-500/5',
            iconColor: 'text-fuchsia-400',
        },
        {
            title: 'Study Streak',
            value: '1 Day',
            subtitle: 'Welcome!',
            icon: Target,
            color: 'emerald',
            gradient: 'from-emerald-500/20 to-emerald-500/5',
            iconColor: 'text-emerald-400',
        },
        {
            title: 'Active Time',
            value: '---',
            subtitle: 'Tracking started',
            icon: Clock,
            color: 'amber',
            gradient: 'from-amber-500/20 to-amber-500/5',
            iconColor: 'text-amber-400',
        },
    ]

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Dashboard
                </h1>
                <p className="text-muted-foreground text-lg">
                    Welcome back to CheckFlow. Your CEHRS journey continues here.
                </p>
            </div>

            {/* Stat Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((stat) => (
                    <Card
                        key={stat.title}
                        className={cn(
                            "relative overflow-hidden border-white/10",
                            "bg-gradient-to-br",
                            stat.gradient,
                            "backdrop-blur-xl"
                        )}
                    >
                        <div className="absolute inset-0 cyber-grid opacity-20" />
                        <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-zinc-300">{stat.title}</CardTitle>
                            <stat.icon className={cn("h-4 w-4", stat.iconColor)} />
                        </CardHeader>
                        <CardContent className="relative">
                            <div className="text-2xl font-bold font-mono text-foreground">{stat.value}</div>
                            {stat.progress !== undefined && (
                                <Progress value={stat.progress} className="h-1.5 mt-2 bg-white/10" />
                            )}
                            {stat.subtitle && (
                                <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
                {/* Continue Learning Card */}
                <Card className="md:col-span-4 border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
                    <div className="absolute inset-0 cyber-grid opacity-10" />
                    <CardHeader className="relative">
                        <CardTitle className="text-foreground">Continue Learning</CardTitle>
                        <CardDescription>Pick up where you left off.</CardDescription>
                    </CardHeader>
                    <CardContent className="relative space-y-4">
                        {nextLesson && (
                            <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-1">
                                        <Badge className="mb-2 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30">
                                            {(nextLesson.sections as any)?.modules?.title || "Course Content"}
                                        </Badge>
                                        <h3 className="font-semibold text-lg leading-tight text-foreground">{nextLesson.title}</h3>
                                        <p className="text-sm text-muted-foreground max-w-sm">
                                            {(nextLesson.sections as any)?.title || "Next Lesson"}
                                        </p>
                                    </div>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        asChild
                                        className="hover:bg-cyan-500/20 hover:text-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,255,245,0.3)] transition-all"
                                    >
                                        <Link href={`/modules/${(nextLesson.sections as any)?.modules?.id}/lessons/${nextLesson.id}`}>
                                            <ArrowUpRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="mt-6 flex flex-col gap-y-2">
                                    <div className="flex justify-between text-xs font-mono">
                                        <span className="text-muted-foreground">OVERALL PROGRESS</span>
                                        <span className="text-cyan-400">{courseProgress}%</span>
                                    </div>
                                    <Progress value={courseProgress} className="h-2 bg-white/10" />
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-between pt-2">
                            <div className="flex flex-col gap-y-1">
                                <p className="text-sm font-medium text-foreground">Next Milestone</p>
                                <p className="text-xs text-muted-foreground">Complete {modules[0]?.title || "First Module"}</p>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="border-white/20 hover:bg-white/10 hover:border-cyan-500/50"
                            >
                                <Link href="/modules">View Roadmap</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Milestones Card */}
                <Card className="md:col-span-3 border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
                    <div className="absolute inset-0 cyber-grid opacity-10" />
                    <CardHeader className="relative">
                        <CardTitle className="text-foreground">Course Milestones</CardTitle>
                        <CardDescription>Your CEHRS certification path.</CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="space-y-6">
                            {modules.map((m, i) => {
                                const isCurrent = (nextLesson?.sections as any)?.modules?.id === m.id
                                const isCompleted = false

                                return (
                                    <div key={m.id} className="flex gap-x-4">
                                        <div className="flex flex-col items-center gap-y-1">
                                            <div className={cn(
                                                "w-3 h-3 rounded-full transition-all",
                                                isCompleted ? "bg-emerald-400 shadow-[0_0_10px_rgba(0,255,136,0.5)]" :
                                                    isCurrent ? "bg-cyan-400 shadow-[0_0_10px_rgba(0,255,245,0.5)] animate-pulse" : "bg-zinc-600"
                                            )} />
                                            {i < modules.length - 1 && <div className="w-px flex-1 bg-white/10" />}
                                        </div>
                                        <div className="pb-6">
                                            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{m.week_range}</p>
                                            <p className={cn(
                                                "text-sm font-semibold",
                                                isCurrent ? "text-cyan-400" : isCompleted ? "text-emerald-400" : "text-zinc-400"
                                            )}>{m.title}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
