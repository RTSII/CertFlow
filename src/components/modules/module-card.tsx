'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProgressRing } from '@/components/ui/progress-ring'
import { cn } from '@/lib/utils'
import {
    ClipboardList,
    Stethoscope,
    DollarSign,
    Shield,
    Target,
    ChevronRight,
    BarChart,
    LucideIcon
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
    ClipboardList,
    Stethoscope,
    DollarSign,
    Shield,
    Target,
    BarChart,
}

// Neon color schemes for different module types
const colorSchemes = [
    { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,245,0.3)]', border: 'border-cyan-500/20 hover:border-cyan-400/40' },
    { icon: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]', border: 'border-fuchsia-500/20 hover:border-fuchsia-400/40' },
    { icon: 'text-purple-400', bg: 'bg-purple-500/10', glow: 'group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]', border: 'border-purple-500/20 hover:border-purple-400/40' },
    { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]', border: 'border-emerald-500/20 hover:border-emerald-400/40' },
    { icon: 'text-amber-400', bg: 'bg-amber-500/10', glow: 'group-hover:shadow-[0_0_30px_rgba(255,191,0,0.3)]', border: 'border-amber-500/20 hover:border-amber-400/40' },
    { icon: 'text-rose-400', bg: 'bg-rose-500/10', glow: 'group-hover:shadow-[0_0_30px_rgba(255,99,132,0.3)]', border: 'border-rose-500/20 hover:border-rose-400/40' },
]

interface ModuleCardProps {
    module: {
        id: string
        title: string
        description: string
        weekRange: string
        icon: string
        examWeight?: number
    }
    totalLessons: number
    completedLessons: number
    index?: number
}

export function ModuleCard({ module, totalLessons, completedLessons, index = 0 }: ModuleCardProps) {
    const Icon = iconMap[module.icon] || ClipboardList
    const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
    const isComplete = progress === 100
    const colorScheme = colorSchemes[index % colorSchemes.length]

    return (
        <Link href={`/modules/${module.id}`}>
            <Card className={cn(
                "group relative cursor-pointer transition-all duration-300 hover:-translate-y-1 overflow-hidden",
                "bg-gradient-to-br from-[#1a1a2e]/80 to-[#0d0d1a]/80 backdrop-blur-xl",
                "border",
                colorScheme.border,
                colorScheme.glow,
                isComplete && "border-emerald-500/50"
            )}>
                {/* Holographic Shimmer Overlay */}
                <div className="absolute inset-0 holographic opacity-10 pointer-events-none" />

                {/* Cyber Grid Pattern */}
                <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

                <CardHeader className="relative pb-3">
                    <div className="flex items-start justify-between">
                        <div className={cn(
                            "p-2.5 rounded-xl",
                            colorScheme.bg,
                            "transition-all duration-300 group-hover:scale-110"
                        )}>
                            <Icon className={cn("w-5 h-5", colorScheme.icon)} />
                        </div>
                        <div className="flex items-center gap-2">
                            {module.examWeight && module.examWeight > 0 && (
                                <Badge
                                    variant="outline"
                                    className="text-[10px] font-mono font-medium text-cyan-400 border-cyan-500/30 bg-cyan-500/5"
                                >
                                    {module.examWeight}% EXAM
                                </Badge>
                            )}
                            <Badge
                                variant="secondary"
                                className="text-[10px] font-mono font-medium bg-white/5 text-zinc-400 border-none"
                            >
                                {module.weekRange}
                            </Badge>
                        </div>
                    </div>
                    <CardTitle className={cn(
                        "text-lg font-semibold mt-3 transition-all duration-300",
                        "text-white group-hover:text-cyan-300"
                    )}>
                        {module.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2 text-zinc-400">
                        {module.description}
                    </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="text-xs font-mono text-zinc-500">
                                {completedLessons} / {totalLessons} LESSONS
                            </div>
                            <div className={cn(
                                "flex items-center gap-2 text-xs font-medium transition-all duration-300",
                                "text-zinc-500 group-hover:text-cyan-400"
                            )}>
                                <span>View Module</span>
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                        <ProgressRing value={progress} size="sm" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}
