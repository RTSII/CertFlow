"use client"

import * as React from "react"
import { Moon, Sun, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ModeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && resolvedTheme === 'dark'

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "relative overflow-hidden rounded-full",
                        "hover:bg-white/10",
                        "transition-all duration-300",
                        isDark && "hover:shadow-[0_0_15px_rgba(0,255,245,0.4)]"
                    )}
                >
                    <Sun className={cn(
                        "h-5 w-5 transition-all duration-500",
                        isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 text-amber-500"
                    )} />
                    <Moon className={cn(
                        "absolute h-5 w-5 transition-all duration-500",
                        isDark ? "rotate-0 scale-100 text-cyan-400" : "-rotate-90 scale-0 opacity-0"
                    )} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="glass-card border-white/20 bg-zinc-900/90 backdrop-blur-xl"
            >
                <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    className="flex items-center gap-2 cursor-pointer hover:bg-white/10 focus:bg-white/10"
                >
                    <Sun className="h-4 w-4 text-amber-400" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    className="flex items-center gap-2 cursor-pointer hover:bg-white/10 focus:bg-white/10"
                >
                    <Moon className="h-4 w-4 text-cyan-400" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    className="flex items-center gap-2 cursor-pointer hover:bg-white/10 focus:bg-white/10"
                >
                    <Sparkles className="h-4 w-4 text-fuchsia-400" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
