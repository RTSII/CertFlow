'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldCheck } from 'lucide-react'

// Pre-configured for single-user experience
const DEFAULT_EMAIL = 'cirez@checkflow.app'

export default function LoginPage() {
    const [email, setEmail] = useState(DEFAULT_EMAIL)
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession()
            if (session) {
                router.push('/')
                router.refresh()
            }
        }
        checkSession()
    }, [supabase, router])

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            router.push('/')
            router.refresh()
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background p-4 cyber-grid">
            {/* Gradient Overlay */}
            <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

            <Card className="relative w-full max-w-sm border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl overflow-hidden">
                {/* Holographic shimmer */}
                <div className="absolute inset-0 holographic opacity-20 pointer-events-none" />

                <CardHeader className="relative space-y-1 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-500/25">
                        <ShieldCheck className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Welcome Back
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                        Sign in to continue your CEHRS study journey
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="relative space-y-4">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-lg">
                                {error}
                            </div>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground focus:border-cyan-500 focus:ring-cyan-500/20"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-foreground">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="bg-white/5 border-white/20 text-foreground placeholder:text-muted-foreground focus:border-cyan-500 focus:ring-cyan-500/20"
                                required
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                checked={rememberMe}
                                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                                className="border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                            />
                            <label
                                htmlFor="remember"
                                className="text-sm text-muted-foreground cursor-pointer select-none"
                            >
                                Keep me signed in
                            </label>
                        </div>
                    </CardContent>
                    <CardFooter className="relative">
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 text-white shadow-lg shadow-cyan-500/25 transition-all h-11 text-base font-semibold"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
