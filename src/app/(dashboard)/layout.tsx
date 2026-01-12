import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full relative">
            {/* Sidebar Container */}
            <div className="hidden h-full md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 z-[80]">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <main className="md:pl-56 flex flex-col min-h-screen bg-background">
                <Header />
                <div className="flex-1 p-8 bg-background cyber-grid">
                    {children}
                </div>
            </main>
        </div>
    )
}
