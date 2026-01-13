# Lesson Content Seeding Procedure

## ⚠️ IMPORTANT: Seeding Process for AI

This document outlines the **proven, reliable method** for seeding lesson content into the Supabase database after creating new lesson TypeScript files.

---

## Problem Background

**Issue:** TypeScript files with complex template literals containing escape sequences (e.g., `\u0026`, `\&`, escaped backticks) cause `tsx` and `ts-node` runners to fail with `TransformError`.

**Affected Content:** Lesson content with special characters, code examples, ASCII diagrams, or HL7/FHIR message examples.

---

## ✅ RECOMMENDED SEEDING METHOD

### Approach: Direct JavaScript with File Reading

**This is the ONLY method that reliably works regardless of content complexity.**

### Step 1: Create the Lesson TypeScript File

Create your lesson file as normal in `src/content/lessons/section-X-Y-name.ts`:

\`\`\`typescript
export const SECTION_X_Y_LESSONS = {
    'lesson-x-y-1': {
        title: 'Lesson Title',
        contentType: 'lesson',
        estimatedMinutes: 15,
        content: \`
## 🎯 Learning Objective
...
\`
    }
}

export const SECTION_X_Y_LESSON_IDS = ['lesson-x-y-1', ...]
\`\`\`

### Step 2: Create Direct JavaScript Seed Script

**File:** `src/lib/supabase/seed_section_X_Y_direct.js`

\`\`\`javascript
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

// Read the TypeScript file as text
const lessonFilePath = path.join(__dirname, '../../content/lessons/section-X-Y-name.ts')
const lessonFileContent = fs.readFileSync(lessonFilePath, 'utf8')

// Extract lesson content via regex
function extractLessonContent(fileContent, lessonId) {
    const lessonRegex = new RegExp(\`'\${lessonId}':\\\\s*{[^}]+title:\\\\s*'([^']+)',\\\\s*contentType:\\\\s*'[^']+',\\\\s*estimatedMinutes:\\\\s*(\\\\d+),\\\\s*content:\\\\s*\\\\\`([\\\\s\\\\S]*?)\\\\\`\\\\s*}\`, 'm')
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

async function seedSectionXY() {
    console.log('🌱 Seeding Section X.Y...\\n')

    const lessons = [
        { id: 'lesson-x-y-1', title: 'Exact Lesson Title from modules.ts' },
        { id: 'lesson-x-y-2', title: 'Another Lesson Title' }
    ]

    for (const lesson of lessons) {
        const lessonData = extractLessonContent(lessonFileContent, lesson.id)
        
        if (!lessonData) {
            console.log(\`⚠️  Could not extract: \${lesson.id}\`)
            continue
        }

        const { data: dbLesson, error: findError } = await supabase
            .from('lessons')
            .select('id')
            .eq('title', lesson.title)
            .single()

        if (findError || !dbLesson) {
            console.log(\`⚠️  Not found in DB: "\${lesson.title}"\`)
            continue
        }

        const { error: updateError } = await supabase
            .from('lessons')
            .update({
                content: lessonData.content,
                estimated_minutes: lessonData.estimatedMinutes
            })
            .eq('id', dbLesson.id)

        if (updateError) {
            console.error(\`❌ Failed: \${lesson.title}\`, updateError.message)
        } else {
            console.log(\`✅ \${lesson.title} (\${lessonData.estimatedMinutes}min)\`)
        }
    }

    console.log('\\n✨ Seeding complete!')
}

seedSectionXY().catch(console.error)
\`\`\`

### Step 3: Run the Seed Script

\`\`\`bash
node src/lib/supabase/seed_section_X_Y_direct.js
\`\`\`

**Expected Output:**
\`\`\`
🌱 Seeding Section X.Y...

✅ Lesson Title One (15min)
✅ Lesson Title Two (12min)

✨ Seeding complete!
\`\`\`

---

## ❌ DEPRECATED METHODS (Do Not Use)

### Method 1: TypeScript with tsx (UNRELIABLE)

**Why it fails:** Any escape sequences or special template literal content causes `TransformError`.

~~\`npx tsx src/lib/supabase/seed_section_X_Y.ts\`~~ **❌ Don't use**

### Method 2: TypeScript with ts-node (UNRELIABLE)

**Why it fails:** Same parsing issues as tsx, plus ESM vs CommonJS conflicts.

~~\`npx ts-node src/lib/supabase/seed_section_X_Y.ts\`~~ **❌ Don't use**

---

## 📋 Checklist for AI Content Creators

When generating lesson content and seeding:

- [ ] Create TypeScript lesson file in `src/content/lessons/`
- [ ] **Use the Direct JavaScript seed script template above**
- [ ] Update the `lessons` array with exact titles from `modules.ts`
- [ ] Update the file path to match your lesson file
- [ ] Run: `node src/lib/supabase/seed_section_X_Y_direct.js`
- [ ] Verify success messages for all lessons
- [ ] Commit and push changes

---

## 🔍 Troubleshooting

### Error: "Could not extract: lesson-x-y-1"

**Cause:** Regex didn't match the lesson structure in the file.

**Solution:** Verify the lesson object follows the exact format:
\`\`\`typescript
'lesson-x-y-1': {
    title: 'Title',
    contentType: 'lesson',
    estimatedMinutes: 15,
    content: \`...\`
}
\`\`\`

### Error: "Not found in DB: Lesson Title"

**Cause:** The title in your seed script doesn't exactly match the title in the database.

**Solution:** 
1. Check `src/content/modules.ts` for the exact lesson title
2. Query Supabase directly: `SELECT id, title FROM lessons WHERE title LIKE '%keyword%'`
3. Update the `lessons` array with the exact title

---

## 📊 Success Metrics

A successful seed operation should show:
- ✅ Green checkmark for each lesson
- Lesson title + estimated minutes displayed
- "Seeding complete!" message
- No error messages

---

*Last Updated: January 12, 2026*  
*Proven Method: Section 1.1 EHR Fundamentals (4 lessons)*
