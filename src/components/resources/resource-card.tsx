'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
    ExternalLink,
    FileText,
    Video,
    BookOpen,
    Target,
    Award,
    GraduationCap
} from 'lucide-react'
import { Resource } from '@/types/content'

const resourceTypeIcons = {
    pdf: FileText,
    video: Video,
    course: GraduationCap,
    article: BookOpen,
    practice: Target,
    official: Award,
}

const categoryStyles = {
    essential: {
        label: 'Essential',
        bgColor: 'bg-cyan-500/20',
        textColor: 'text-cyan-400',
        borderColor: 'border-cyan-500/30',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,255,245,0.2)]',
    },
    'deep-dive': {
        label: 'Deep Dive',
        bgColor: 'bg-purple-500/20',
        textColor: 'text-purple-400',
        borderColor: 'border-purple-500/30',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]',
    },
    practice: {
        label: 'Practice',
        bgColor: 'bg-amber-500/20',
        textColor: 'text-amber-400',
        borderColor: 'border-amber-500/30',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]',
    },
    official: {
        label: 'Official',
        bgColor: 'bg-emerald-500/20',
        textColor: 'text-emerald-400',
        borderColor: 'border-emerald-500/30',
        glowColor: 'group-hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]',
    },
}

interface ResourceCardProps {
    resource: Resource
    className?: string
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
    const Icon = resourceTypeIcons[resource.resourceType] || FileText
    const categoryStyle = categoryStyles[resource.category] || categoryStyles.essential

    return (
        <Card className={cn(
            "group relative overflow-hidden transition-all duration-300 hover:-translate-y-1",
            "bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl",
            "border border-white/10 hover:border-cyan-500/40",
            categoryStyle.glowColor,
            className
        )}>
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

            <CardHeader className="relative pb-3">
                <div className="flex items-start justify-between gap-3">
                    <div className={cn(
                        "p-2.5 rounded-xl shrink-0 transition-transform group-hover:scale-110",
                        categoryStyle.bgColor
                    )}>
                        <Icon className={cn("w-5 h-5", categoryStyle.textColor)} />
                    </div>
                    <Badge
                        className={cn(
                            "text-[10px] font-mono font-medium shrink-0",
                            categoryStyle.textColor,
                            categoryStyle.borderColor,
                            categoryStyle.bgColor
                        )}
                    >
                        {categoryStyle.label}
                    </Badge>
                </div>
                <CardTitle className="text-base font-semibold mt-3 line-clamp-2 text-foreground group-hover:text-cyan-300 transition-colors">
                    {resource.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2 text-muted-foreground">
                    {resource.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="relative pt-0">
                {/* Domain tags */}
                {resource.domainTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {resource.domainTags.map(tag => (
                            <span
                                key={tag}
                                className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-white/10 text-zinc-300 border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-white/20 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                >
                    <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <span>Open Resource</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}
