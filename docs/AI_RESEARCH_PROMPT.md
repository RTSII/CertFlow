# AI Research Prompt - CEHRS Lesson Content

**Purpose:** Use this prompt to gather raw research data for a specific module/section before building lesson content.

**Recommended Model:** Gemini 2.0 Deep Research, GPT-4o with Search, or Claude with web access

---

## Your Task

Research and compile comprehensive factual information for **[MODULE X, SECTION Y: SECTION NAME]** of the NHA CEHRS (Certified Electronic Health Records Specialist) certification exam.

---

## Research Requirements

### What to Cover

Gather detailed, accurate information on all topics listed for this section. Your research should include:

1. **Definitions** - Clear, precise definitions of all key terms
2. **Regulations** - Relevant federal laws (HIPAA, HITECH, CMS rules) - these are public domain
3. **Workflows** - Step-by-step processes used in healthcare settings
4. **Best Practices** - Industry-standard procedures and guidelines
5. **Real-World Examples** - Scenarios that illustrate concepts in practice
6. **Common Errors** - Mistakes to avoid and why they matter

### Sources to Synthesize (Copyright-Safe)

| Source Type | Examples | Status |
|-------------|----------|--------|
| Federal Regulations | HIPAA Privacy/Security Rules, HITECH Act, CMS guidelines | ✅ Public Domain |
| Standard Terminology | Medical terms, ICD-10/CPT structures, EHR concepts | ✅ Public Knowledge |
| Industry Standards | HL7, FHIR, HIE frameworks | ✅ Public Standards |
| General Workflows | Registration, scheduling, clinical documentation | ✅ Generic Processes |

### Do NOT Include

- ❌ Copyrighted NHA study guide content
- ❌ Actual exam questions
- ❌ Vendor-specific EHR procedures (Epic, Cerner, etc.)
- ❌ Content requiring external links to access

---

## CEHRS Exam Domain Reference

| Domain | Weight | Topics |
|--------|--------|--------|
| **Non-Clinical Operations** | 28% | EHR fundamentals, registration, scheduling, data management |
| **Clinical Operations** | 32% | Documentation, orders, medications, clinical workflows |
| **Revenue Cycle** | 15% | Coding, billing, claims, reimbursement |
| **Regulatory Compliance** | 15% | HIPAA, privacy, security, standards |
| **Reporting** | 10% | Financial, clinical, quality reports |

---

## Output Format

Structure your research as organized notes under each lesson topic:

```markdown
## Section X.Y: [Section Name]

### Lesson 1: [Lesson Title]

**Key Concepts:**
- [Concept 1]: Definition and explanation
- [Concept 2]: Definition and explanation

**Relevant Regulations:**
- [Regulation]: What it requires and why

**Workflow/Process:**
1. Step one
2. Step two
3. Step three

**Real-World Example:**
[Scenario demonstrating the concept]

**Common Pitfalls:**
- [Error]: Why it happens and how to avoid

**Key Terms:**
| Term | Definition |
|------|------------|
| Term 1 | Full definition |
| Term 2 | Full definition |

---

### Lesson 2: [Next Lesson Title]
[Continue same format...]
```

---

## Section Topics to Research

**Attach `STUDY_GUIDE_OUTLINE.md` and specify which section you need researched.**

Example request:
> "Research Module 1, Section 1.2: Patient Registration & Scheduling. Cover all 5 lessons listed in the outline."

---

## Deliverable Checklist

Before submitting your research output, verify:

- [ ] All lesson topics from the outline are covered
- [ ] Definitions are complete and self-explanatory
- [ ] Regulations cited are from public domain sources
- [ ] Workflows include step-by-step detail
- [ ] Real-world examples are realistic and relevant
- [ ] No external links or copyrighted content included

---

*Save the output as raw notes. These will be transformed into TypeScript lesson files in the next phase.*
