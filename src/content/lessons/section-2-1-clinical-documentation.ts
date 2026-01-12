/**
 * Section 2.1: Clinical Documentation - Learner-Facing Lesson Content
 * 
 * Transformed from instructor-facing material into engaging, digestible lessons.
 * Each lesson targets 10-18 minutes of focused reading.
 */

export const SECTION_2_1_LESSONS = {
    // Lesson 2.1.1: Chief Complaint & History of Present Illness
    'lesson-2-1-1': {
        title: 'Chief Complaint & History of Present Illness',
        contentType: 'lesson',
        estimatedMinutes: 15,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll be able to define clinical documentation, explain its critical importance in healthcare, and accurately document a patient's chief complaint and history of present illness (HPI).

---

## 📚 What is Clinical Documentation?

**Clinical documentation** is the official, permanent record of everything that happens during patient care:

- Patient encounters and visits
- Clinical observations and findings
- Assessments and diagnoses
- Orders and treatments
- Patient responses and outcomes

> **Key Insight:** Clinical documentation isn't just "charting"—it's the legal, clinical, and financial foundation of healthcare delivery.

### The Four Pillars of Documentation

| Purpose | Why It Matters |
|---------|----------------|
| **Continuity of Care** | Every provider knows what happened before |
| **Billing & Coding** | "If it isn't documented, it didn't happen" |
| **Legal Evidence** | The record is a legal document that can be subpoenaed |
| **Quality Measurement** | Required for regulatory programs and internal improvement |

---

## 📊 The Chief Complaint (CC)

The **chief complaint** is the patient's primary reason for seeking care, documented in their own words.

**Best Practices:**
- Use the patient's **actual words** in quotation marks
- Keep it brief—usually one sentence
- Focus on the **main symptom or concern**

**Examples:**

| ✅ Good CC | ❌ Poor CC |
|-----------|-----------|
| "Chest pain for 2 days" | Cardiac workup |
| "I can't shake this cough" | Respiratory issue |
| "My knee has been swelling" | Knee problem |

> **CEHRS Tip:** The chief complaint drives the entire encounter. An inaccurate CC can lead to wrong diagnostic paths, improper coding, and potential legal issues.

---

## 📝 History of Present Illness (HPI)

The **HPI** is a detailed narrative about the chief complaint—expanding on what the patient briefly stated.

### The OLDCARTS Framework

Use this mnemonic to ensure comprehensive HPI documentation:

| Element | Question | Example |
|---------|----------|---------|
| **O**nset | When did it start? | "Two days ago" |
| **L**ocation | Where is the symptom? | "Center of chest" |
| **D**uration | How long does it last? | "Episodes of 5-10 minutes" |
| **C**haracter | What does it feel like? | "Pressure, like someone sitting on my chest" |
| **A**ggravating factors | What makes it worse? | "Walking upstairs" |
| **R**elieving factors | What makes it better? | "Rest and deep breathing" |
| **T**iming | When does it occur? | "Mostly in the morning" |
| **S**everity | How bad is it (0-10)? | "7 out of 10" |

---

## 🔧 Practical Application

**Scenario:** A patient arrives at the clinic and says, "I've had this terrible headache for three days."

**Your documentation task:**

1. **Chief Complaint:** "Terrible headache for three days"

2. **HPI using OLDCARTS:**
   - Onset: 3 days ago, started gradually after work
   - Location: Behind both eyes, radiating to temples
   - Duration: Constant, no relief
   - Character: Throbbing, pressure-like
   - Aggravating: Bright lights, loud sounds, bending over
   - Relieving: Dark room, ibuprofen (partial relief)
   - Timing: Worst in afternoons
   - Severity: 6/10 at baseline, 9/10 at worst

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **Chief Complaint (CC)** | Patient's primary reason for visit, in their own words |
| **History of Present Illness (HPI)** | Detailed narrative about the chief complaint |
| **OLDCARTS** | Mnemonic for HPI elements: Onset, Location, Duration, Character, Aggravating, Relieving, Timing, Severity |
| **Source Data** | Original information entered at time of care |

---

## ✅ Knowledge Check

1. **Why should the chief complaint be documented in the patient's own words rather than medical terminology?**

2. **A patient says "my stomach hurts." Using OLDCARTS, list 4 follow-up questions you would ask to build a complete HPI.**

3. **What are two potential consequences of an inaccurate or incomplete chief complaint?**

---

*Next Lesson: Review of Systems (ROS) →*
`
    },

    // Lesson 2.1.2: Review of Systems (ROS)
    'lesson-2-1-2': {
        title: 'Review of Systems (ROS)',
        contentType: 'lesson',
        estimatedMinutes: 12,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll be able to explain the purpose of the Review of Systems (ROS), identify the major body systems reviewed, and understand how ROS documentation supports comprehensive patient assessment.

---

## 📚 What is the Review of Systems?

The **Review of Systems (ROS)** is a systematic inquiry about symptoms across all major body systems—whether or not they seem related to the chief complaint.

> **Key Insight:** The ROS helps uncover symptoms the patient might not mention spontaneously, potentially revealing related conditions or "red flags."

### ROS vs. HPI

| Aspect | HPI | ROS |
|--------|-----|-----|
| **Focus** | Deep dive into chief complaint | Broad scan of all systems |
| **Depth** | Very detailed (OLDCARTS) | Yes/No or brief descriptions |
| **Connection** | Directly about the main issue | May be related or unrelated |

---

## 📊 Major Systems in ROS

The ROS typically covers **14 body systems**:

| System | Examples of Symptoms Asked |
|--------|---------------------------|
| **Constitutional** | Fever, fatigue, weight change |
| **Eyes** | Vision changes, pain, discharge |
| **ENT** | Hearing loss, sore throat, congestion |
| **Cardiovascular** | Chest pain, palpitations, edema |
| **Respiratory** | Cough, shortness of breath, wheezing |
| **Gastrointestinal** | Nausea, vomiting, diarrhea, constipation |
| **Genitourinary** | Frequency, urgency, pain with urination |
| **Musculoskeletal** | Joint pain, stiffness, swelling |
| **Integumentary (Skin)** | Rashes, lesions, itching |
| **Neurological** | Headaches, dizziness, numbness |
| **Psychiatric** | Depression, anxiety, sleep issues |
| **Endocrine** | Heat/cold intolerance, excessive thirst |
| **Hematologic/Lymphatic** | Easy bruising, swollen glands |
| **Allergic/Immunologic** | Allergies, frequent infections |

---

## 📝 Documentation Patterns

ROS can be documented as:

### Positive/Negative Format
\`\`\`
Constitutional: Denies fever, fatigue. Reports 5-lb weight loss.
HEENT: Denies vision changes. Reports sore throat x 2 days.
Cardiovascular: Denies chest pain, palpitations, edema.
\`\`\`

### Comprehensive Negative with Exceptions
\`\`\`
ROS: 14-system review negative except as noted in HPI and:
- Respiratory: (+) cough, productive with yellow sputum
- Constitutional: (+) low-grade fever x 2 days
\`\`\`

> **CEHRS Tip:** For billing purposes, the number of systems reviewed affects the E/M (Evaluation and Management) code level. More documented systems = potentially higher reimbursement.

---

## ⚠️ Common ROS Documentation Errors

| Error | Why It's a Problem |
|-------|-------------------|
| **Copy-paste without updating** | May not reflect today's visit |
| **Incomplete documentation** | Missing systems = missing potential issues |
| **Documenting ROS before asking** | Fraudulent documentation |
| **Using only "denies all"** | Doesn't demonstrate thorough review |

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **Review of Systems (ROS)** | Systematic inquiry about symptoms across all body systems |
| **Positive finding** | Symptom that IS present |
| **Negative finding** | Symptom that is NOT present (denied) |
| **E/M Codes** | Evaluation and Management codes for billing office visits |

---

## ✅ Knowledge Check

1. **How does the ROS differ from the HPI in scope and purpose?**

2. **Why might a provider document an ROS even when the patient came in for a simple issue like an ankle sprain?**

3. **What are two documentation errors that could occur with ROS and why are they problematic?**

---

*Next Lesson: Physical Examination Documentation →*
`
    },

    // Lesson 2.1.3: Physical Examination Documentation
    'lesson-2-1-3': {
        title: 'Physical Examination Documentation',
        contentType: 'lesson',
        estimatedMinutes: 15,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll be able to describe the components of physical examination documentation, understand body system examinations, and recognize proper documentation standards for objective clinical findings.

---

## 📚 What is the Physical Examination?

The **physical examination (PE)** documents the provider's **objective findings**—what they observe, hear, feel, and measure during the hands-on assessment.

> **Key Distinction:** The PE is about **objective data** (what the provider directly observes), while the HPI and ROS contain **subjective data** (what the patient reports).

### Subjective vs. Objective

| Subjective (Patient Reports) | Objective (Provider Observes) |
|------------------------------|-------------------------------|
| "My chest hurts" | Heart sounds regular, no murmur |
| "I've been tired lately" | Appears fatigued, pale conjunctivae |
| "I can't bend my knee" | ROM limited to 90°, swelling noted |

---

## 📊 Physical Exam Components by System

A comprehensive PE may include all or some of these systems:

| System | Typical Examination Elements |
|--------|------------------------------|
| **General Appearance** | Alertness, distress level, body habitus |
| **Vital Signs** | BP, HR, RR, Temp, O2 sat, weight |
| **HEENT** | Head, eyes, ears, nose, throat inspection |
| **Neck** | Lymph nodes, thyroid, JVD |
| **Cardiovascular** | Heart sounds, pulses, edema |
| **Respiratory** | Lung sounds, respiratory effort |
| **Abdomen** | Bowel sounds, tenderness, masses |
| **Musculoskeletal** | ROM, strength, joints |
| **Neurological** | Cranial nerves, reflexes, sensation |
| **Skin** | Color, lesions, wounds |
| **Psychiatric** | Orientation, mood, affect |

---

## 📝 Documentation Best Practices

### Be Specific and Descriptive

| ❌ Vague | ✅ Specific |
|----------|------------|
| "Lungs clear" | "Lungs clear to auscultation bilaterally, no wheezes/rales/rhonchi" |
| "Heart normal" | "RRR, S1/S2 normal, no murmurs/gallops/rubs" |
| "Abdomen benign" | "Abdomen soft, non-tender, non-distended, BS active x4 quadrants" |

### Use Standard Medical Terminology

| Abbreviation | Meaning |
|--------------|---------|
| **RRR** | Regular rate and rhythm |
| **PERRLA** | Pupils equal, round, reactive to light and accommodation |
| **ROM** | Range of motion |
| **WNL** | Within normal limits |
| **CTAB** | Clear to auscultation bilaterally |
| **NT/ND** | Non-tender/non-distended |

---

## ⚠️ Documentation Red Flags

> **Never document findings you didn't examine!**

| Problem | Example | Risk |
|---------|---------|------|
| **Pre-charting** | Documenting PE before seeing patient | Fraud, inaccuracy |
| **Copy-forward errors** | Yesterday's normal PE copied for today's sick patient | Misses new findings |
| **Missing pertinent negatives** | Not documenting what you ruled out | Incomplete assessment |
| **Inconsistency** | PE says "normal gait" but patient in wheelchair | Credibility issues |

---

## 🔧 Practical Application

**Scenario:** Document the cardiovascular portion of a PE for a patient with chest pain.

**Sample Documentation:**
\`\`\`
Cardiovascular:
- Regular rate and rhythm
- S1 and S2 normal, no S3/S4 gallops
- No murmurs appreciated
- No jugular venous distension
- Extremities warm, well-perfused
- No peripheral edema
- Radial pulses 2+ bilaterally
- Capillary refill < 2 seconds
\`\`\`

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **Physical Examination** | Provider's objective findings from direct observation/assessment |
| **Objective Data** | Measurable, observable findings (vs. subjective patient reports) |
| **Pertinent Negative** | Important finding that is specifically noted as absent |
| **Auscultation** | Listening to body sounds (typically with stethoscope) |
| **Palpation** | Examining by touch/feeling |

---

## ✅ Knowledge Check

1. **Why is it important to document both positive findings AND pertinent negatives in a physical exam?**

2. **A provider documents "cardiac exam normal" for every patient. What's problematic about this approach?**

3. **What's the difference between subjective and objective data? Give one example of each.**

---

*Next Lesson: Assessment & Plan (A&P) →*
`
    },

    // Lesson 2.1.4: Assessment & Plan (A&P)
    'lesson-2-1-4': {
        title: 'Assessment & Plan (A&P)',
        contentType: 'lesson',
        estimatedMinutes: 18,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll understand how the Assessment and Plan section synthesizes all clinical information, supports medical decision-making, and drives the treatment pathway.

---

## 📚 The Assessment & Plan: Where It All Comes Together

The **Assessment and Plan (A&P)** is the most critical section of clinical documentation. It's where the provider:

1. **Synthesizes** all gathered information (CC, HPI, ROS, PE, tests)
2. **Makes clinical judgments** (diagnoses or differential diagnoses)
3. **Documents the treatment plan**

> **Key Insight:** The A&P demonstrates medical decision-making—the reasoning process that justifies the level of service billed.

---

## 📊 The Assessment Section

### What Goes in the Assessment?

| Component | Description | Example |
|-----------|-------------|---------|
| **Primary Diagnosis** | Main condition being addressed | "Essential hypertension, uncontrolled" |
| **Secondary Diagnoses** | Other conditions affecting care | "Type 2 diabetes, obesity" |
| **Differential Diagnoses** | Other possibilities being considered | "Chest pain: rule out ACS vs GERD vs musculoskeletal" |
| **Problem Status** | Improving, stable, worsening | "Diabetes: well-controlled on current regimen" |

### Assessment Documentation Examples

**Simple Visit:**
\`\`\`
Assessment:
1. Acute pharyngitis, likely viral
2. Allergic rhinitis, stable
\`\`\`

**Complex Visit:**
\`\`\`
Assessment:
1. Chest pain - concerning for unstable angina given history, risk factors
   Differential: ACS vs GERD vs costochondritis
2. Hypertension - poorly controlled despite current medications
3. Type 2 diabetes - A1C improved from 8.2 to 7.1
4. Obesity - stable, patient interested in weight management
\`\`\`

---

## 📝 The Plan Section

The Plan documents **what happens next**—organized by problem.

### Plan Components

| Component | Examples |
|-----------|----------|
| **Diagnostic tests** | Labs, imaging, EKG ordered |
| **Medications** | New prescriptions, changes, refills |
| **Referrals** | Specialty consultations |
| **Patient education** | Instructions, handouts provided |
| **Follow-up** | When to return, red flags to watch |
| **Disposition** | Admit, discharge, observation |

### Plan Documentation Example

\`\`\`
Plan:
1. Chest pain - unstable angina workup
   - EKG now (ordered)
   - Troponin x2, 6 hours apart
   - Chest X-ray
   - Cardiology consult requested
   - NPO, telemetry monitoring
   - ASA 325mg given

2. Hypertension
   - Increase lisinopril from 10mg to 20mg daily
   - Low-sodium diet counseling provided
   - Recheck BP in 2 weeks

3. Diabetes
   - Continue metformin 1000mg BID
   - A1C in 3 months
   - Reinforce dietary modifications

4. Follow-up: Cardiology consult today, PCP in 2 weeks for BP recheck
\`\`\`

---

## 🔧 The Problem-Oriented Approach

Modern documentation often uses a **problem-oriented** format:

1. **List each problem** (diagnosis or concern)
2. **Under each problem**: relevant findings + specific plan
3. **Keeps assessment and plan linked** for clarity

> **CEHRS Tip:** Problem-oriented documentation makes it easier for other providers to quickly understand what's being addressed and why.

---

## ⚠️ A&P Documentation Pitfalls

| Pitfall | Problem | Better Approach |
|---------|---------|-----------------|
| **Vague assessment** | "Chest pain" with no context | Include severity, differential, clinical reasoning |
| **Missing plan items** | Assessment listed but no action | Every assessment needs a corresponding plan |
| **Copy-paste plans** | Same plan regardless of patient response | Update based on current status |
| **No clinical reasoning** | Just lists diagnoses | Explain why you're considering or ruling out conditions |

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **Assessment** | Clinical judgment about what's wrong (diagnoses) |
| **Plan** | Actions to be taken (tests, treatments, follow-up) |
| **Differential Diagnosis** | List of possible diagnoses being considered |
| **Medical Decision-Making** | Complexity of clinical reasoning documented |
| **Problem-Oriented Documentation** | Organizing notes by diagnosis/problem |

---

## ✅ Knowledge Check

1. **Why does every problem in the Assessment need a corresponding item in the Plan?**

2. **A provider's assessment says "Headache" with no further detail. What information should be added to make this a complete assessment?**

3. **How does the A&P section support billing and coding?**

---

*Next Lesson: Progress Notes & Visit Documentation →*
`
    },

    // Lesson 2.1.5: Progress Notes & Visit Documentation
    'lesson-2-1-5': {
        title: 'Progress Notes & Visit Documentation',
        contentType: 'lesson',
        estimatedMinutes: 12,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll understand the structure of progress notes, differentiate between initial and follow-up documentation, and apply the SOAP format effectively.

---

## 📚 What Are Progress Notes?

**Progress notes** document ongoing care—what's happened since the last visit and how the patient is responding to treatment.

| First Visit | Follow-up Visit |
|-------------|-----------------|
| Comprehensive H&P | Focused progress note |
| Establishes baseline | Tracks changes |
| Full ROS and PE | Targeted exam |
| Initial diagnoses | Updated problem list |

> **Key Insight:** Progress notes focus on **changes**, **responses to treatment**, and **new issues**—not repeating the entire history.

---

## 📊 The SOAP Format

**SOAP** is the most common progress note structure:

| Section | Contains | Example |
|---------|----------|---------|
| **S**ubjective | Patient's report, symptoms, concerns | "Feels better, headache resolved. Some nausea after taking new medication." |
| **O**bjective | Measurable findings, exam, test results | "BP 128/82, appears comfortable. Abdomen soft, non-tender." |
| **A**ssessment | Diagnosis update, clinical impression | "Migraine - resolved. Medication-induced nausea." |
| **P**lan | Next steps, changes, follow-up | "Change sumatriptan to rizatriptan. Follow up PRN." |

---

## 📝 Progress Note Components

### What to Include in Follow-up Notes

1. **Interval history** — What's happened since last visit?
2. **Response to treatment** — Is the plan working?
3. **Current symptoms** — Better, worse, or the same?
4. **Relevant PE findings** — Targeted to the problem
5. **Updated A&P** — Changes to diagnosis list and plan

### Documentation Time Stamps

Every entry should include:
- **Date and time** of documentation
- **Author identification** (name and credentials)
- **Signature** (electronic or handwritten)

---

## 🔧 Specialty Note Variations

Different settings use adapted formats:

| Setting | Note Type | Focus |
|---------|-----------|-------|
| **Inpatient** | Daily progress note | Each day's changes |
| **Surgery** | Operative note | Procedure details |
| **ED** | ED note | Chief complaint, workup, disposition |
| **Nursing** | Nursing notes | Patient status, interventions, responses |
| **Therapy** | Therapy notes | Functional progress, goals |

---

## ⚠️ The Copy-Paste Problem

> **Copy-paste documentation** saves time but creates significant risks.

| Risk | Example |
|------|---------|
| **Outdated information** | "Complains of acute knee pain" when patient is here for cough |
| **Note bloat** | Pages of irrelevant copied text |
| **Inaccuracy** | Yesterday's normal vitals copied for today's abnormal patient |
| **Fraud allegations** | Billing for services not actually performed |

**Best Practice:** If you copy forward, **review and update every section** to reflect today's visit.

---

## 📊 Required Documentation Elements

For every clinical note:

| Element | Why Required |
|---------|--------------|
| **Date and time** | Establishes when care occurred |
| **Patient identification** | Ensures correct chart |
| **Author identification** | Accountability |
| **Signature/authentication** | Legal validation |
| **Chief complaint/reason** | Purpose of encounter |
| **Clinical findings** | What was observed/done |
| **Disposition/plan** | What happens next |

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **Progress Note** | Documentation of ongoing care visits |
| **SOAP** | Note format: Subjective, Objective, Assessment, Plan |
| **Interval History** | What's happened between visits |
| **Authentication** | Signing/validating a note as complete |
| **Copy-Forward** | Copying previous note content to current note |

---

## ✅ Knowledge Check

1. **How does a progress note differ from an initial H&P in scope and purpose?**

2. **What are two risks of copy-paste documentation in progress notes?**

3. **A nurse documents a medication administration. What elements must be included for a complete entry?**

---

*Next Lesson: Historic Clinical Data Documentation →*
`
    },

    // Lesson 2.1.6: Historic Clinical Data Documentation
    'lesson-2-1-6': {
        title: 'Historic Clinical Data Documentation',
        contentType: 'lesson',
        estimatedMinutes: 12,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll understand how to properly document amendments, corrections, and late entries, and recognize the legal and regulatory requirements that govern clinical documentation.

---

## 📚 Amendments, Corrections, and Late Entries

Clinical documentation sometimes needs to be updated after the initial entry. The **how** matters as much as the **what**.

> **Golden Rule:** Never delete or alter original entries. The EHR must maintain an audit trail.

---

## 📊 Types of Documentation Updates

### 1. Corrections

A **correction** fixes an error in the original documentation.

**How to Document:**
- Create a new entry referencing the original
- Clearly label it as "Correction" or "Amended Entry"
- State what is being corrected and why
- Include your name, credentials, and current date/time

**Example:**
\`\`\`
CORRECTION to entry dated 09/10/2025 at 14:30:
Original entry stated "Vaccine given in right deltoid."
Correct information: Vaccine given in LEFT deltoid.
Error discovered during chart review.
— J. Smith, MA, 09/10/2025 15:45
\`\`\`

### 2. Late Entries

A **late entry** documents something that wasn't recorded at the time it occurred.

**How to Document:**
- Label clearly as "Late Entry"
- Include both the **current date/time** (when you're documenting) and the **event date/time** (when it happened)
- Explain the delay if appropriate

**Example:**
\`\`\`
LATE ENTRY for 09/10/2025 at 09:00:
Patient received influenza vaccine in left deltoid. 
Tolerated well, no adverse reaction noted at 09:30.
Entry delayed due to system downtime.
— J. Smith, RN, 09/10/2025 11:00
\`\`\`

### 3. Addendums

An **addendum** adds supplementary information to a completed note.

**Example:**
\`\`\`
ADDENDUM to H&P dated 09/10/2025:
After initial exam, patient disclosed allergy to penicillin 
(causes hives). Allergy list updated accordingly.
— Dr. A. Jones, MD, 09/10/2025 14:00
\`\`\`

---

## ⚠️ What You Should NEVER Do

| Never... | Why Not |
|----------|---------|
| **Delete original entries** | Destroys audit trail, potentially illegal |
| **Backdate entries** | Fraudulent documentation |
| **Change someone else's documentation** | Each author is responsible for their entries |
| **Use white-out or erasure** (paper) | Same as deletion—destroys evidence |
| **Enter false information** | Fraud, potential patient harm |

---

## 📝 Legal and Regulatory Requirements

Clinical documentation must comply with:

### HIPAA Requirements
- **Privacy:** Only authorized access to PHI
- **Security:** Protection from unauthorized changes
- **Audit Trail:** Record of all access and modifications

### State Laws
- **Retention periods:** How long records must be kept (varies by state)
- **Access rules:** Who can see what
- **Correction procedures:** Patient rights to request amendments

### Professional Standards
- **Honesty:** Never falsify documentation
- **Confidentiality:** Only access records for legitimate purposes
- **Professionalism:** Avoid judgmental or biased language

---

## 📊 The Audit Trail

Every EHR maintains an **audit trail**—a log showing:

| Tracked Data | Purpose |
|--------------|---------|
| **Who** accessed the record | Identify users |
| **When** they accessed it | Timestamp |
| **What** they viewed or changed | Track modifications |
| **Where** (workstation/location) | Security monitoring |

> **CEHRS Responsibility:** Understand that your every action in the EHR is logged. This protects patients, providers, and you.

---

## 🔧 Practical Application

**Scenario:** It's 3:00 PM. A nurse realizes she forgot to document a dressing change done at 10:00 AM.

**Correct Approach:**
1. Open the patient's chart
2. Create a new note dated NOW (3:00 PM)
3. Label it: "LATE ENTRY for 10:00 AM"
4. Document: "Dressing change performed at 10:00. Wound clean, no signs of infection, dry sterile dressing applied."
5. Sign with name, credentials, and current time

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **Amendment** | Addition or correction to existing documentation |
| **Late Entry** | Documentation of an event after it occurred, properly labeled |
| **Addendum** | Supplementary information added to a completed note |
| **Audit Trail** | Log of all access and modifications to records |
| **Authentication** | Formal validation that documentation is complete and accurate |

---

## ✅ Knowledge Check

1. **Why is it dangerous—legally and clinically—to delete or overwrite documentation in the EHR?**

2. **A medical assistant documents that a vaccine was given in the right arm, but it was actually the left arm. What is the correct way to fix this?**

3. **What three pieces of information should a late entry include?**

---

*🎉 Congratulations! You've completed Section 2.1: Clinical Documentation.*

**What's Next:**
- Section 2.2: Order Entry & Results
- Section 2.3: Medication Management
`
    }
}

// Export lesson IDs for seeding
export const SECTION_2_1_LESSON_IDS = [
    'lesson-2-1-1',
    'lesson-2-1-2',
    'lesson-2-1-3',
    'lesson-2-1-4',
    'lesson-2-1-5',
    'lesson-2-1-6'
]
