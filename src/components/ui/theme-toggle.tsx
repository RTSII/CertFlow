'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Sun className="h-5 w-5" />
            </Button>
        )
    }

    const isDark = resolvedTheme === 'dark'

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={cn(
                "h-9 w-9 rounded-full transition-all duration-300",
                "hover:bg-white/10 hover:shadow-[0_0_15px_rgba(0,255,245,0.3)]",
                "border border-transparent hover:border-cyan-400/30"
            )}
        >
            {isDark ? (
                <Sun className="h-5 w-5 text-yellow-400 transition-transform duration-300 rotate-0 scale-100" />
            ) : (
                <Moon className="h-5 w-5 text-cyan-400 transition-transform duration-300 rotate-0 scale-100" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
