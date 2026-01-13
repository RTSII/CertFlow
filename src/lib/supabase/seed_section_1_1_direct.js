// Direct database update script - bypasses TypeScript import issues
require('dotenv').config({ path: '.env.local' })
const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase credentials')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

// Read the TypeScript file as text and extract content
const lessonFilePath = path.join(__dirname, '../../content/lessons/section-1-1-ehr-fundamentals.ts')
const lessonFileContent = fs.readFileSync(lessonFilePath, 'utf8')

// Parse out the lesson data manually (simple regex extraction)
function extractLessonContent(fileContent, lessonId) {
    // Find the lesson object
    const lessonRegex = new RegExp(`'${lessonId}':\\s*{[^}]+title:\\s*'([^']+)',\\s*contentType:\\s*'[^']+',\\s*estimatedMinutes:\\s*(\\d+),\\s*content:\\s*\`([\\s\\S]*?)\`\\s*}`, 'm')
    const match = fileContent.match(lessonRegex)

    if (match) {
        return {
            title: match[1],
            estimatedMinutes: parseInt(match[2]),
            content: match[3]
        }
    }
    return null
}

async function seedSection11() {
    console.log('🌱 Seeding Section 1.1 EHR Fundamentals...\n')

    const lessons = [
        { id: 'lesson-1-1-1', title: 'What are Electronic Health Records?' },
        { id: 'lesson-1-1-2', title: 'EHR Benefits & Core Functions' },
        { id: 'lesson-1-1-3', title: 'EHR Data Content & Structure' },
        { id: 'lesson-1-1-4', title: 'Health Information Exchange (HIE) Overview' }
    ]

    for (const lesson of lessons) {
        const lessonData = extractLessonContent(lessonFileContent, lesson.id)

        if (!lessonData) {
            console.log(`⚠️  Could not extract: ${lesson.id}`)
            continue
        }

        // Find lesson by title
        const { data: dbLesson, error: findError } = await supabase
            .from('lessons')
            .select('id')
            .eq('title', lesson.title)
            .single()

        if (findError || !dbLesson) {
            console.log(`⚠️  Lesson not found in DB: "${lesson.title}"`)
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
