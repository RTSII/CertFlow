'use client'

import { useState } from 'react'
import { RESOURCES } from '@/content/resources'
import { ResourceCard } from '@/components/resources/resource-card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ResourceCategory } from '@/types/content'

const categories: { value: ResourceCategory | 'all'; label: string; color: string }[] = [
    { value: 'all', label: 'All Resources', color: 'from-cyan-500 to-fuchsia-500' },
    { value: 'essential', label: 'Essential', color: 'from-emerald-500 to-cyan-500' },
    { value: 'deep-dive', label: 'Deep Dive', color: 'from-purple-500 to-fuchsia-500' },
    { value: 'practice', label: 'Practice', color: 'from-amber-500 to-orange-500' },
    { value: 'official', label: 'Official', color: 'from-cyan-500 to-blue-500' },
]

export default function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState<ResourceCategory | 'all'>('all')

    const filteredResources = activeCategory === 'all'
        ? RESOURCES
        : RESOURCES.filter(r => r.category === activeCategory)

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Resource Library
                </h1>
                <p className="text-muted-foreground text-lg">
                    Curated study materials to help you prepare for the CEHRS certification exam.
                </p>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                    <Button
                        key={category.value}
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveCategory(category.value)}
                        className={cn(
                            "transition-all duration-300 border-white/20",
                            activeCategory === category.value
                                ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg shadow-cyan-500/20`
                                : "bg-white/5 hover:bg-white/10 hover:border-cyan-500/50"
                        )}
                    >
                        {category.label}
                        {category.value !== 'all' && (
                            <span className="ml-1.5 text-xs opacity-60">
                                ({RESOURCES.filter(r => r.category === category.value).length})
                            </span>
                        )}
                    </Button>
                ))}
            </div>

            {/* Resource grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredResources.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </div>

            {filteredResources.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    No resources found in this category.
                </div>
            )}
        </div>
    )
}
