import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import { LessonViewer } from '@/components/modules/lesson-viewer'

interface LessonPageProps {
    params: {
        moduleId: string
        lessonId: string
    }
}

export default async function LessonPage({ params }: LessonPageProps) {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/login')
    }

    const { moduleId, lessonId } = params

    // Fetch lesson details with module and section info
    const { data: lesson, error } = await supabase
        .from('lessons')
        .select(`
            *,
            sections (
                id,
                title,
                display_order,
                module_id,
                modules (
                    id,
                    title
                )
            )
        `)
        .eq('id', lessonId)
        .single()

    if (error || !lesson) {
        console.error('Error fetching lesson:', error)
        return notFound()
    }

    // Verify module ID matches
    if (lesson.sections?.module_id !== moduleId) {
        return notFound()
    }

    // Fetch ALL lessons in this module (across all sections) for next/prev navigation
    const { data: allModuleLessons } = await supabase
        .from('lessons')
        .select(`
            id, 
            title, 
            display_order,
            section_id,
            sections!inner (
                display_order,
                module_id
            )
        `)
        .eq('sections.module_id', moduleId)
        .order('display_order', { foreignTable: 'sections', ascending: true })
        .order('display_order', { ascending: true })

    // Sort lessons by section order, then lesson order
    const sortedLessons = (allModuleLessons || []).sort((a, b) => {
        const sectionOrderA = (a.sections as any)?.display_order || 0
        const sectionOrderB = (b.sections as any)?.display_order || 0
        if (sectionOrderA !== sectionOrderB) {
            return sectionOrderA - sectionOrderB
        }
        return (a.display_order || 0) - (b.display_order || 0)
    })

    // Find current lesson index and adjacent lessons
    const currentIndex = sortedLessons.findIndex(l => l.id === lessonId)
    const prevLesson = currentIndex > 0 ? sortedLessons[currentIndex - 1] : null
    const nextLesson = currentIndex < sortedLessons.length - 1 ? sortedLessons[currentIndex + 1] : null

    // Fetch user progress for this lesson
    const { data: progress } = await supabase
        .from('user_progress')
        .select('completed')
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId)
        .single()

    return (
        <LessonViewer
            lesson={lesson}
            module={{
                id: lesson.sections.modules.id,
                title: lesson.sections.modules.title
            }}
            initialCompleted={progress?.completed || false}
            userId={user.id}
            navigation={{
                prevLesson: prevLesson ? { id: prevLesson.id, title: prevLesson.title } : null,
                nextLesson: nextLesson ? { id: nextLesson.id, title: nextLesson.title } : null,
                currentIndex: currentIndex + 1,
                totalLessons: sortedLessons.length
            }}
        />
    )
}
