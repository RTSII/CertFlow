/**
 * Seed script for Section 2.1 Clinical Documentation lesson content
 * Run with: npx tsx src/lib/supabase/seed_section_2_1.ts
 */

require('dotenv').config({ path: '.env.local' })
import { createClient } from '@supabase/supabase-js'
import { SECTION_2_1_LESSONS } from '../../content/lessons/section-2-1-clinical-documentation'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('❌ Missing Supabase credentials')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function seedSection21Content() {
    console.log('🌱 Seeding Section 2.1 Clinical Documentation lesson content...\n')

    for (const [lessonId, lessonData] of Object.entries(SECTION_2_1_LESSONS)) {
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

    console.log('\n✨ Section 2.1 content seeding complete!')
}

seedSection21Content().catch(console.error)
