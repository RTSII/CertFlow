# AI Lesson Build Prompt - CEHRS Content Creation & Seeding

**Purpose:** Transform raw research into publication-ready TypeScript lesson files and seed them into the database.

**Recommended Model:** Gemini 2.0 Flash Thinking, Claude 3.5+ Sonnet, or GPT-o1

---

## ⚠️ CRITICAL: Read Before Starting

1. **NO OUTLINES** - Generate FULL, final content. Do not ask for approval or provide outlines first.
2. **NO EXTERNAL LINKS** - All content must be self-contained within each lesson.
3. **COMPLETE THE SEEDING** - Content is not done until it's in the database.

---

## Project Context

**CheckFlow** - CEHRS Certification Study App
- **Local Path:** `c:\Users\rtsii\.gemini\antigravity\playground\cobalt-lagoon`
- **GitHub:** https://github.com/RTSII/CertFlow
- **Tech Stack:** Next.js 14+, TypeScript, Supabase, Tailwind CSS

---

## Your Task

Transform raw research notes into a TypeScript lesson file for **[SECTION X.Y: SECTION NAME]**, then seed it into the database.

---

## Step 1: Create the TypeScript Lesson File

**Location:** `src/content/lessons/section-X-Y-name.ts`

### File Structure

```typescript
/**
 * Section X.Y: [Section Name] - Learner-Facing Lesson Content
 */

export const SECTION_X_Y_LESSONS = {
    'lesson-x-y-1': {
        title: '[EXACT title from modules.ts]',
        contentType: 'lesson',
        estimatedMinutes: 15, // Calculate: ~200 words/minute
        content: `
## 🎯 Learning Objective

By the end of this lesson, you will be able to [specific, measurable outcome].

---

## 📚 [Core Concept Title]

[2-4 paragraphs with real-world healthcare context. Be comprehensive - this is the learner's ONLY source.]

> **Key Insight:** [Important takeaway]

### [Subsection]

| Column 1 | Column 2 |
|----------|----------|
| Data | Data |

---

## 🔧 Practical Application

[Step-by-step workflow or real-world scenario - COMPLETE within this lesson]

**Example:**
\\\`\\\`\\\`
[Concrete example showing the concept]
\\\`\\\`\\\`

### Workflow
\\\`\\\`\\\`
Step 1: [Action]
    ↓
Step 2: [Action]
    ↓
Step 3: [Action]
\\\`\\\`\\\`

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **Term 1** | Complete definition |
| **Term 2** | Complete definition |

---

## ✅ Knowledge Check

1. **[Application question]**
   *Hint: [Guidance]*

2. **[Scenario question]**
   *Hint: [Guidance]*

---

*Next Lesson: [Title] →*
`
    },
    // Continue for ALL lessons in this section...
}

export const SECTION_X_Y_LESSON_IDS = [
    'lesson-x-y-1',
    'lesson-x-y-2',
    // ...
]
```

---

## Content Rules

### MUST Follow

| Rule | Details |
|------|---------|
| **Exact Titles** | Match `src/content/modules.ts` exactly |
| **Word Count** | 800-1,200 words per lesson |
| **Self-Contained** | NO "see previous lesson" or external references |
| **Visual Aids** | Include tables, ASCII diagrams, code blocks |
| **Emojis** | Headers only: 🎯 📚 🔧 💡 ✅ ⚠️ |
| **3-5 Key Terms** | Per lesson, in a table |
| **Knowledge Checks** | Test APPLICATION, not memorization |

### DO NOT

- ❌ Reference external websites or documents
- ❌ Use "consult your organization's policy"
- ❌ Use instructor language ("Today we'll learn...")
- ❌ Include placeholder content
- ❌ Use escaped backticks that break TypeScript parsing

---

## Step 2: Seed the Database

**CRITICAL:** TypeScript seed scripts fail with complex content. Use the JavaScript approach.

### Create Seed Script

**File:** `src/lib/supabase/seed_section_X_Y_direct.js`

```javascript
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

const lessonFilePath = path.join(__dirname, '../../content/lessons/section-X-Y-name.ts')
const lessonFileContent = fs.readFileSync(lessonFilePath, 'utf8')

function extractLessonContent(fileContent, lessonId) {
    const lessonRegex = new RegExp(`'${lessonId}':\\s*{[^}]+title:\\s*'([^']+)',\\s*contentType:\\s*'[^']+',\\s*estimatedMinutes:\\s*(\\d+),\\s*content:\\s*\`([\\s\\S]*?)\`\\s*}`, 'm')
    const match = fileContent.match(lessonRegex)
    if (match) {
        return { title: match[1], estimatedMinutes: parseInt(match[2]), content: match[3] }
    }
    return null
}

async function seedSection() {
    console.log('🌱 Seeding Section X.Y...\\n')
    
    const lessons = [
        { id: 'lesson-x-y-1', title: 'Exact Title from modules.ts' },
        { id: 'lesson-x-y-2', title: 'Another Exact Title' }
        // Add ALL lessons
    ]
    
    for (const lesson of lessons) {
        const lessonData = extractLessonContent(lessonFileContent, lesson.id)
        if (!lessonData) { 
            console.log(`⚠️  Could not extract: ${lesson.id}`)
            continue 
        }
        
        const { data: dbLesson } = await supabase
            .from('lessons')
            .select('id')
            .eq('title', lesson.title)
            .single()
            
        if (!dbLesson) { 
            console.log(`⚠️  Not in DB: ${lesson.title}`)
            continue 
        }
        
        const { error } = await supabase
            .from('lessons')
            .update({ 
                content: lessonData.content, 
                estimated_minutes: lessonData.estimatedMinutes 
            })
            .eq('id', dbLesson.id)
            
        if (error) { 
            console.error(`❌ ${lesson.title}`, error.message) 
        } else { 
            console.log(`✅ ${lesson.title} (${lessonData.estimatedMinutes}min)`) 
        }
    }
    
    console.log('\\n✨ Seeding complete!')
}

seedSection().catch(console.error)
```

### Run the Seed

```bash
node src/lib/supabase/seed_section_X_Y_direct.js
```

**Expected Output:**
```
🌱 Seeding Section X.Y...

✅ Lesson Title One (15min)
✅ Lesson Title Two (12min)

✨ Seeding complete!
```

---

## Step 3: Commit & Push

```bash
git add .
git commit -m "Add Section X.Y [Name] lessons (N lessons)"
git push origin main
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Could not extract" | Check TypeScript file format matches template exactly |
| "Not in DB" | Verify title matches `modules.ts` exactly |
| TransformError with tsx | Use the JavaScript seed script, not TypeScript |
| Content not appearing | Clear browser cache, restart dev server |

---

## Final Checklist

- [ ] TypeScript file created at correct path
- [ ] All lesson titles match modules.ts
- [ ] Each lesson is 800-1,200 words
- [ ] NO external references or links
- [ ] Visual aids included (tables, diagrams)
- [ ] Knowledge checks test application
- [ ] Seed script created and run successfully
- [ ] All lessons show ✅ in seed output
- [ ] Changes committed and pushed to GitHub

---

## Attachments Required

When starting a new session with this prompt, attach:
1. **This file** (`AI_LESSON_BUILD_PROMPT.md`)
2. **`STUDY_GUIDE_OUTLINE.md`** - For exact lesson titles
3. **Raw research notes** - From the research phase

---

*Last Updated: January 13, 2026*
