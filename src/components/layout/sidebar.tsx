'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
    LayoutDashboard,
    BookOpen,
    Link as LinkIcon,
    BarChart2,
    Settings,
    ShieldCheck,
    Zap
} from 'lucide-react'

const routes = [
    {
        label: 'Overview',
        icon: LayoutDashboard,
        href: '/',
        color: 'text-cyan-400',
        glowColor: 'group-hover:shadow-[0_0_20px_rgba(0,255,245,0.4)]',
    },
    {
        label: 'Modules',
        icon: BookOpen,
        href: '/modules',
        color: 'text-fuchsia-400',
        glowColor: 'group-hover:shadow-[0_0_20px_rgba(255,0,255,0.4)]',
    },
    {
        label: 'Resources',
        icon: LinkIcon,
        href: '/resources',
        color: 'text-purple-400',
        glowColor: 'group-hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]',
    },
    {
        label: 'Progress',
        icon: BarChart2,
        href: '/progress',
        color: 'text-emerald-400',
        glowColor: 'group-hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
        color: 'text-zinc-400',
        glowColor: 'group-hover:shadow-[0_0_20px_rgba(161,161,170,0.3)]',
    },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="relative flex flex-col h-full bg-gradient-to-b from-[#0d0d1a] via-[#1a1a2e] to-[#0d0d1a] text-white border-r border-white/5 overflow-hidden">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

            {/* Holographic Shimmer Overlay */}
            <div className="absolute inset-0 holographic opacity-20 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-3 py-4 flex-1">
                {/* Logo */}
                <Link href="/" className="flex items-center pl-3 mb-10 group">
                    <div className="relative w-10 h-10 mr-3">
                        {/* Outer Glow Ring */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                        {/* Inner Icon Container */}
                        <div className="relative w-full h-full bg-[#0d0d1a] rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors">
                            <ShieldCheck className="w-5 h-5 text-cyan-400" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                            CheckFlow
                        </h1>
                        <p className="text-[10px] text-cyan-500/60 font-mono tracking-widest">CEHRS STUDY</p>
                    </div>
                </Link>

                {/* Navigation */}
                <div className="space-y-1">
                    {routes.map((route) => {
                        const isActive = pathname === route.href ||
                            (route.href !== '/' && pathname.startsWith(route.href))

                        return (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "group relative text-sm flex p-3 w-full justify-start font-medium cursor-pointer rounded-xl transition-all duration-300",
                                    isActive
                                        ? "text-white bg-white/10 shadow-[0_0_30px_rgba(0,255,245,0.15)]"
                                        : "text-zinc-400 hover:text-white hover:bg-white/5",
                                    route.glowColor
                                )}
                            >
                                {/* Active Indicator Bar */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-cyan-400 to-fuchsia-400 rounded-full" />
                                )}

                                <div className="flex items-center flex-1">
                                    <route.icon className={cn(
                                        "h-5 w-5 mr-3 transition-all duration-300",
                                        isActive ? route.color : "text-zinc-500 group-hover:" + route.color.replace('text-', 'text-')
                                    )} />
                                    <span className={cn(
                                        "transition-all duration-300",
                                        isActive && "neon-text-cyan"
                                    )}>
                                        {route.label}
                                    </span>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className={cn(
                                    "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                    "bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                )} />
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Bottom Goal Card */}
            <div className="relative z-10 px-3 py-4 mt-auto">
                <div className="relative p-4 rounded-2xl overflow-hidden">
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10 backdrop-blur-sm" />
                    <div className="absolute inset-0 border border-white/10 rounded-2xl" />

                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-50">
                        <div className="absolute inset-[-1px] bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-purple-500/30 rounded-2xl blur-sm" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-cyan-400 pulse-neon" />
                            <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Current Goal</p>
                        </div>
                        <p className="text-sm font-semibold text-white mb-3">CEHRS Certification</p>

                        {/* Progress Bar */}
                        <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 rounded-full transition-all duration-500"
                                style={{ width: '34%' }}
                            />
                        </div>
                        <p className="mt-2 text-[10px] text-zinc-400 flex justify-between font-mono">
                            <span>PROGRESS</span>
                            <span className="text-cyan-400">34%</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
