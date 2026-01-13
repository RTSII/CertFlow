/**
 * Seed script for Section 1.1 EHR Fundamentals lesson content
 * Run with: npx tsx src/lib/supabase/seed_section_1_1.ts
 */

require('dotenv').config({ path: '.env.local' })
import { createClient } from '@supabase/supabase-js'
import { SECTION_1_1_LESSONS } from '../../content/lessons/section-1-1-ehr-fundamentals'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase credentials')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function seedSection11Content() {
    console.log('🌱 Seeding Section 1.1 EHR Fundamentals lesson content...\n')

    for (const [lessonId, lessonData] of Object.entries(SECTION_1_1_LESSONS)) {
        // Find the lesson in the database by title
        const { data: lesson, error: findError } = await supabase
            .from('lessons')
            .select('id, title')
            .eq('title', lessonData.title)
            .single()

        if (findError || !lesson) {
            console.log(`⚠️  Lesson not found: "${lessonData.title}" - skipping`)
            continue
        }

        // Update the lesson with content
        const { error: updateError } = await supabase
            .from('lessons')
            .update({
                content: lessonData.content,
                estimated_minutes: lessonData.estimatedMinutes,
            })
            .eq('id', lesson.id)

        if (updateError) {
            console.error(`❌ Failed to update "${lesson.title}":`, updateError.message)
        } else {
            console.log(`✅ Updated: ${lesson.title} (${lessonData.estimatedMinutes}min)`)
        }
    }

    console.log('\n✨ Section 1.1 content seeding complete!')
}

seedSection11Content().catch(console.error)

