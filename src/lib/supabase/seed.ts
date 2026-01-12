import { createClient } from '@supabase/supabase-js'
import { MODULES } from '../../content/modules'
import { RESOURCES } from '../../content/resources'
import * as dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local')
    process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function seed() {
    console.log('🌱 Seeding database with comprehensive CEHRS content...')
    console.log('   This will replace existing content.\n')

    // Clear existing data first (cascade will handle children)
    console.log('🗑️  Clearing existing content...')
    await supabase.from('modules').delete().neq('id', '00000000-0000-0000-0000-000000000000')
    await supabase.from('resources').delete().neq('id', '00000000-0000-0000-0000-000000000000')

    // 1. Insert Modules, Sections, and Lessons (let DB generate UUIDs)
    for (let mIdx = 0; mIdx < MODULES.length; mIdx++) {
        const moduleData = MODULES[mIdx]
        console.log(`  📚 Module ${mIdx + 1}/${MODULES.length}: ${moduleData.title}`)

        const { data: module, error: mError } = await supabase
            .from('modules')
            .insert({
                title: moduleData.title,
                description: moduleData.description,
                week_range: moduleData.weekRange,
                icon: moduleData.icon,
                exam_weight: moduleData.examWeight || 0,
                display_order: mIdx + 1,
            })
            .select()
            .single()

        if (mError) {
            console.error(`    ❌ Error inserting module: ${mError.message}`)
            continue
        }

        for (let sIdx = 0; sIdx < moduleData.sections.length; sIdx++) {
            const sectionData = moduleData.sections[sIdx]
            console.log(`    📖 Section: ${sectionData.title}`)

            const { data: section, error: sError } = await supabase
                .from('sections')
                .insert({
                    module_id: module.id,
                    title: sectionData.title,
                    description: sectionData.description || null,
                    display_order: sIdx + 1,
                })
                .select()
                .single()

            if (sError) {
                console.error(`      ❌ Error inserting section: ${sError.message}`)
                continue
            }

            // Insert all lessons for this section
            const lessonsToInsert = sectionData.lessons.map((lessonData, lIdx) => ({
                section_id: section.id,
                title: lessonData.title,
                content_type: lessonData.contentType,
                estimated_minutes: lessonData.estimatedMinutes || 10,
                display_order: lIdx + 1,
            }))

            const { error: lError } = await supabase
                .from('lessons')
                .insert(lessonsToInsert)

            if (lError) {
                console.error(`      ❌ Error inserting lessons: ${lError.message}`)
            }
        }
    }

    // 2. Insert Resources
    console.log('\n  📎 Inserting resources...')
    const resourcesToInsert = RESOURCES.map(resourceData => ({
        title: resourceData.title,
        url: resourceData.url,
        resource_type: resourceData.resourceType,
        category: resourceData.category,
        description: resourceData.description,
        is_external: resourceData.isExternal,
        domain_tags: resourceData.domainTags,
    }))

    const { error: rError } = await supabase
        .from('resources')
        .insert(resourcesToInsert)

    if (rError) {
        console.error(`  ❌ Error inserting resources: ${rError.message}`)
    }

    // Count totals
    const totalLessons = MODULES.reduce((acc, m) =>
        acc + m.sections.reduce((sAcc, s) => sAcc + s.lessons.length, 0), 0)

    console.log(`\n✅ Seeding complete!`)
    console.log(`   📚 ${MODULES.length} modules`)
    console.log(`   📖 ${MODULES.reduce((a, m) => a + m.sections.length, 0)} sections`)
    console.log(`   📝 ${totalLessons} lessons`)
    console.log(`   📎 ${RESOURCES.length} resources`)
}

seed().catch(console.error)
