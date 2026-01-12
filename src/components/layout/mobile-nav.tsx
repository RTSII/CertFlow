'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sidebar } from "./sidebar"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function MobileNav() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    // Close sheet on route change
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-black border-none">
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}
