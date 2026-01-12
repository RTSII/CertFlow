'use client'

import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "@/components/layout/mode-toggle"
import { Button } from "@/components/ui/button"
import { UserCircle, LogOut } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const routeTitles: Record<string, string> = {
    '/': 'Dashboard',
    '/modules': 'Study Modules',
    '/resources': 'Resources',
    '/progress': 'Your Progress',
    '/settings': 'Settings',
}

export function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const supabase = createClient()

    // Helper to get title for nested routes or direct matches
    const getTitle = () => {
        if (routeTitles[pathname]) return routeTitles[pathname]
        if (pathname.includes('/modules/')) return 'Module Details'
        if (pathname.includes('/lessons/')) return 'Lesson View'
        return ''
    }

    const title = getTitle()

    const handleSignout = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <header className={cn(
            "flex h-16 items-center px-4 shrink-0 gap-4",
            "border-b border-white/5",
            "bg-gradient-to-r from-[#0d0d1a] via-[#1a1a2e]/95 to-[#0d0d1a]",
            "backdrop-blur-xl"
        )}>
            <MobileNav />
            <div className="flex-1 flex justify-center items-center">
                {title && (
                    <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent transform translate-x-[-20px] md:translate-x-[-10px]">
                        {title}
                    </h1>
                )}
            </div>
            <div className="ml-auto flex items-center gap-x-2">
                <ModeToggle />
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSignout}
                    className={cn(
                        "rounded-full",
                        "hover:bg-white/10",
                        "hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]",
                        "transition-all duration-300"
                    )}
                >
                    <LogOut className="h-5 w-5 text-zinc-400 hover:text-fuchsia-400 transition-colors" />
                </Button>
            </div>
        </header>
    )
}
