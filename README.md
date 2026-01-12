# CheckFlow - CEHRS Certification Study App

> **A comprehensive, self-paced online 1:1 study course for the NHA Certified Electronic Health Records Specialist (CEHRS) certification exam.**

**GitHub Repository:** [https://github.com/RTSII/CertFlow](https://github.com/RTSII/CertFlow)

---

## 🎯 Project Purpose

CheckFlow is a personal-use web application designed to provide a complete, engaging, and effective study experience for the CEHRS certification exam. The app transforms traditional study materials into an interactive, progress-tracked learning journey with a distinctive vaporwave/cyberpunk aesthetic.

### Target User
- **Single user** (personal study app)
- Preparing for the **NHA CEHRS certification exam**
- Needs structured, comprehensive coverage of all exam domains
- Wants progress tracking and self-assessment capabilities

---

## 📊 Exam Domain Coverage

| Module | Title | Exam Weight | Status |
|--------|-------|-------------|--------|
| 1 | Non-Clinical Operations | 28% | Structure complete, content pending |
| 2 | Clinical Operations | 32% | Section 2.1 complete (6 lessons) |
| 3 | Revenue Cycle & Finance | 15% | Structure complete, content pending |
| 4 | Regulatory Compliance | 15% | Structure complete, content pending |
| 5 | Reporting | 10% | Section 5.1 complete (5 lessons) |
| 6 | Practice & Exam Prep | 0% | Structure complete, quiz engine pending |

**Total:** 6 modules, 35 sections, 159 lessons, ~35 hours of study material

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Database** | Supabase (PostgreSQL) |
| **Auth** | Supabase Auth |
| **State Management** | TanStack Query |
| **Deployment** | Vercel (planned) |

---

## 📁 Project Structure

```
cobalt-lagoon/
├── docs/                          # Source materials & documentation
│   ├── STUDY_GUIDE_OUTLINE.md     # Complete course structure
│   ├── CEHRS_STUDY_RESOURCES.md   # External study resources
│   ├── Section *.md               # Raw instructor content for transformation
│   └── AI_LESSON_PROMPT.md        # Prompt template for AI content creation
├── src/
│   ├── app/                       # Next.js pages (App Router)
│   │   ├── (auth)/                # Login/signup pages
│   │   ├── (dashboard)/           # Main app pages (modules, resources, etc.)
│   │   └── globals.css            # Vaporwave theme CSS variables
│   ├── components/
│   │   ├── layout/                # Sidebar, Header, MobileNav
│   │   ├── modules/               # ModuleCard, LessonItem, LessonViewer
│   │   ├── resources/             # ResourceCard
│   │   └── ui/                    # shadcn/ui components
│   ├── content/
│   │   ├── modules.ts             # Course structure definition (6 modules)
│   │   ├── resources.ts           # External resource links
│   │   └── lessons/               # Transformed lesson content files
│   │       ├── section-2-1-clinical-documentation.ts
│   │       └── section-5-1-financial-reporting.ts
│   ├── hooks/                     # Custom React hooks (useProgress, etc.)
│   ├── lib/
│   │   └── supabase/              # Supabase client + seed scripts
│   ├── styles/
│   │   └── ui-standards.ts        # Mandatory UI styling guidelines
│   └── types/                     # TypeScript type definitions
└── supabase/
    └── migrations/                # Database schema SQL files
```

---

## 🎨 UI Design Standards

The app uses a **vaporwave/cyberpunk aesthetic** with strict text visibility rules:

### Text Colors (MANDATORY)
| Use Case | Class | Color |
|----------|-------|-------|
| Primary text | `text-white` | Pure white |
| Secondary text | `text-zinc-300` | Light gray |
| Muted/metadata | `text-zinc-400` | Medium gray |
| Disabled | `text-zinc-500` | Dark gray |

### DO NOT USE
- `text-zinc-100` (too light)
- `text-foreground` without testing
- Any opacity on text

See `src/styles/ui-standards.ts` for complete guidelines.

---

## 📝 Lesson Content Format

All lesson content follows a strict template (see `docs/AI_LESSON_PROMPT.md`):

```markdown
## 🎯 Learning Objective
[Clear, measurable outcome]

## 📚 [Core Concept Title]
[2-4 paragraphs with real-world context]

## 🔧 Practical Application
[Step-by-step workflow or scenarios]

## 💡 Key Terms
| Term | Definition |
|------|------------|

## ✅ Knowledge Check
[2-3 application-focused questions]
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- Supabase account (or local Supabase)

### Installation
```bash
cd cobalt-lagoon
npm install
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Database Setup
```bash
# Run migrations in Supabase SQL Editor
# Then seed the database
npm run seed
```

### Development
```bash
npm run dev
# Open http://localhost:3000
```

---

## 📊 Current Progress

### Completed ✅
- [x] Foundation (Next.js, Supabase, Auth, Layout)
- [x] Module/Section/Lesson navigation with progress tracking
- [x] Vaporwave UI with dark mode default
- [x] 6-module course structure in database
- [x] Section 2.1: Clinical Documentation (6 lessons)
- [x] Section 5.1: Financial Reporting (5 lessons)
- [x] Lesson content template and style guide

### In Progress 🔄
- [ ] Remaining lesson content (148 lessons remaining)

### Pending ⏳
- [ ] Quiz engine and practice tests
- [ ] Analytics/progress dashboard
- [ ] PWA optimization
- [ ] Production deployment

---

## 🤖 AI Content Development

To generate lesson content for a module, provide the AI with:

1. **`docs/AI_LESSON_PROMPT.md`** - Initiating prompt template
2. **`docs/STUDY_GUIDE_OUTLINE.md`** - Complete course structure
3. **`src/content/lessons/section-*-*.ts`** - Example completed lessons

### Critical Requirements for AI Output

| Requirement | Details |
|-------------|---------|
| **Self-Contained** | ALL learning content must be directly in lessons - NO external references |
| **Visual Aids** | Include ASCII diagrams, tables, image placeholders where helpful |
| **Original Content** | Synthesize from public healthcare knowledge (HIPAA regs, HIM principles) |
| **Complete** | Each lesson stands alone - no "see previous lesson" dependencies |

### Copyright-Safe Content Sources
- Federal regulations (HIPAA, HITECH) - public domain
- Standard medical terminology - public knowledge
- Generic EHR concepts - not vendor-specific
- Original synthesized explanations

The AI should output TypeScript files matching the existing format.

---

## 📚 Key Documentation Files

| File | Purpose |
|------|---------|
| `docs/STUDY_GUIDE_OUTLINE.md` | Complete course structure with all lessons |
| `docs/AI_LESSON_PROMPT.md` | Prompt template for AI lesson generation |
| `docs/CEHRS_STUDY_RESOURCES.md` | External study resources |
| `src/styles/ui-standards.ts` | Mandatory UI styling rules |
| `TODO.md` | Remaining tasks to complete the project |

---

## 🔐 Database Schema

### Core Tables
- `modules` - Course modules with exam weights
- `sections` - Module sections
- `lessons` - Individual lessons with content (Markdown)
- `user_progress` - Lesson completion tracking
- `resources` - External study resources

### Row Level Security
- All tables protected with RLS policies
- Users can only access their own progress data
- Service role key bypasses RLS for seeding

---

## 📞 Contact

Personal project by the repository owner. Not open for contributions.

---

*Last updated: January 2025*
