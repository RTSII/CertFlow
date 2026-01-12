import { createClient } from '@supabase/supabase-js'
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

// Content for Module 1: Non-Clinical Operations
// Titles MUST match exactly what's in modules.ts
const M1_CONTENT = [
    // Section 1.1: EHR Fundamentals
    {
        title: 'What are Electronic Health Records?',
        content: `
# What are Electronic Health Records?

Electronic Health Records (EHRs) are more than just digital versions of paper charts. They represent a fundamental shift in how health information is collected, shared, and utilized to improve patient outcomes.

### EHR vs. EMR: What's the Difference?
While often used interchangeably, there is a distinct difference in the healthcare industry:

- **EMR (Electronic Medical Record)**: A digital version of a patient's chart at a **single practice**. It contains medical and treatment history but does not easily travel outside the practice.
- **EHR (Electronic Health Record)**: A comprehensive, longitudinal record designed to be **shared across multiple healthcare organizations**. It moves with the patient—to the specialist, the hospital, the nursing home, and across state lines.

### Key Takeaway
> For the CEHRS exam, remember: **EHR = Shareable across organizations**, while **EMR = Stays within one practice**.
`,
        image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'EHR Benefits & Core Functions',
        content: `
# EHR Benefits & Core Functions

According to the Institute of Medicine (IOM), a functional EHR should support these eight core functions:

### The 8 Core Functions
1. **Health Information & Data**: Records diagnoses, medications, allergies, and problem lists.
2. **Results Management**: Quick access to lab and imaging results.
3. **Order Management**: Computerized Provider Order Entry (CPOE) for medications and tests.
4. **Decision Support**: Alerts for drug interactions, reminders for preventive care.
5. **Electronic Communication**: Secure messaging between providers and patients.
6. **Patient Support**: Educational materials and patient portal access.
7. **Administrative Processes**: Scheduling, registration, and claims management.
8. **Reporting & Population Health**: Quality reporting and public health tracking.

### Benefits of EHR Adoption
- **Improved Clinical Outcomes**: Better data leads to better decisions.
- **Enhanced Patient Safety**: Reduced medication errors via automated alerts.
- **Efficiency & Cost Savings**: Less duplicate testing and streamlined billing.
- **Patient Empowerment**: Portals allow patients to engage in their own care.
`,
        image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'EHR Data Content & Structure',
        content: `
# EHR Data Content & Structure

Understanding how data is organized within an EHR is critical for both day-to-day use and successful exam performance.

### Types of Data in an EHR
- **Administrative Data**: Patient demographics, insurance info, contact information.
- **Clinical Data**: Diagnoses, medications, allergies, lab results, vital signs.
- **Financial Data**: Charges, payments, claims status.

### Data Entry Concepts
- **Structured Data**: Data entered via dropdowns, checkboxes, or coded fields (e.g., ICD-10 codes). Easier to search and report on.
- **Unstructured Data**: Free-text notes, scanned documents. Harder to analyze programmatically.
- **Discrete Data Elements**: Individual, atomic pieces of information (e.g., a single blood pressure reading).

### Data Integrity Principles
- **Accuracy**: Data must correctly reflect the patient's condition.
- **Completeness**: All required fields should be populated.
- **Timeliness**: Data should be entered promptly after the encounter.
- **Consistency**: Data should match across different parts of the record.
`,
        image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Health Information Exchange (HIE)',
        content: `
# Health Information Exchange (HIE)

Health Information Exchange (HIE) is the electronic mobilization of health care information across organizations within a region, community, or hospital system. It is the "highway" that allows EHR data to travel.

### Three Forms of HIE
The Office of the National Coordinator for Health IT (ONC) defines three main ways health info is exchanged:

1. **Directed Exchange**: The ability to send and receive secure information electronically between care providers to support coordinated care.
   - *Example: A primary care physician sending a referral to a specialist.*

2. **Query-based Exchange**: The ability for providers to find and/or request information on a patient from other providers, often used for unplanned care.
   - *Example: An ER doctor searching for a patient's medication list.*

3. **Consumer-Mediated Exchange**: The ability for patients to aggregate and control the use of their health information among providers.
   - *Example: A patient using a health app to track and share vitals.*

### Why HIE Matters
- **Avoids Readmissions**: Ensures the follow-up facility has the discharge summary.
- **Reduces Medication Errors**: Provides a complete picture of current meds.
- **Eliminates Duplicate Testing**: Providers can see results from other facilities.
`,
        image_url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'EHR System Components & Navigation',
        content: `
# EHR System Components & Navigation

Navigating an EHR effectively is a critical skill. While every system (Epic, Cerner, Athena) looks different, they share common architectural components.

### Core Architecture Components
1. **User Interface (UI)**: The visual layout (menus, tabs, dashboards) where you interact with data.
2. **Database Engine**: The "brain" that stores and retrieves patient records.
3. **Clinical Rules Engine**: Automates logic like "If patient is 65+, suggest a flu shot."
4. **Data Dictionary**: Defines standard terms so the system knows "Tylenol" and "Acetaminophen" are the same.

### Universal Navigation Principles
- **The Dashboard**: Your "home base" showing your schedule, messages, and pending tasks.
- **Search Functionality**: Usually a global search bar to find patients by Name, DOB, or MRN.
- **Chart Tabs**: Organized by clinical categories (Labs, Meds, Notes, History).
- **Breadcrumbs**: Visual cues at the top showing where you are in the system.

### Best Practices
- **Minimize Clicks**: Learn keyboard shortcuts and "One-Click" favorites.
- **Cross-Checking**: Always verify the patient name and DOB on the header before entering data.
- **Logging Out**: Always lock or log out when leaving your workstation (HIPAA!).
`,
        image_url: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=1000'
    },

    // Section 1.2: Patient Registration & Scheduling
    {
        title: 'Patient Demographics & Data Entry',
        content: `
# Patient Demographics & Data Entry

Patient demographics form the foundation of every record in the EHR. Accurate data entry at registration is critical for patient safety, billing, and communication.

### Core Demographic Fields
- **Full Legal Name**: As it appears on insurance/ID.
- **Date of Birth (DOB)**: Used as a patient identifier.
- **Social Security Number (SSN)**: Optional, used for billing.
- **Contact Information**: Address, phone, email.
- **Emergency Contact**: Name and relationship.
- **Primary Care Provider (PCP)**: For referrals and coordination.

### Patient Identifiers
- **Medical Record Number (MRN)**: Internal, unique ID assigned by the facility.
- **Account Number**: Specific to a visit or encounter.
- **Two-Identifier Rule**: Always verify identity using two identifiers (e.g., Name + DOB).

### Data Quality Tips
- **Verify Against ID**: Always match demographics to a government-issued ID.
- **Avoid Duplicates**: Search for existing records before creating a new one.
- **Update Proactively**: Ask if contact info has changed at every visit.
`,
        image_url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Appointment Scheduling Workflows',
        content: `
# Appointment Scheduling Workflows

The scheduling system is the "engine" of the medical practice. It manages patient flow and ensures provider time is utilized efficiently.

### Common Scheduling Methods
- **Wave Scheduling**: Multiple patients scheduled at the top of the hour, seen in order of arrival.
- **Modified Wave**: Staggered appointments in the second half of the hour.
- **Double-Booking**: Two patients at the same slot (use with caution!).
- **Clustering/Categorization**: Specific time blocks for certain visit types (e.g., physicals on Tuesday mornings).
- **Open Hours**: First-come, first-served.

### Scheduling Templates
A template is a "blueprint" for a provider's day:
- **Available Hours**: When the provider is in the office.
- **Blocked Time**: Lunch, meetings, or administrative time.
- **Slot Requirements**: Restricting specific slots to specific visit types.

### The Scheduling Workflow
1. **Initial Contact**: Patient calls or uses the portal.
2. **Verification**: Confirm identity and primary insurance.
3. **Appointment Selection**: Match the patient's need with the correct provider and time slot.
4. **Confirmation**: Provide instructions and confirm the date/time.
`,
        image_url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Insurance Verification & Eligibility',
        content: `
# Insurance Verification & Eligibility

Insurance verification is confirming that a patient's health insurance policy is active and covers the services they are seeking.

### Real-Time Eligibility (RTE)
Most modern EHRs use **Electronic Data Interchange (EDI)** for "Real-Time Eligibility" checks:
- With one click, the system sends an inquiry to the payer.
- The payer returns a response within seconds (Active, Inactive, Terminated).
- It also provides details on **Copays, Deductibles, and Co-insurance**.

### Key Insurance Concepts
- **Subscriber**: The person who holds the insurance policy.
- **Beneficiary**: The person receiving benefits (could be the subscriber or a dependent).
- **Group Number**: Identifies the specific plan employer or organization.
- **Member ID**: Unique identifier for the individual patient.
- **Coordination of Benefits (COB)**: Determining which insurance is Primary vs. Secondary.

### Consequences of Poor Verification
- **Denied Claims**: The practice doesn't get paid.
- **Patient Dissatisfaction**: Unexpected bills for the patient.
- **Administrative Burden**: Hours spent on appeals and phone calls with payers.
`,
        image_url: 'https://images.unsplash.com/photo-1454165833767-131b268df560?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Patient Check-in/Check-out Procedures',
        content: `
# Patient Check-in & Check-out Procedures

The check-in and check-out processes are the "bookends" of a patient visit. They are critical for data accuracy and financial health.

### The Check-In Checklist
1. **Identify**: Verify patient identity using two identifiers (Full Name + DOB).
2. **Verify Insurance**: Scan card and confirm active coverage.
3. **Update Demographics**: Confirm address, phone, and emergency contact.
4. **Collect Payments**: Collect copays, deductibles, or outstanding balances.
5. **Sign Consent**: Ensure HIPAA Privacy Notice and Consent to Treat are signed.
6. **Mark "Arrived"**: Update the status in the EHR so the clinical team knows the patient is ready.

### The Check-Out Checklist
1. **Review Follow-up**: Schedule the next appointment as ordered by the provider.
2. **Order Referrals**: Begin the process for external specialist visits.
3. **Provide Summaries**: Print or upload the Clinical Summary (Meaningful Use requirement).
4. **Coordinate Diagnostics**: Schedule outside labs or imaging in the EHR.
5. **Final Status**: Mark the patient as "Checked Out" to release the room.
`,
        image_url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000'
    },
    {
        title: 'Patient Portal Support & Access Management',
        content: `
# Patient Portal Support & Access Management

Patient portals are secure websites that provide patients 24-hour access to personal health information. Under the CEHRS exam, you are expected to support patients in using these tools.

### Core Portal Features
- **Accessing Records**: Viewing lab results, visit summaries, and immunization records.
- **Communication**: Secure messaging with the care team.
- **Scheduling**: Booking or requesting appointments.
- **Financials**: Paying bills and viewing statements.
- **Refills**: Requesting prescription renewals.

### Administrative Support Tasks
1. **Activation**: Generating activation codes and helping patients register.
2. **Identity Verification**: Ensuring only the patient (or legal representative) gets access.
3. **Troubleshooting**: Resetting passwords and explaining how to find specific "tiles" or data.
4. **Proxy Access**: Managing access for parents of minors or adult children of seniors (requires legal documentation).

### Patient Engagement Goals
An active patient portal reduces phone volume for the office and increases patient safety by allowing them to review their own data for discrepancies.
`,
        image_url: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000'
    }
]

async function seedContent() {
    console.log('🌱 Seeding rich content for Module 1 (Title Locked v2)...')

    // Fetch all lessons from the database to map titles to IDs
    const { data: dbLessons, error: fetchError } = await supabase
        .from('lessons')
        .select('id, title')

    if (fetchError) {
        console.error('❌ Error fetching lessons from DB:', fetchError.message)
        return
    }

    console.log(`  Found ${dbLessons.length} lessons in DB.\n`)
    const titleToIdMap = new Map(dbLessons.map(l => [l.title, l.id]))

    let successCount = 0
    let skipCount = 0

    for (const item of M1_CONTENT) {
        const lessonId = titleToIdMap.get(item.title)

        if (!lessonId) {
            console.warn(`  ⚠️ Lesson not found in DB: "${item.title}". Skipping.`)
            skipCount++
            continue
        }

        console.log(`  ✅ Updating: ${item.title}...`)
        const { error } = await supabase
            .from('lessons')
            .update({
                content: item.content.trim(),
                image_url: item.image_url
            })
            .eq('id', lessonId)

        if (error) {
            console.error(`  ❌ Error updating ${item.title}:`, error.message)
        } else {
            successCount++
        }
    }

    console.log(`\n✅ Module 1 Content Seeding Complete!`)
    console.log(`   Updated: ${successCount} lessons`)
    if (skipCount > 0) {
        console.log(`   Skipped: ${skipCount} lessons (title mismatch)`)
    }
}

seedContent().catch(console.error)
