# CEHRS Certification Study Guide
## Module 5: Reporting
### Section 5.1: Financial Reporting

---

## Table of Contents

1. [Lesson Metadata](#lesson-metadata)
2. [Learning Objectives](#learning-objectives)
3. [Prerequisites](#prerequisites)
4. [Scripted Lesson (Instructor-Facing)](#scripted-lesson-instructor-facing)
   - [Session Overview](#session-overview)
   - [Segment Breakdown](#segment-breakdown)
   - [Detailed Script with Instructor Notes](#detailed-script-with-instructor-notes)
5. [Learner Handouts](#learner-handouts)
   - [Handout 1: Key Financial Report Types & Terms](#handout-1-key-financial-report-types--terms)
   - [Handout 2: Practice Scenarios & Validation Exercise](#handout-2-practice-scenarios--validation-exercise)
6. [CheckFlow-Style Checklists](#checkflow-style-checklists)
   - [Checklist A: Run a Standard Aging Report](#checklist-a-run-a-standard-aging-report)
   - [Checklist B: Run a Carrier (Payer) Performance Report](#checklist-b-run-a-carrier-payer-performance-report)
   - [Checklist C: Build an Ad Hoc High-Dollar Claims Report](#checklist-c-build-an-ad-hoc-high-dollar-claims-report)
   - [Checklist D: Validate a Financial Report Before Distribution](#checklist-d-validate-a-financial-report-before-distribution)
7. [Quiz: Financial Reporting](#quiz-financial-reporting)
   - [Multiple-Choice Questions](#multiple-choice-questions)
   - [Short-Answer / Scenario Questions](#short-answer--scenario-questions)
   - [Answer Key](#answer-key)

---

## Lesson Metadata

- **Module:** 5 – Reporting  
- **Section:** 5.1 – Financial Reporting  
- **Duration:** ~90 minutes of instruction + 20–30 minutes quiz/discussion  
- **Format:** Lecture, guided demo (or screenshots), applied exercises, quiz  
- **Alignment:** CEHRS "Reporting" domain (NHA test plan)

---

## Learning Objectives

By the end of this lesson, learners should be able to:

1. **Explain the role of financial reporting** in the healthcare revenue cycle and how CEHRS professionals support it.
2. **Identify and describe key standardized financial reports** available in typical EHR/practice management systems:
   - Aging reports  
   - Carrier (payer) reports  
   - Financial guarantor reports  
   - Relative value (RVU) reports  
   - Cost-of-procedures and Prospective Payment System (PPS)-related reports
3. **Navigate an EHR/practice management system** to run standardized financial reports using appropriate filters (date range, payer, provider, location, etc.).
4. **Interpret core metrics** in financial reports (AR days, aging buckets, collection rate, write-offs, denials, payer mix).
5. **Generate basic ad hoc financial reports** using EHR data fields (e.g., building a custom report for a specific payer, provider, or time frame).
6. **Apply data validation techniques** to verify accuracy and completeness of financial reports before distribution.

---

## Prerequisites

Learners should already:

- Understand **basic revenue cycle concepts** (charge capture, claims submission, payment posting, denials).
- Be familiar with **insurance types** (Medicare, Medicaid, commercial, self-pay).
- Have a working knowledge of **EHR navigation** and **billing/coding basics** (ICD-10-CM, CPT, HCPCS).

---

## Scripted Lesson (Instructor-Facing)

### Session Overview

- **Module:** Reporting  
- **Section:** 5.1 – Financial Reporting  
- **Duration:** ~90 minutes instruction + 20–30 minutes quiz/discussion  
- **Audience:** College-level students preparing for CEHRS  
- **Format:** Lecture, guided EHR demo (or screenshots), small-group activity, quiz

**Session Outcomes (student-facing):**

By the end of this session, you will be able to:

1. Describe the purpose of financial reporting in the revenue cycle.  
2. Identify and interpret standardized financial reports: aging, carrier, guarantor, RVU, cost/procedure, and PPS-related reports.  
3. Run standardized financial reports in an EHR/practice management system using appropriate filters.  
4. Build a simple ad hoc financial report using selected fields and filters.  
5. Apply data validation steps to check report accuracy before distribution.

---

### Segment Breakdown

| Time | Segment | Focus |
|------|---------|-------|
| 0–10 min | Introduction & Outcomes | Why financial reporting matters; CEHRS exam link |
| 10–30 min | Core Report Types | Aging, carrier, guarantor, RVU, cost & PPS reports |
| 30–55 min | Guided Demo: Running Standard Reports | Aging and carrier report workflows |
| 55–75 min | Ad Hoc Reports & Data Validation | Custom queries, accuracy checks |
| 75–90 min | Review & Key Terms | Wrap-up, questions |
| 90–115 min | Quiz & Debrief | Knowledge check + discussion |

---

### Detailed Script with Instructor Notes

#### Segment 1 (0–10 min) – Introduction & Outcomes

**Instructor Talking Points (script):**

- "Today we're focusing on **financial reporting**—a core part of the CEHRS **Reporting** domain. In real jobs, this is how practice managers know if the clinic will stay open and how quickly money is coming in."  
- "As CEHRS-certified professionals, you won't be designing the hospital budget. But you *will* be running standardized and ad hoc financial reports, and you'll be expected to **interpret and validate** them."  
- "Our goals today are to:  
  1) Understand the major types of financial reports;  
  2) Learn how to run them in an EHR/practice management system;  
  3) Practice building a basic ad hoc report; and  
  4) Learn how to sanity-check the results."

**Instructor prompts:**

- Ask: "In one sentence: Why do you think financial reports are important to patient care, not just money?"  
  - Listen for answers like: funding staffing, equipment, supplies, keeping services open.

**Handout tie-in:**  
Distribute **Handout 1: Key Report Types & Definitions** now so learners can follow along.

---

#### Segment 2 (10–30 min) – Core Financial Report Types

Use slides or whiteboard. Refer students to **Handout 1**.

##### A. Aging Report (6–7 min)

**Script:**

- "An **aging report** shows how long balances have been outstanding. It's usually grouped into buckets: 0–30, 31–60, 61–90, 91–120, and >120 days."  
- "If your >90 day bucket is growing, that's a sign your **claims follow-up is failing** or your **billing workflows are broken**."

**On slide / board:**

- Columns: Patient, Guarantor, Payer, DOS, Charge Amount, Balance, Aging Bucket  
- Question: "Which bucket worries you most from a cash-flow standpoint?" (Answer: >90, >120).

##### B. Carrier (Payer) Report (5–6 min)

**Script:**

- "A **carrier report** summarizes performance by payer: how much they owe, how fast they pay, and how often they deny your claims."  
- "It supports decisions like: *Should we renegotiate our contract with Payer X? Why are denials so high with Payer Y?*"

**Highlight metrics:**

- Total charges by payer  
- Total payments by payer  
- Denial counts and rates  
- Average days-to-payment  
- Payer mix (% of revenue per payer)

##### C. Financial Guarantor Report (4–5 min)

**Script:**

- "A **financial guarantor** is the person or organization legally responsible for the bill. That may be the patient, or it may be a parent, employer, or legal guardian."  
- "A **guarantor report** consolidates all accounts under that guarantor. It's used heavily for **self-pay collections** and payment plans."

##### D. RVU & Productivity Reports (5–6 min)

**Script:**

- "Many reports use **Relative Value Units (RVUs)** to measure provider productivity."  
- "An RVU report might show **total RVUs per provider per month**, helping leadership see who is doing a high volume or complex work."

##### E. Cost-of-Procedures & PPS-Related Reports (3–5 min)

**Script:**

- "Under **Prospective Payment Systems (PPS)**, CMS pays a fixed amount based on things like DRGs rather than itemized charges."  
- "Cost/procedure and PPS reports let administrators compare **what we're paid** against **our internal cost** for certain services or DRGs. That helps identify services that may be losing money."

**Instructor prompt (1–2 min):**

- Quick Think-Pair-Share:  
  - "Turn to a partner. Pick one report type and answer: *What decision could a manager make from this report?*"

Call on 1–2 pairs to share.

---

#### Segment 3 (30–55 min) – Guided Demo: Running Standard Reports

If you don't have a live EHR, use screenshots or mock interfaces.

##### A. Demo 1 – Aging Report (15 min)

**Scenario (read aloud):**

> "Your billing manager wants an aging report for the last **90 days** of open balances, grouped by **payer**, to prepare for a board meeting."

**Instructor Script:**

Walk through the generic steps:

1. "Click `Reports > Financial > Aging`."  
2. "Set **Date Range** to the last 90 days of service or posting (whichever your organization uses)."  
3. "Check '**Open Balances Only**' so we don't include fully paid accounts."  
4. "In the grouping options, select `Payer, then Patient`."  
5. "Add columns: Patient Name, DOS, Charge Amount, Current Balance, Aging Bucket, Payer."  
6. "Run the report and preview. Look at the totals at the end of each payer section."

**Instructor prompts:**

- Ask: "Which payer here seems to have the largest portion in >90 days?"  
- Ask: "If you saw this in a real clinic, who would you talk to first and why?"

##### B. Demo 2 – Carrier Performance Report (10 min)

**Scenario (read aloud):**

> "You suspect one commercial payer is causing more denials in the last **6 months**. Your supervisor asks you to provide a summary by payer."

**Steps (generic script):**

1. "Navigate to `Reports > Financial > Payer Summary` or similar."  
2. "Date Range: last 6 months."  
3. "Fields: Total charges, Total payments, Denial count, Denial rate, Avg days to pay."  
4. "Group by: Payer."  
5. "Run the report."

**Reflection:**

- "Look at Payer X's denial rate compared to others. How might this guide your denial management priorities?"  
- "What follow-up questions would you ask before concluding the payer is the problem?"

---

#### Segment 4 (55–75 min) – Ad Hoc Reports & Data Validation

##### A. Building an Ad Hoc Financial Report (10–12 min)

**Scenario (small-group exercise):**

> "Your supervisor wants a list of **all open claims over \$1,000** for **Medicare** patients in the **last quarter** to prioritize high-dollar follow-up."

**Instructions to students (groups of 2–3):**

- On Handout 2, there is a table where you'll:
  1. Identify which **data source** you'd start from (e.g., Claims or Encounters).  
  2. List at least **five data fields** you'd include.  
  3. Define **three filters** you'd apply.  
  4. Choose how you'd **sort or group** the results.

**After 5–7 minutes, debrief:**

- Call for sample answers:
  - Data source: `Claims`  
  - Fields: Patient, account #, payer, DOS, charge amount, current balance, AR days.  
  - Filters: Payer = Medicare; Date range = last quarter; Current balance > \$1,000; Status = open.  
  - Sort: by descending balance; Group: by payer (though only Medicare here).

##### B. Data Validation Techniques (10–13 min)

**Instructor Script:**

- "No matter how good the system is, **you never send a financial report upward without basic validation.**"  
- "As a CEHRS, your responsibility includes **verifying report accuracy**."

**Write on board (or slide):**

- Check **filters & date ranges**  
- Reconcile to **known totals** (e.g., monthly AR summary)  
- **Spot-check** individual accounts from the report  
- Look for **anomalies**: negative balances, missing major payers, huge swings  
- Document any **limitations or caveats**

**Mini-practice (3–5 min):**

Give students a short mock report snippet on Handout 2 with:

- A negative balance line  
- A clearly missing major payer (described in the scenario text)

Ask:

- "What are **two validation steps** you would take before sending this to the CFO?"

Collect 2–3 responses and reinforce best practices.

---

#### Segment 5 (75–90 min) – Summary & Key Terms

**Script:**

- "Let's recap. Financial reports tell us if our revenue cycle is healthy:
  - Aging reports show **how long** balances stay on the books.
  - Carrier reports show **how payers behave**: speed and denials.
  - Guarantor reports consolidate **who actually owes the money**.
  - RVU and cost/procedure reports support **productivity and margin analysis**."  
- "Your CEHRS role is to **run these correctly**, **build focused ad hoc reports**, and **validate** results before they're used to make decisions."

**Ask 2–3 rapid-fire review questions:**

- "What's one red flag you'd look for in an aging report?"  
- "What's one thing a carrier report can tell you?"  
- "What's one validation step you must do before sending a report up the chain?"

Transition: "Next, we'll do a brief **quiz** to check your understanding."

---

#### Segment 6 (90–115 min) – Quiz & Debrief

- Distribute the **10 MCQs + 3 short-answer** quiz (see Quiz section below).  
- Allow 15–20 minutes.  
- Review answers as a whole class, using wrong answers as teaching moments.

**Debrief prompts:**

- "Which question did most people miss? What does that tell us about where to review?"  
- "How could questions like this appear on the CEHRS exam—word-for-word or in scenario form?"

---

## Learner Handouts

### Handout 1: Key Financial Report Types & Terms

#### 1. Aging Report

- **Purpose:** Shows how long account balances have been outstanding.  
- **Key buckets:** 0–30, 31–60, 61–90, 91–120, >120 days.  
- **Use:** Prioritize follow-up; flag AR problems.

#### 2. Carrier (Payer) Report

- **Purpose:** Summarizes charges, payments, denials, and payment speed by payer.  
- **Key metrics:** Payer mix, denial rate, average days to payment.  
- **Use:** Evaluate payer performance; target denial management.

#### 3. Financial Guarantor Report

- **Purpose:** Groups balances by the person/entity responsible for payment.  
- **Use:** Self-pay collections, payment plans, bad debt analysis.

#### 4. RVU (Relative Value Unit) / Productivity Report

- **Purpose:** Measures provider productivity and complexity of services.  
- **Key metric:** Total RVUs per provider / per period.  
- **Use:** Productivity benchmarking, compensation discussions, staffing.

#### 5. Cost-of-Procedures & PPS-Related Reports

- **Purpose:** Compare reimbursement to internal costs; understand PPS-based payments (e.g., DRGs).  
- **Use:** Service line profitability, strategic planning.

#### Key Terms

- **Accounts Receivable (AR):** Money owed to the organization for services rendered.
- **Aging Buckets:** Time intervals used to categorize outstanding balances (e.g., 0–30, 31–60 days).
- **Payer Mix:** The distribution of revenue across different insurance types.
- **Denial Rate:** Percentage of claims denied by payers.
- **Write-Off:** Amount removed from AR (contractual or non-contractual).
- **Ad Hoc Report:** Custom report built by selecting specific fields and filters.
- **PPS (Prospective Payment System):** Fixed payment methodology used by CMS based on diagnosis or procedure groups.

---

### Handout 2: Practice Scenarios & Validation Exercise

#### Scenario 1 – Ad Hoc Report Design

Your supervisor asks:  

> "Give me all **open claims over \$1,000** for **Medicare** patients in the **last quarter**, so we can prioritize high-dollar follow-up."

1. **Data Source:** _______________________________________  

2. **Fields to Include (at least 5):**  
   - ____________________________________  
   - ____________________________________  
   - ____________________________________  
   - ____________________________________  
   - ____________________________________  

3. **Filters to Apply (at least 3):**  
   - ____________________________________  
   - ____________________________________  
   - ____________________________________  

4. **How will you sort/group the results?**  
   - Sort by: ______________________________  
   - Group by: _____________________________  

---

#### Scenario 2 – Data Validation

You generate an aging report and notice:

- One patient account shows a **negative balance of -\$250**.  
- The practice's largest payer, "HealthyCare HMO," does **not appear** anywhere on the report.

**Answer:**

1. What are **two validation steps** you should take before sending this report to leadership?

   - Step 1: __________________________________________________________  
   - Step 2: __________________________________________________________  

2. How might you **document** any limitations or issues you discover?

   ____________________________________________________________________  
   ____________________________________________________________________

---

## CheckFlow-Style Checklists

### Checklist A: Run a Standard Aging Report

**Goal:** Generate an aging report of open balances with correct filters and verify it for accuracy.

- [ ] Open the EHR / practice management reporting module.  
- [ ] Navigate to `Reports > Financial > Aging` (or equivalent).  
- [ ] Select the correct **Date Range** (e.g., last 90 days or requested period).  
- [ ] Set **Balance Status** filter to "Open balances only" (exclude zero-balance accounts).  
- [ ] Choose **Grouping** (e.g., by Payer, then Patient; or by Patient only, as requested).  
- [ ] Include required **Columns/Fields** (at minimum):  
  - [ ] Patient Name / Account Number  
  - [ ] Payer and/or Guarantor  
  - [ ] Date of Service  
  - [ ] Original Charge Amount  
  - [ ] Current Balance  
  - [ ] Aging Bucket
- [ ] Apply any **additional filters** (e.g., specific location, provider, payer class).  
- [ ] Run the report and preview the results **on screen**.  
- [ ] Perform a quick **sanity check**:
  - [ ] Are the totals reasonable for the selected period?  
  - [ ] Do you see expected major payers represented?  
- [ ] Export the report to the requested format (PDF/Excel/CSV).  
- [ ] Save using the approved naming convention (e.g., `Aging_YYYYMMDD_90days.pdf`).  
- [ ] If any anomalies are found (e.g., negative balances, missing payer), note them and proceed to the **Validation Checklist** before distribution.

---

### Checklist B: Run a Carrier (Payer) Performance Report

**Goal:** Summarize AR and performance metrics by payer for a specified period.

- [ ] Open reporting module.  
- [ ] Navigate to `Reports > Financial > Payer Summary` (or equivalent).  
- [ ] Select **Date Range** (e.g., last 6 months or requested period).  
- [ ] Include essential **Fields**:
  - [ ] Payer Name  
  - [ ] Total Charges  
  - [ ] Total Payments  
  - [ ] Denial Count / Denial Rate  
  - [ ] Average Days to Payment  
- [ ] Apply requested **Filters**:
  - [ ] Specific payer(s) or "All payers"  
  - [ ] Specific locations, providers, or specialties (if requested)
- [ ] Group results by **Payer**.  
- [ ] Run the report and review:
  - [ ] Are major payers present?  
  - [ ] Are totals consistent with expectations for the time period?  
- [ ] Identify any **notable outliers** (e.g., payer with very high denial rate).  
- [ ] Export in requested format and save with clear naming.  
- [ ] Proceed to **Validation Checklist** before sharing externally.

---

### Checklist C: Build an Ad Hoc High-Dollar Claims Report

**Goal:** Create a custom report for high-dollar open claims for a specific payer and date range.

- [ ] Open the **Ad Hoc / Custom Report Builder** in the EHR.  
- [ ] Select the correct **Data Source** (e.g., Claims, Encounters, or AR detail).  
- [ ] Choose **Fields** to display:
  - [ ] Patient Name / Account Number  
  - [ ] Payer  
  - [ ] Date of Service  
  - [ ] Procedure / CPT Code (if needed)  
  - [ ] Original Charge Amount  
  - [ ] Current Balance  
  - [ ] Claim Status  
  - [ ] AR Days  
- [ ] Define **Filters**:
  - [ ] Payer = [specific payer, e.g., Medicare or Commercial X]  
  - [ ] Date Range = [e.g., last quarter]  
  - [ ] Current Balance > [e.g., \$1,000]  
  - [ ] Status = "Open" or "Unpaid"  
- [ ] Set **Sorting/Grouping**:
  - [ ] Sort by Current Balance (descending)  
  - [ ] Group by Payer or by Provider, if requested  
- [ ] Run the report and preview results.  
- [ ] Confirm:
  - [ ] All records meet your filter criteria (e.g., no balances under \$1,000).  
  - [ ] Only the intended payer(s) appear.  
- [ ] Make any needed adjustments (fields or filters) and rerun.  
- [ ] Export to the desired format and name according to convention.  
- [ ] Use the **Validation Checklist** before distribution.

---

### Checklist D: Validate a Financial Report Before Distribution

**Goal:** Ensure the report is accurate, complete, and appropriate for use by management or external stakeholders.

#### 1. Confirm Parameters

- [ ] Date range matches the request (e.g., full calendar month, quarter).  
- [ ] Correct locations, providers, and payers are included/excluded as specified.  
- [ ] Correct report type/template was used (e.g., aging vs. payer summary).

#### 2. Reconcile Key Totals

- [ ] Compare **Total Charges** and/or **Total AR** on the report to known figures (e.g., internal ledger or monthly summary) for the same period.  
- [ ] Investigate any large unexplained discrepancies.

#### 3. Spot-Check Sample Records

- [ ] Select 3–5 random entries from the report.  
- [ ] Open each patient's account/claim in the EHR.  
- [ ] Confirm that charge amount, balance, payer, aging bucket, and status **match exactly**.

#### 4. Check for Anomalies

- [ ] Look for negative balances or impossible values.  
- [ ] Check that major payers appear when expected.  
- [ ] Scan for drastic month-to-month swings that lack explanation.

#### 5. Address Identified Issues

- [ ] If an error is due to filter settings (e.g., missing location or payer), correct and rerun the report.  
- [ ] If system data errors are found (e.g., misposted payment), report them to the appropriate team and, if possible, correct before finalizing.

#### 6. Document Caveats

- [ ] Add a brief note summarizing any known limitations (e.g., "Excludes pre-2019 encounters due to system archive," "Location B data still under audit").  
- [ ] Ensure the note accompanies the report when it is sent.

#### 7. Approval & Distribution

- [ ] If organizational policy requires, obtain supervisor or finance approval.  
- [ ] Send report only to authorized recipients, following privacy and security policies.

---

## Quiz: Financial Reporting

### Multiple-Choice Questions

**Select ONE best answer for each question.**

---

**1.** The primary purpose of an **aging report** in a healthcare setting is to:  

A. Compare provider productivity based on RVUs  
B. Show how long outstanding balances have been unpaid  
C. List all procedures with their cost-to-charge ratios  
D. Display only denied claims by payer

---

**2.** A **carrier (payer) report** would be most useful for:  

A. Identifying which guarantors have the largest balances  
B. Assessing AR performance and denial rates by insurance company  
C. Reconciling cash receipts with bank statements  
D. Tracking patient satisfaction scores by department

---

**3.** In an aging report, a **high percentage of balances in the >90 days bucket** most likely indicates:  

A. Healthy cash flow and efficient billing  
B. Underutilization of EHR reporting tools  
C. Delays in claim submission or ineffective follow-up  
D. Overuse of ad hoc reports instead of standardized ones

---

**4.** A **financial guarantor report** groups balances by:  

A. Payer contract type (HMO vs PPO)  
B. The person or entity legally responsible for the bill  
C. The ordering provider on the claim  
D. The primary diagnosis on the claim

---

**5.** Which of the following is **most commonly included** in a **PPS-related report**?  

A. Days in AR by bucket  
B. DRG-based reimbursement amounts  
C. Patient satisfaction survey results  
D. RVUs per provider

---

**6.** When creating an **ad hoc financial report**, the first step is typically to:  

A. Export data to Excel for manual analysis  
B. Select a preconfigured aging template  
C. Choose the data source and relevant fields  
D. Compare against last month's financial statement

---

**7.** A CEHRS specialist notices that a financial report excludes charges from one clinic location. The **most likely cause** is:  

A. A system outage during data export  
B. An incorrect filter setting on location parameters  
C. A software license issue with that location  
D. A HIPAA violation that hides that clinic's data

---

**8.** Which metric would be **most useful** in evaluating **payer performance** over time?  

A. Number of new patient registrations  
B. Average time from claim submission to payment  
C. Number of EHR user logins  
D. Volume of laboratory orders

---

**9.** A CEHRS specialist is asked to run a report of **all open claims over \$1,000 for Medicare patients in the last quarter**. This is best accomplished by:  

A. A standardized RVU report  
B. A standardized aging report with no filters  
C. An ad hoc report with filters on payer, amount, and date range  
D. A clinical quality measure report

---

**10.** As part of **data validation**, which of the following is the **best practice** before sending a financial report to leadership?  

A. Delete any negative balances from the report  
B. Assume EHR-generated reports are always correct  
C. Spot-check individual accounts and reconcile totals with known figures  
D. Shorten the date range to reduce the number of records

---

### Short-Answer / Scenario Questions

**11.** Your manager notices that total AR for the month in a financial report seems **lower than expected**. List **two validation steps** you would take to investigate this discrepancy.

---

**12.** You are building an ad hoc report to identify **denials from a specific commercial payer** in the last 60 days.  
Name at least **three fields** you would include in the report and **one filter** you would apply.

---

**13.** Explain in 2–3 sentences how an **aging report** and a **carrier (payer) report** together can help a practice improve its cash flow.

---

### Answer Key

#### Multiple-Choice Answers

**1.** B  
**2.** B  
**3.** C  
**4.** B  
**5.** B  
**6.** C  
**7.** B  
**8.** B  
**9.** C  
**10.** C  

#### Short-Answer Answers

**11.** Sample correct points (any two):  

- Verify **date range** is correct (e.g., full month vs partial).  
- Confirm **locations/providers** weren't unintentionally excluded in filters.  
- Reconcile total charges/AR with a **known ledger or summary** for that period.  
- Spot-check **individual patient accounts** to see if balances match report totals.  
- Check if any **adjustments/write-offs** were posted but not correctly reflected.

**12.**  

- **Fields (any three):** patient name, account number, payer name, DOS, claim amount, denial code, denial reason, claim status, provider, location.  
- **Filter (any one):** payer = specific commercial payer; date range = last 60 days; status = denied claims only.

**13.**  

A good answer: The aging report shows **how long balances have been outstanding**, so staff can see if many accounts are older than 60–90 days and prioritize follow-up. The carrier report shows **which payers** are causing delays or high denial rates. Together, they help the practice **target problem payers** and **focus collection efforts** to improve cash flow.

---

## Additional Resources

### References

- [Unitek College CEHRS Study Guide](https://www.unitekcollege.edu/blog/certified-electronic-health-records-specialist-cehrs-review-study-guide/)
- [MedCerts CEHRS Exam Overview](https://medcerts.com/blog/how-to-pass-cehrs-electronic-health-records-exam)
- [Correlation between hospital finances and quality and safety of patient care - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6697357/)
- [CMS Prospective Payment System Documentation](https://www.federalregister.gov/documents/2015/08/04/2015-18950/medicare-program-prospective-payment-system-and-consolidated-billing-for-skilled-nursing-facilities)

### Key Terms Glossary

- **Accounts Receivable (AR):** Outstanding balances owed to the healthcare organization.
- **Aging Buckets:** Time intervals (e.g., 0–30, 31–60, 61–90, 91–120, >120 days) used to categorize unpaid balances.
- **Carrier:** Another term for insurance payer or health plan.
- **Denial Rate:** Percentage of submitted claims that are denied by payers.
- **DRG (Diagnosis-Related Group):** Classification system used in PPS to determine fixed payment amounts.
- **Financial Guarantor:** Person or entity legally responsible for paying a patient's bill.
- **Payer Mix:** Distribution of revenue across different insurance types (Medicare, Medicaid, commercial, self-pay).
- **PPS (Prospective Payment System):** Medicare payment methodology based on predetermined rates.
- **RVU (Relative Value Unit):** Measure of value used in physician fee schedules to quantify work, practice expense, and malpractice costs.
- **Write-Off:** Amount removed from accounts receivable (contractual adjustments or bad debt).

---

## Notes for Instructors

### Customization Tips

1. **EHR System Specificity:** Replace generic menu paths with your institution's actual EHR system (Epic, Cerner, Meditech, etc.).
2. **Real Data Examples:** If possible, use de-identified real reports from your organization to make examples more concrete.
3. **Time Adjustments:** Adjust segment times based on class size and student experience level.
4. **Assessment Variations:** Add case studies or role-play scenarios where students must explain report findings to a "manager."

### Common Student Challenges

- **Confusion between report types:** Use comparison tables and real-world scenarios to clarify.
- **Filter logic errors:** Practice with multiple examples; emphasize the difference between "AND" vs "OR" logic.
- **Validation hesitancy:** Students often trust system outputs too much; emphasize professional responsibility.

### Extension Activities

- **Advanced Exercise:** Have students identify trends across multiple months of aging reports.
- **Cross-Module Integration:** Connect to Module 3 (Revenue Cycle) by showing how report findings drive workflow improvements.
- **Guest Speaker:** Invite a revenue cycle manager or financial analyst to discuss real-world report usage.

---

**End of Document**

---

*This lesson plan is designed for CEHRS certification preparation and aligns with the NHA test plan for the Reporting domain. Content is presented at a college level and includes industry-standard practices for financial reporting in healthcare settings.*