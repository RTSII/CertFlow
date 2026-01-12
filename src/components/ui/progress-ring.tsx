'use client'

import { cn } from '@/lib/utils'

interface ProgressRingProps {
    value: number  // 0-100
    size?: 'sm' | 'md' | 'lg'
    showLabel?: boolean
    className?: string
}

const sizeConfig = {
    sm: { width: 40, strokeWidth: 4, textSize: 'text-[10px]' },
    md: { width: 56, strokeWidth: 5, textSize: 'text-xs' },
    lg: { width: 80, strokeWidth: 6, textSize: 'text-sm' },
}

export function ProgressRing({
    value,
    size = 'md',
    showLabel = true,
    className
}: ProgressRingProps) {
    const config = sizeConfig[size]
    const radius = (config.width - config.strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (value / 100) * circumference

    const isComplete = value >= 100

    return (
        <div className={cn("relative inline-flex items-center justify-center", className)}>
            {/* Glow Effect */}
            <div className={cn(
                "absolute inset-0 rounded-full blur-md opacity-50 transition-opacity",
                isComplete
                    ? "bg-emerald-500/30"
                    : value > 0
                        ? "bg-cyan-500/30"
                        : "bg-transparent"
            )} />

            <svg
                width={config.width}
                height={config.width}
                className="transform -rotate-90 relative"
            >
                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
                        <stop offset="50%" stopColor="hsl(300, 100%, 50%)" />
                        <stop offset="100%" stopColor="hsl(280, 80%, 60%)" />
                    </linearGradient>
                    <linearGradient id="completeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(160, 100%, 50%)" />
                        <stop offset="100%" stopColor="hsl(140, 100%, 40%)" />
                    </linearGradient>
                </defs>

                {/* Background circle */}
                <circle
                    cx={config.width / 2}
                    cy={config.width / 2}
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={config.strokeWidth}
                    className="text-white/10"
                />
                {/* Progress circle */}
                <circle
                    cx={config.width / 2}
                    cy={config.width / 2}
                    r={radius}
                    fill="none"
                    stroke={isComplete ? "url(#completeGradient)" : "url(#progressGradient)"}
                    strokeWidth={config.strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                />
            </svg>
            {showLabel && (
                <span className={cn(
                    "absolute font-bold font-mono",
                    config.textSize,
                    isComplete
                        ? "text-emerald-400 neon-text-cyan"
                        : "text-zinc-300"
                )}>
                    {Math.round(value)}%
                </span>
            )}
        </div>
    )
}
