## 🧠 Model Strategy Guide

For the best results when creating course content, follow this two-step "Research then Generate" workflow:

### Step 1: Fact-Finding (Raw Data)
**Recommended Model:** `Gemini 2.0 Deep Research` or `GPT-4o (with Search)`
- **Goal:** Gather all factual info, HIPAA regs, coding standards, and real-world healthcare examples for the specific section.
- **Instruct the model:** "Perform a deep research of all CEHRS exam topics for [Module/Section Name]. Find factual definitions, public domain regulations, and common EHR workflows. Save the output as raw notes."

### Step 2: Content Generation (The Prompt)
**Recommended Model:** `Gemini 2.0 Flash Thinking`, `Claude 3.5 Sonnet`, or `GPT-o1-preview`
- **Goal:** Transform raw research into formatted TypeScript files using the prompt below.
- **⚠️ WARNING AGAINST OUTLINES:** These models often try to be "helpful" by providing an outline first. Do NOT accept an outline. Tell the model: **"I DO NOT want an outline. I need the FULL, final, publication-ready content for every lesson in this section in one single mission."**

---

Copy everything below the line and provide it to the AI model along with the target module/section information and your research notes.

---

## INITIATING PROMPT (COPY FROM HERE)

You are helping develop lesson content for **CheckFlow**, a CEHRS (Certified Electronic Health Records Specialist) certification study application. 

## Project Context

CheckFlow is a Next.js web app with:
- **Local Path:** `c:\Users\rtsii\.gemini\antigravity\playground\cobalt-lagoon`
- **6 modules** covering all NHA CEHRS exam domains
- **159 total lessons** across 35 sections
- **Vaporwave/cyberpunk aesthetic** with dark mode
- **Single-user** personal study application
- **Goal:** Help the user pass the CEHRS certification exam

### Current Status
- Modules 1-6 structure defined in `src/content/modules.ts`
- 2 sections have completed content:
  - Section 2.1: Clinical Documentation (6 lessons)
  - Section 5.1: Financial Reporting (5 lessons)
- ~148 lessons still need content

---

## ⚠️ CRITICAL REQUIREMENTS

### 1. SELF-CONTAINED CONTENT - NO EXTERNAL REFERENCES

**ALL learning content must be fully baked into your output.** 

❌ **NEVER DO THIS:**
- "See the NHA official study guide for more details..."
- "Refer to the CMS.gov website for current regulations..."
- "Download the HIPAA compliance checklist from..."
- "Visit [external website] for additional practice questions..."
- Any links, URLs, or references to external sources

✅ **ALWAYS DO THIS:**
- Include all definitions, explanations, and examples directly in the lesson
- Explain concepts completely - assume the learner has ONLY this content
- Provide comprehensive coverage within each lesson
- If a concept requires background knowledge, explain that background too

### 2. VISUAL AIDS ARE ENCOURAGED

Generate visual elements where they enhance learning:

- **ASCII diagrams** for workflows and processes
- **Markdown tables** for comparisons and data
- **Mermaid diagrams** for flowcharts (if supported)
- **Code blocks** for examples and sample documentation
- **Suggest image placeholders** with detailed descriptions for:
  - EHR screen mockups
  - Workflow diagrams
  - Process flowcharts
  - Comparison charts

Example placeholder format:
```
[IMAGE: Description of what should be visualized]
- Key elements to include
- Colors/styling notes
- Educational purpose
```

### 3. FACTUAL ACCURACY WITHOUT COPYRIGHT CONCERNS

**Use your knowledge of:**
- Standard healthcare terminology and practices
- HIPAA regulations and requirements (public law)
- Medical coding concepts (ICD-10-CM, CPT, HCPCS structures)
- EHR system general functions and workflows
- Healthcare revenue cycle processes
- Clinical documentation standards
- Health information management principles

**Content sources that are copyright-safe:**
- Federal regulations (HIPAA, HITECH, CMS rules) - public domain
- Standard medical terminology - public knowledge
- General healthcare workflow concepts - industry standard
- Common EHR functionality descriptions - generic, not vendor-specific
- Your own synthesized explanations of exam concepts

**DO NOT:**
- Copy verbatim from NHA study guides (proprietary)
- Reproduce actual exam questions (proprietary)
- Use vendor-specific EHR screenshots or procedures

**DO:**
- Synthesize your knowledge into original explanations
- Create your own examples and scenarios
- Use generic EHR concepts applicable to any system
- Write original practice questions based on exam domains

---

## Your Task

Create **learner-facing lesson content** for **[SPECIFY MODULE AND SECTION HERE]**.

### Output Format

Generate a TypeScript file with this structure:

```typescript
/**
 * Section X.Y: [Section Title] - Learner-Facing Lesson Content
 */

export const SECTION_X_Y_LESSONS = {
  'lesson-x-y-1': {
    title: '[Lesson Title - must match modules.ts]',
    contentType: 'lesson',
    estimatedMinutes: [calculated from ~200 words/minute],
    content: `
## 🎯 Learning Objective

By the end of this lesson, you'll be able to [specific, measurable outcome].

---

## 📚 [Core Concept Title]

[2-4 paragraphs explaining the concept with real-world healthcare context]

> **Key Insight:** [Important takeaway callout]

### [Subsection as needed]

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data | Data | Data |

[IMAGE: Description of visual aid if applicable]

---

## 🔧 Practical Application

[Real-world scenario or step-by-step workflow - COMPLETE within this lesson]

**Example Documentation:**
\\\`\\\`\\\`
[Concrete example showing the concept in practice]
\\\`\\\`\\\`

### Workflow Diagram
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
| **Term 1** | Complete definition - no external lookup needed |
| **Term 2** | Complete definition - no external lookup needed |
| **Term 3** | Complete definition - no external lookup needed |

---

## ✅ Knowledge Check

1. **[Application-focused question]**
   
   *Answer hint: [Brief guidance without giving away answer]*

2. **[Scenario-based question]**
   
   *Answer hint: [Brief guidance]*

3. **[Analysis question - why/how]**
   
   *Answer hint: [Brief guidance]*

---

*Next Lesson: [Next Lesson Title] →*
`
  },
  // Continue for all lessons in the section...
}

export const SECTION_X_Y_LESSON_IDS = [
  'lesson-x-y-1',
  'lesson-x-y-2',
  // ...
]
```

---

## Content Guidelines

### MUST FOLLOW:
1. **Lesson titles MUST exactly match `src/content/modules.ts`**
2. **Target 800-1,200 words per lesson** (~10-15 minute read)
3. **Use emojis ONLY for section headers:** 🎯 📚 🔧 💡 ✅ ⚠️ 📊 📝
4. **Include 3-5 key terms per lesson in a table**
5. **Knowledge checks must test APPLICATION, not memorization**
6. **Use tables for comparisons and structured data**
7. **Write in active voice, direct to "you"**
8. **Include real-world healthcare examples**
9. **ALL content must be self-contained - NO external references**
10. **Include visual aids (ASCII diagrams, tables, image placeholders)**

### DO NOT:
- Use instructor language ("Let's discuss", "Today we'll learn")
- Include time segments ("10 minutes on this topic")
- Ask yes/no questions without follow-up
- Reference external sources, websites, or documents
- Say "consult your organization's policy" - give the general principle instead
- Use placeholder content that requires filling in later

### Tone
- **Conversational but professional** - like a friendly expert colleague
- **Encouraging** - build confidence
- **Practical** - always connect to real CEHRS job tasks
- **Comprehensive** - explain everything needed, assume nothing

---

## CEHRS Exam Context

The CEHRS exam tests competency in:
- **Non-Clinical Operations** (28%): EHR fundamentals, registration, scheduling, admin workflows
- **Clinical Operations** (32%): Documentation, orders, medications, clinical workflows
- **Revenue Cycle** (15%): Coding, billing, claims, reimbursement
- **Regulatory Compliance** (15%): HIPAA, privacy, security, standards
- **Reporting** (10%): Financial, clinical, quality reports

Content should help learners understand WHAT, WHY, and HOW for each topic.

**Key knowledge areas to cover comprehensively:**
- HIPAA Privacy and Security Rules (public federal regulation)
- EHR Meaningful Use / Promoting Interoperability requirements
- Medical terminology and documentation standards
- ICD-10-CM, CPT, HCPCS coding system structures
- Revenue cycle from registration to payment posting
- Clinical documentation components (H&P, SOAP notes, etc.)
- Health Information Exchange concepts
- Patient rights and consent requirements
- Security safeguards (administrative, physical, technical)
- Quality reporting and compliance measures

---

## Visual Aid Suggestions by Topic

| Topic | Suggested Visual |
|-------|-----------------|
| Workflows | ASCII flowchart or step diagram |
| Comparisons | Markdown table |
| Hierarchies | Indented list or tree structure |
| Timelines | Numbered steps with arrows |
| Data relationships | Table with relationship descriptions |
| EHR screens | [IMAGE: placeholder with description] |
| Forms/documents | Code block with sample content |

---

## Example Lesson Reference

See these completed lessons for format examples:
- `src/content/lessons/section-2-1-clinical-documentation.ts`
- `src/content/lessons/section-5-1-financial-reporting.ts`

---

## Lesson Titles for [MODULE X]

Here are the exact lesson titles you need to create content for:

**[PASTE SECTION FROM STUDY_GUIDE_OUTLINE.md HERE]**

---

## Source Material (if provided)

**[PASTE ANY RAW INSTRUCTOR CONTENT, STUDY MATERIALS, OR RESEARCH HERE]**

Transform this into learner-facing content following the template above.
Remember: The final content must be COMPLETELY SELF-CONTAINED.

---

## Deliverable Checklist

Before submitting your output, verify:

- [ ] All lesson titles match modules.ts exactly
- [ ] Each lesson is 800-1,200 words
- [ ] NO external references or links
- [ ] All key terms fully defined
- [ ] Visual aids included where helpful
- [ ] Knowledge checks are application-focused
- [ ] Content is original (synthesized from general healthcare knowledge)
- [ ] Each lesson stands alone - no "see previous lesson" dependencies

---

## END OF PROMPT

---

## Quick Reference: Lesson IDs by Module

### Module 1: Non-Clinical Operations
- Section 1.1: lesson-1-1-1 through lesson-1-1-4
- Section 1.2: lesson-1-2-1 through lesson-1-2-5
- Section 1.3: lesson-1-3-1 through lesson-1-3-5
- Section 1.4: lesson-1-4-1 through lesson-1-4-4
- Section 1.5: lesson-1-5-1 through lesson-1-5-4
- Section 1.6: lesson-1-6-1 through lesson-1-6-3

### Module 2: Clinical Operations
- Section 2.1: lesson-2-1-1 through lesson-2-1-6 ✅ COMPLETE
- Section 2.2: lesson-2-2-1 through lesson-2-2-5
- Section 2.3: lesson-2-3-1 through lesson-2-3-4
- Section 2.4: lesson-2-4-1 through lesson-2-4-4
- Section 2.5: lesson-2-5-1 through lesson-2-5-4
- Section 2.6: lesson-2-6-1 through lesson-2-6-4
- Section 2.7: lesson-2-7-1 through lesson-2-7-3

### Module 3: Revenue Cycle & Finance
- Section 3.1: lesson-3-1-1 through lesson-3-1-5
- Section 3.2: lesson-3-2-1 through lesson-3-2-4
- Section 3.3: lesson-3-3-1 through lesson-3-3-3
- Section 3.4: lesson-3-4-1 through lesson-3-4-5
- Section 3.5: lesson-3-5-1 through lesson-3-5-3

### Module 4: Regulatory Compliance
- Section 4.1: lesson-4-1-1 through lesson-4-1-6
- Section 4.2: lesson-4-2-1 through lesson-4-2-4
- Section 4.3: lesson-4-3-1 through lesson-4-3-5
- Section 4.4: lesson-4-4-1 through lesson-4-4-4
- Section 4.5: lesson-4-5-1 through lesson-4-5-5
- Section 4.6: lesson-4-6-1 through lesson-4-6-3
- Section 4.7: lesson-4-7-1 through lesson-4-7-3

### Module 5: Reporting
- Section 5.1: lesson-5-1-1 through lesson-5-1-5 ✅ COMPLETE
- Section 5.2: lesson-5-2-1 through lesson-5-2-5
- Section 5.3: lesson-5-3-1 through lesson-5-3-5
- Section 5.4: lesson-5-4-1 through lesson-5-4-4
- Section 5.5: lesson-5-5-1 through lesson-5-5-3

### Module 6: Practice & Exam Prep
- Section 6.1: lesson-6-1-1 through lesson-6-1-5
- Section 6.2: lesson-6-2-1 through lesson-6-2-5
- Section 6.3: lesson-6-3-1 through lesson-6-3-4
- Section 6.4: lesson-6-4-1 through lesson-6-4-5
- Section 6.5: lesson-6-5-1 through lesson-6-5-3

---

## Database Seeding Instructions

**CRITICAL:** After creating the TypeScript lesson file, you MUST seed the content into the Supabase database.

### Seeding Procedure

1. **Create the Direct JavaScript Seed Script**
   
   **File:** `src/lib/supabase/seed_section_X_Y_direct.js`

   Use this template (replace X_Y with your section number):

\`\`\`javascript
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
    const lessonRegex = new RegExp(\`'\${lessonId}':\\\\s*{[^}]+title:\\\\s*'([^']+)',\\\\s*contentType:\\\\s*'[^']+',\\\\s*estimatedMinutes:\\\\s*(\\\\d+),\\\\s*content:\\\\s*\\\\\`([\\\\s\\\\S]*?)\\\\\`\\\\s*}\`, 'm')
    const match = fileContent.match(lessonRegex)
    if (match) {
        return { title: match[1], estimatedMinutes: parseInt(match[2]), content: match[3] }
    }
    return null
}

async function seedSection() {
    console.log('🌱 Seeding Section X.Y...\\n')
    const lessons = [
        { id: 'lesson-x-y-1', title: 'Exact Title from modules.ts' }
        // Add all lessons
    ]
    for (const lesson of lessons) {
        const lessonData = extractLessonContent(lessonFileContent, lesson.id)
        if (!lessonData) { console.log(\`⚠️  Could not extract: \${lesson.id}\`); continue }
        const { data: dbLesson } = await supabase.from('lessons').select('id').eq('title', lesson.title).single()
        if (!dbLesson) { console.log(\`⚠️  Not in DB: \${lesson.title}\`); continue }
        const { error } = await supabase.from('lessons').update({ content: lessonData.content, estimated_minutes: lessonData.estimatedMinutes }).eq('id', dbLesson.id)
        if (error) { console.error(\`❌ \${lesson.title}\`, error.message) } 
        else { console.log(\`✅ \${lesson.title} (\${lessonData.estimatedMinutes}min)\`) }
    }
    console.log('\\n✨ Seeding complete!')
}
seedSection().catch(console.error)
\`\`\`

2. **Run the Seed Script**

\`\`\`bash
node src/lib/supabase/seed_section_X_Y_direct.js
\`\`\`

3. **Verify Success**

You should see ✅ for each lesson. If any fail, check that:
- Lesson titles EXACTLY match those in `src/content/modules.ts`
- The TypeScript file format is correct
- Supabase credentials are in `.env.local`

**DO NOT use `npx tsx` or `npx ts-node` - they fail with complex template literals.**

For complete details, see `docs/SEEDING_PROCEDURE.md`

---

## END OF PROMPT
