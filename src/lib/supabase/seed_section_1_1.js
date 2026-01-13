// Simple CommonJS seed script for Section 1.1
const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase credentials')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Import the lesson content
const { SECTION_1_1_LESSONS } = require('../../content/lessons/section-1-1-ehr-fundamentals.ts')

async function seedSection11() {
    console.log('🌱 Seeding Section 1.1 EHR Fundamentals...\n')

    const lessons = [
        { id: 'lesson-1-1-1', title: 'What are Electronic Health Records?' },
        { id: 'lesson-1-1-2', title: 'EHR Benefits & Core Functions' },
        { id: 'lesson-1-1-3', title: 'EHR Data Content & Structure' },
        { id: 'lesson-1-1-4', title: 'Health Information Exchange (HIE) Overview' }
    ]

    for (const lesson of lessons) {
        const lessonData = SECTION_1_1_LESSONS[lesson.id]

        // Find lesson by title
        const { data: dbLesson, error: findError } = await supabase
            .from('lessons')
            .select('id')
            .eq('title', lesson.title)
            .single()

        if (findError || !dbLesson) {
            console.log(`⚠️  Lesson not found: "${lesson.title}"`)
            continue
        }

        // Update with content
        const { error: updateError } = await supabase
            .from('lessons')
            .update({
                content: lessonData.content,
                estimated_minutes: lessonData.estimatedMinutes
            })
            .eq('id', dbLesson.id)

        if (updateError) {
            console.error(`❌ Failed: ${lesson.title}`, updateError.message)
        } else {
            console.log(`✅ ${lesson.title} (${lessonData.estimatedMinutes}min)`)
        }
    }

    console.log('\n✨ Section 1.1 seeding complete!')
}

seedSection11().catch(console.error)
