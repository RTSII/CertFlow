import { createClient } from '@/lib/supabase/server'
import { ModuleCard } from '@/components/modules/module-card'
import { redirect } from 'next/navigation'

export default async function ModulesPage() {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/login')
    }

    // Fetch modules with sections and lessons
    const { data: modules, error: modulesError } = await supabase
        .from('modules')
        .select(`
            id,
            title,
            description,
            icon,
            week_range,
            exam_weight,
            display_order,
            sections (
                id,
                lessons (
                    id
                )
            )
        `)
        .order('display_order')

    if (modulesError) {
        console.error('Error fetching modules:', modulesError)
        return <div className="text-destructive">Error loading modules. Please try again later.</div>
    }

    // Fetch user progress
    const { data: progressData } = await supabase
        .from('user_progress')
        .select('lesson_id, completed')
        .eq('user_id', user.id)

    const completedLessonIds = new Set(
        progressData
            ?.filter(p => p.completed)
            .map(p => p.lesson_id) || []
    )

    const modulesWithProgress = modules.map(module => {
        // Flatten lessons from all sections
        const allLessons = module.sections.flatMap(s => s.lessons)
        const totalLessons = allLessons.length
        const completedLessons = allLessons.filter(l => completedLessonIds.has(l.id)).length

        return {
            id: module.id,
            title: module.title,
            description: module.description || '',
            icon: module.icon || 'ClipboardList',
            weekRange: module.week_range || '',
            examWeight: module.exam_weight || 0,
            totalLessons,
            completedLessons,
        }
    })

    return (
        <div className="space-y-8 max-w-6xl mx-auto">
            {/* Module Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modulesWithProgress.map((module, index) => (
                    <ModuleCard
                        key={module.id}
                        module={module}
                        totalLessons={module.totalLessons}
                        completedLessons={module.completedLessons}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}
