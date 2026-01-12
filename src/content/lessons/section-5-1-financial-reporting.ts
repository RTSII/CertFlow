/**
 * Section 5.1: Financial Reporting - Learner-Facing Lesson Content
 * 
 * Transformed from instructor-facing material into engaging, digestible lessons.
 * Each lesson targets 10-15 minutes of focused reading.
 */

export const SECTION_5_1_LESSONS = {
    // Lesson 5.1.1: Standardized Financial Reports
    'lesson-5-1-1': {
        title: 'Standardized Financial Reports (Aging, Carriers, RVU)',
        contentType: 'lesson',
        estimatedMinutes: 15,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll be able to identify and describe the key standardized financial reports used in healthcare practice management systems, including aging reports, carrier reports, and RVU reports.

---

## 📚 Why Financial Reporting Matters

As a Certified Electronic Health Records Specialist (CEHRS), you won't be designing hospital budgets—but you **will** be running, interpreting, and validating financial reports that drive critical business decisions.

> **Real-World Impact:** Financial reports tell practice managers whether the clinic can afford to stay open, how quickly money is coming in, and which insurance payers are causing problems.

Financial reporting is a core component of the CEHRS **Reporting** domain on the NHA exam. Let's explore the three most important standardized report types.

---

## 📊 The Three Essential Financial Reports

### 1. Aging Reports

An **aging report** shows how long account balances have been outstanding. Think of it as a "how late is the money?" dashboard.

**Standard Aging Buckets:**
| Bucket | Interpretation |
|--------|----------------|
| 0-30 days | Current, healthy |
| 31-60 days | Starting to age |
| 61-90 days | Needs attention |
| 91-120 days | Problem accounts |
| >120 days | Critical—possible write-offs |

**Key Fields in an Aging Report:**
- Patient Name / Account Number
- Guarantor (who's responsible for payment)
- Payer (insurance company)
- Date of Service (DOS)
- Original Charge Amount
- Current Balance
- Aging Bucket

> **🚨 Red Flag:** If your >90 day bucket is growing month-over-month, that signals **claims follow-up is failing** or **billing workflows are broken**.

---

### 2. Carrier (Payer) Reports

A **carrier report** summarizes performance by insurance payer. It answers: "How well is each insurance company paying us?"

**Key Metrics:**
- **Total Charges by Payer** — How much we billed them
- **Total Payments by Payer** — How much they paid
- **Denial Count & Rate** — How often they reject claims
- **Average Days to Payment** — Speed of reimbursement
- **Payer Mix** — Percentage of revenue from each payer

**Why It Matters:**
- Identify payers with high denial rates for targeted follow-up
- Support contract renegotiations ("Payer X takes 60 days to pay—let's discuss")
- Understand your revenue dependency on different insurance types

---

### 3. RVU (Relative Value Unit) Reports

**Relative Value Units (RVUs)** measure provider productivity and the complexity of services rendered. Medicare uses RVUs to calculate physician fees.

**An RVU report typically shows:**
- Total RVUs per provider per time period
- Breakdown by Work RVU, Practice Expense RVU, and Malpractice RVU
- Comparison to benchmarks or peers

**Use Cases:**
- Provider productivity benchmarking
- Compensation calculations
- Staffing decisions
- Identifying high-volume vs. high-complexity work patterns

---

## 💡 Key Terms to Remember

| Term | Definition |
|------|------------|
| **Accounts Receivable (AR)** | Money owed to the organization for services rendered |
| **Aging Buckets** | Time intervals (0-30, 31-60, etc.) used to categorize outstanding balances |
| **Payer Mix** | Distribution of revenue across different insurance types |
| **Denial Rate** | Percentage of claims denied by payers |
| **RVU** | Relative Value Unit—measures complexity and value of medical services |

---

## ✅ Knowledge Check

1. **Which aging bucket would concern you most from a cash-flow standpoint, and why?**

2. **A carrier report shows Payer X has a 25% denial rate while all others are under 5%. What action would you recommend?**

3. **How might an RVU report help a practice decide whether to hire an additional provider?**

---

*Next Lesson: Financial Guarantor Reports →*
`
    },

    // Lesson 5.1.2: Financial Guarantor Reports
    'lesson-5-1-2': {
        title: 'Financial Guarantor Reports',
        contentType: 'lesson',
        estimatedMinutes: 10,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll understand what a financial guarantor is, how guarantor reports consolidate account information, and when these reports are used in practice.

---

## 📚 What is a Financial Guarantor?

A **financial guarantor** is the person or organization **legally responsible** for paying a patient's bill. This is not always the patient themselves.

**Common Guarantor Scenarios:**

| Scenario | Guarantor |
|----------|-----------|
| Adult paying their own bills | Patient = Guarantor |
| Child's medical visit | Parent is the Guarantor |
| Workplace injury (Workers' Comp) | Employer may be Guarantor |
| Minor in state custody | State agency is Guarantor |
| Incapacitated adult | Legal guardian is Guarantor |

> **Key Insight:** One guarantor may be responsible for multiple patients' accounts. A parent with three children has one guarantor record linked to three patient records.

---

## 📊 What's in a Guarantor Report?

A **financial guarantor report** consolidates all accounts under a single responsible party, giving you a complete picture of what that person/entity owes.

**Typical Report Fields:**
- Guarantor Name & Contact Information
- Associated Patient Accounts
- Total Combined Balance
- Payment History
- Aging Summary (across all linked accounts)
- Payment Plan Status

---

## 🔧 When to Use Guarantor Reports

**Primary Use Cases:**

### 1. Self-Pay Collections
When insurance doesn't cover everything (or anything), you need to know the total a household owes—not just one patient's balance.

### 2. Payment Plan Management
Guarantor reports help set up and monitor family payment plans that cover multiple patients' balances in one arrangement.

### 3. Bad Debt Analysis
Before sending accounts to collections, review the guarantor's complete financial relationship with your practice.

### 4. Financial Counseling
Help patients understand their total obligation across all family members receiving care.

---

## 💡 Key Distinction

| Report Type | Groups By | Best For |
|-------------|-----------|----------|
| Aging Report | Patient Account | Individual AR analysis |
| Carrier Report | Insurance Payer | Payer performance |
| **Guarantor Report** | **Responsible Party** | **Collections & Payment Plans** |

---

## ✅ Knowledge Check

1. **A parent brings in three children for checkups. How many guarantor records are created?**

2. **Why would you use a guarantor report instead of an aging report when setting up a payment plan?**

---

*Next Lesson: Cost of Procedures & Prospective Payment Systems →*
`
    },

    // Lesson 5.1.3: Cost of Procedures & PPS
    'lesson-5-1-3': {
        title: 'Cost of Procedures & Prospective Payment Systems',
        contentType: 'lesson',
        estimatedMinutes: 12,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll understand how Prospective Payment Systems (PPS) work, how cost-of-procedure reports support financial analysis, and why this matters for healthcare organizations.

---

## 📚 Understanding Prospective Payment Systems

Traditional healthcare billing worked like this: Provide service → Bill itemized charges → Get paid based on what you billed.

**Prospective Payment Systems (PPS)** flipped this model. Under PPS, CMS (Centers for Medicare & Medicaid Services) pays a **fixed, predetermined amount** based on the patient's diagnosis or procedure—regardless of the actual resources used.

### Key PPS Examples:

| System | Used For | Basis |
|--------|----------|-------|
| **DRG (Diagnosis-Related Groups)** | Inpatient hospital stays | Diagnosis + complications |
| **APC (Ambulatory Payment Classification)** | Outpatient procedures | Procedure type |
| **PDPM (Patient-Driven Payment Model)** | Skilled nursing facilities | Patient characteristics |
| **HH PPS** | Home health agencies | Clinical needs |

> **The Core Concept:** A hospital gets paid $X for a knee replacement, whether it takes 2 days or 5 days. This shifts financial risk to the provider.

---

## 📊 Cost-of-Procedure Reports

A **cost-of-procedure report** compares:
- **What we're paid** (reimbursement amount, often DRG-based)
- **What it costs us** (internal costs: supplies, labor, overhead)

**Why This Matters:**

| Scenario | Implication |
|----------|-------------|
| Reimbursement > Cost | Profitable service line |
| Reimbursement < Cost | Losing money on each case |
| Reimbursement ≈ Cost | Break-even; efficiency matters |

### What These Reports Include:
- Procedure/DRG codes
- Number of cases
- Average reimbursement per case
- Average cost per case
- Profit/loss margin
- Comparison to benchmarks

---

## 🔧 Real-World Applications

**For hospital administrators:**
- Identify which service lines are profitable vs. money-losing
- Inform strategic decisions (expand cardiology? reduce orthopedics?)
- Negotiate better supply contracts to reduce costs

**For CEHRS professionals:**
- Run reports that combine clinical data (DRGs) with financial data
- Understand why certain metrics are tracked
- Support decision-making with accurate data

---

## 💡 Key Terms

| Term | Definition |
|------|------------|
| **PPS** | Prospective Payment System—predetermined payment based on diagnosis/procedure |
| **DRG** | Diagnosis-Related Group—inpatient classification for payment |
| **APC** | Ambulatory Payment Classification—outpatient equivalent of DRGs |
| **Cost-to-Charge Ratio** | Actual cost divided by billed charge; used to estimate costs |

---

## ✅ Knowledge Check

1. **Under PPS, does a hospital get paid more if a patient stays longer? Why or why not?**

2. **A cost-of-procedure report shows your orthopedic unit loses $500 per joint replacement. What might leadership consider?**

---

*Next Lesson: Ad Hoc Financial Report Generation →*
`
    },

    // Lesson 5.1.4: Ad Hoc Financial Report Generation
    'lesson-5-1-4': {
        title: 'Ad Hoc Financial Report Generation',
        contentType: 'lesson',
        estimatedMinutes: 15,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll be able to design and build a custom (ad hoc) financial report by selecting the appropriate data source, fields, filters, and sorting options.

---

## 📚 What is an Ad Hoc Report?

An **ad hoc report** is a custom report you build "on the fly" to answer a specific question that isn't covered by standardized reports.

**Key Difference:**

| Standardized Report | Ad Hoc Report |
|---------------------|---------------|
| Pre-built, consistent format | Built from scratch for specific need |
| Same output every time | Customized fields, filters, output |
| One-click to run | Requires design decisions |

> **When to Use Ad Hoc:** Your supervisor asks, "Can you get me a list of all Medicare claims over $1,000 from last quarter that are still unpaid?" There's no standard report for that—you build it.

---

## 🔧 Building an Ad Hoc Financial Report: 5 Steps

### Step 1: Identify Your Data Source
Where does the data live?

| Data Source | Contains |
|-------------|----------|
| Claims/Transactions | Charge details, payments, adjustments |
| Patient Accounts | Demographics, balances, guarantor info |
| Encounters | Visit-level clinical and billing data |
| Payer Files | Insurance contract and payment rules |

### Step 2: Select Your Fields
What columns do you need in the output?

**Common Financial Report Fields:**
- Patient Name / Account Number
- Payer Name
- Date of Service
- Procedure/CPT Code
- Original Charge Amount
- Current Balance
- AR Days (how long outstanding)
- Claim Status

### Step 3: Define Your Filters
What criteria narrow down the results?

**Example Filters:**
- Payer = Medicare
- Date Range = Last Quarter
- Current Balance > $1,000
- Status = Open/Unpaid

### Step 4: Set Sorting & Grouping
How should results be organized?

- **Sort by:** Current Balance (descending) — show biggest first
- **Group by:** Payer, Provider, or Location

### Step 5: Run, Review, Refine
- Preview results before finalizing
- Verify filters worked correctly
- Adjust if needed and re-run

---

## 📝 Example Scenario: High-Dollar Medicare Claims

**Request:** "Give me all open claims over $1,000 for Medicare patients in the last quarter, so we can prioritize high-dollar follow-up."

| Design Element | Your Choice |
|----------------|-------------|
| **Data Source** | Claims |
| **Fields** | Patient, Account #, Payer, DOS, Charge, Balance, AR Days |
| **Filters** | Payer=Medicare, Balance>$1,000, Date=Last Quarter, Status=Open |
| **Sort** | Balance descending |
| **Group** | By Provider (optional) |

---

## ⚠️ Common Mistakes to Avoid

1. **Wrong date field** — Are you filtering by Date of Service or Date Posted?
2. **AND vs OR logic** — "Medicare AND >$1,000" is different from "Medicare OR >$1,000"
3. **Missing locations** — Did you forget to include all clinic sites?
4. **Not verifying output** — Always spot-check before distributing!

---

## ✅ Knowledge Check

**Scenario:** Your supervisor wants a report of all denied claims from Blue Cross in the last 60 days.

1. **What data source would you start with?**
2. **List 4 fields you would include.**
3. **What 3 filters would you apply?**

---

*Next Lesson: Using EHR Fields for Custom Financial Reports →*
`
    },

    // Lesson 5.1.5: Using EHR Fields for Custom Financial Reports
    'lesson-5-1-5': {
        title: 'Using EHR Fields for Custom Financial Reports',
        contentType: 'lesson',
        estimatedMinutes: 12,
        content: `
## 🎯 Learning Objective

By the end of this lesson, you'll understand how to select the right EHR data fields for custom reports and apply data validation techniques to ensure accuracy before distribution.

---

## 📚 Understanding EHR Data Fields

Every EHR system stores data in discrete, structured **fields**. Knowing which fields to use—and what they actually contain—is critical for accurate reporting.

### Common Financial Data Fields

| Field Category | Example Fields | Watch Out For |
|----------------|----------------|---------------|
| **Patient Demographics** | Name, DOB, Account # | Duplicates, outdated info |
| **Insurance/Payer** | Payer ID, Plan Name, Group # | Primary vs. Secondary confusion |
| **Dates** | DOS, Posting Date, Claim Date | Know which date you need! |
| **Charges** | Original Amount, Adjustments, Payments | Gross vs. Net calculations |
| **Balances** | Patient Balance, Payer Balance, Total | Self-pay vs. insurance AR |
| **Claim Status** | Submitted, Pending, Denied, Paid | Status definitions vary by system |

---

## 🔍 Data Validation: The CEHRS Responsibility

> **Golden Rule:** Never send a financial report upward without basic validation.

No matter how good your EHR is, errors happen. Your responsibility as a CEHRS is to **verify report integrity** before anyone makes decisions based on it.

### The 5-Step Validation Checklist

#### 1. ✅ Verify Filters & Date Ranges
- Is the date range exactly what was requested?
- Are all locations/providers/payers included or excluded correctly?

#### 2. ✅ Reconcile to Known Totals
- Compare your report's Total AR to the practice's monthly AR summary
- Major discrepancies = something is wrong

#### 3. ✅ Spot-Check Individual Records
- Pick 3-5 random entries from your report
- Open each account in the EHR
- Confirm values match exactly

#### 4. ✅ Look for Anomalies
| Red Flag | Possible Cause |
|----------|----------------|
| Negative balances | Overpayments, refund needed |
| Missing major payer | Filter error or data issue |
| Huge month-to-month swings | Posting timing or system change |
| Zero payments from active payer | Processing delay or error |

#### 5. ✅ Document Caveats
- Note any known limitations in a cover message
- Example: "Report excludes encounters prior to system migration (Jan 2020)"

---

## 🔧 Practical Example: Finding the Problem

**Scenario:** You generate an aging report and notice:
- One patient shows a **negative balance of -$250**
- Your largest payer, "HealthyCare HMO," doesn't appear anywhere

**Validation Steps:**
1. **Negative balance:** Open that patient's account. Check if an overpayment was posted or a duplicate payment occurred. Note for refund processing.
2. **Missing payer:** Check your filter settings. Did you accidentally filter to one payer only? Check if HealthyCare data is posting correctly.

---

## 📋 Before You Click "Send"

**Final Checklist:**
- [ ] Parameters match the original request
- [ ] Totals reconcile to known figures
- [ ] Spot-checked 3-5 records manually
- [ ] No unexplained anomalies
- [ ] Limitations documented
- [ ] Approved format and naming convention used
- [ ] Sent only to authorized recipients

---

## 💡 Key Takeaway

The **technology runs the report**—but **you ensure its accuracy**. This is a professional responsibility that separates competent CEHRS professionals from those who just push buttons.

---

## ✅ Knowledge Check

1. **Why is it dangerous to assume EHR-generated reports are always correct?**

2. **You're about to send an aging report to the CFO. List 3 validation steps you would perform first.**

3. **Your report shows a patient with -$150 balance. What are two possible explanations?**

---

*🎉 Congratulations! You've completed Section 5.1: Financial Reporting.*

**What's Next:**
- Section 5.2: Clinical Reporting
- Section 5.3: Quality Improvement & Statistical Reporting
`
    }
}

// Export lesson IDs for seeding
export const SECTION_5_1_LESSON_IDS = [
    'lesson-5-1-1',
    'lesson-5-1-2',
    'lesson-5-1-3',
    'lesson-5-1-4',
    'lesson-5-1-5'
]
