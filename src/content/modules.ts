import { Module } from "@/types/content"

export const MODULES: Module[] = [
    {
        id: 'module-1',
        title: 'Non-Clinical Operations',
        description: 'Administrative workflows, scheduling, patient registration, EHR fundamentals, and data management',
        weekRange: 'Weeks 1-2',
        icon: 'ClipboardList',
        examWeight: 28,
        sections: [
            {
                id: 'section-1-1',
                title: 'EHR Fundamentals',
                description: 'Core concepts of electronic health records and health information technology',
                lessons: [
                    { id: 'lesson-1-1-1', title: 'What are Electronic Health Records?', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-1-1-2', title: 'EHR Benefits & Core Functions', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-1-1-3', title: 'EHR Data Content & Structure', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-1-1-4', title: 'Health Information Exchange (HIE) Overview', contentType: 'lesson', estimatedMinutes: 15 },
                ]
            },
            {
                id: 'section-1-2',
                title: 'Patient Registration & Scheduling',
                description: 'Front-desk workflows for patient intake and appointment management',
                lessons: [
                    { id: 'lesson-1-2-1', title: 'Patient Demographics & Data Entry', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-1-2-2', title: 'Appointment Scheduling Workflows', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-1-2-3', title: 'Insurance Verification & Eligibility', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-1-2-4', title: 'Patient Check-in/Check-out Procedures', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-1-2-5', title: 'Patient Portal Support & Access Management', contentType: 'lesson', estimatedMinutes: 15 },
                ]
            },
            {
                id: 'section-1-3',
                title: 'Administrative Workflows',
                description: 'Medical records management and quality assurance processes',
                lessons: [
                    { id: 'lesson-1-3-1', title: 'Medical Records Management', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-1-3-2', title: 'Release of Information (ROI)', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-1-3-3', title: 'Correspondence & Communication', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-1-3-4', title: 'Quality Assurance in Data Entry', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-1-3-5', title: 'Data Discrepancy Identification & Reconciliation', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-1-4',
                title: 'EHR Navigation & Usability',
                description: 'User interface concepts and system optimization',
                lessons: [
                    { id: 'lesson-1-4-1', title: 'User Interface Fundamentals', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-1-4-2', title: 'Template & Form Management', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-1-4-3', title: 'Alerts, Reminders & Decision Support', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-1-4-4', title: 'EHR Hardware Inventory Management', contentType: 'lesson', estimatedMinutes: 8 },
                ]
            },
            {
                id: 'section-1-5',
                title: 'Data Integration & Management',
                description: 'Data retrieval, integration, and patient flow coordination',
                lessons: [
                    { id: 'lesson-1-5-1', title: 'Retrieving Data from Internal Databases', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-1-5-2', title: 'Acquiring Data from External Sources', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-1-5-3', title: 'Importing Information from Integrated Devices', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-1-5-4', title: 'Patient Flow Coordination', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-1-6',
                title: 'EHR Training & Support',
                description: 'End-user training and system support responsibilities',
                lessons: [
                    { id: 'lesson-1-6-1', title: 'Providing End-User Training', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-1-6-2', title: 'Communicating Software Updates & Workflow Changes', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-1-6-3', title: 'Supporting Multiple EHR Systems', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            }
        ]
    },
    {
        id: 'module-2',
        title: 'Clinical Operations',
        description: 'Clinical documentation, order entry, medication management, clinical workflows, and data exchange',
        weekRange: 'Weeks 3-4',
        icon: 'Stethoscope',
        examWeight: 32,
        sections: [
            {
                id: 'section-2-1',
                title: 'Clinical Documentation',
                description: 'Standards and best practices for clinical note documentation',
                lessons: [
                    { id: 'lesson-2-1-1', title: 'Chief Complaint & History of Present Illness', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-1-2', title: 'Review of Systems (ROS)', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-2-1-3', title: 'Physical Examination Documentation', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-1-4', title: 'Assessment & Plan (A&P)', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-2-1-5', title: 'Progress Notes & Visit Documentation', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-2-1-6', title: 'Historic Clinical Data Documentation', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-2-2',
                title: 'Order Entry & Results',
                description: 'CPOE systems, lab ordering, and results management',
                lessons: [
                    { id: 'lesson-2-2-1', title: 'Computerized Physician Order Entry (CPOE)', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-2-2-2', title: 'Laboratory Orders & Results', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-2-3', title: 'Radiology & Imaging Orders', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-2-2-4', title: 'Referral Management', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-2-2-5', title: 'CPOE Support & Troubleshooting', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-2-3',
                title: 'Medication Management',
                description: 'e-Prescribing, drug interactions, and medication safety',
                lessons: [
                    { id: 'lesson-2-3-1', title: 'e-Prescribing Fundamentals', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-3-2', title: 'Medication Reconciliation', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-2-3-3', title: 'Drug Interaction Alerts', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-2-3-4', title: 'Prescription Monitoring Programs', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-2-4',
                title: 'Clinical Workflows',
                description: 'Nursing documentation and patient communication',
                lessons: [
                    { id: 'lesson-2-4-1', title: 'Nursing Documentation', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-4-2', title: 'Care Planning & Coordination', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-2-4-3', title: 'Patient Portal & Communication', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-2-4-4', title: 'Point-of-Care EHR Support', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-2-5',
                title: 'Data Exchange & Interoperability',
                description: 'External data sharing and continuity of care',
                lessons: [
                    { id: 'lesson-2-5-1', title: 'Health Information Exchange (HIE) Workflows', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-5-2', title: 'Secure Data Transmission (Internal/External)', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-5-3', title: 'Continuity of Care Documents', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-2-5-4', title: 'Real-Time Clinical Data Input', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-2-6',
                title: 'Clinical Templates & Resources',
                description: 'Template development and patient education materials',
                lessons: [
                    { id: 'lesson-2-6-1', title: 'Developing Clinical Templates', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-6-2', title: 'Template Customization by Diagnosis/Procedure', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-2-6-3', title: 'Locating Patient Education Materials in EHR', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-2-6-4', title: 'Navigating EHR to Retrieve Patient Data', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-2-7',
                title: 'Clinical Documentation Quality',
                description: 'Documentation review and accuracy monitoring',
                lessons: [
                    { id: 'lesson-2-7-1', title: 'Reviewing Documentation for Completeness', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-2-7-2', title: 'Monitoring Documentation Accuracy', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-2-7-3', title: 'Self-Review & Peer-to-Peer Review', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            }
        ]
    },
    {
        id: 'module-3',
        title: 'Revenue Cycle & Finance',
        description: 'Medical coding, billing, claims processing, and healthcare reimbursement',
        weekRange: 'Week 5',
        icon: 'DollarSign',
        examWeight: 15,
        sections: [
            {
                id: 'section-3-1',
                title: 'Medical Coding Essentials',
                description: 'ICD-10, CPT, and HCPCS fundamentals',
                lessons: [
                    { id: 'lesson-3-1-1', title: 'ICD-10-CM Diagnosis Coding', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-3-1-2', title: 'CPT Procedural Coding', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-3-1-3', title: 'HCPCS Level II Codes', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-3-1-4', title: 'Modifiers & Code Linkage', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-3-1-5', title: 'Finding Codes in Databases', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-3-2',
                title: 'Charge Capture & Billing',
                description: 'Encounter forms and charge entry processes',
                lessons: [
                    { id: 'lesson-3-2-1', title: 'Superbill & Encounter Form Creation', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-3-2-2', title: 'Charge Capture & Entry', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-3-2-3', title: 'Entering Diagnosis & Procedure Codes', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-3-2-4', title: 'Verifying Documentation Accuracy for Reimbursement', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-3-3',
                title: 'Claims Processing',
                description: 'Health insurance claims lifecycle',
                lessons: [
                    { id: 'lesson-3-3-1', title: 'Claim Submission Process', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-3-3-2', title: 'ERA/EOB Interpretation', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-3-3-3', title: 'Denial Management & Appeals', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-3-4',
                title: 'Insurance & Reimbursement',
                description: 'Payer rules and authorization workflows',
                lessons: [
                    { id: 'lesson-3-4-1', title: 'Insurance Types & Payer Rules', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-3-4-2', title: 'Insurance Verification & Eligibility in EHR', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-3-4-3', title: 'Medicare/Medicaid Billing', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-3-4-4', title: 'Prior Authorization Workflows', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-3-4-5', title: 'Obtaining & Documenting Authorizations', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-3-5',
                title: 'Patient Financial Services',
                description: 'Patient statements and payment processing',
                lessons: [
                    { id: 'lesson-3-5-1', title: 'Patient Cost Estimation', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-3-5-2', title: 'Generating Patient Statements', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-3-5-3', title: 'Payment Collection & Posting', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            }
        ]
    },
    {
        id: 'module-4',
        title: 'Regulatory Compliance',
        description: 'HIPAA, privacy, security, professional standards, and compliance management',
        weekRange: 'Week 6',
        icon: 'Shield',
        examWeight: 15,
        sections: [
            {
                id: 'section-4-1',
                title: 'HIPAA Privacy & Security',
                description: 'Privacy and security rule fundamentals',
                lessons: [
                    { id: 'lesson-4-1-1', title: 'Privacy Rule Overview', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-4-1-2', title: 'Security Rule & Safeguards (Administrative, Physical, Technical)', contentType: 'lesson', estimatedMinutes: 20 },
                    { id: 'lesson-4-1-3', title: 'Patient Rights (Access, Amendment, Accounting)', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-4-1-4', title: 'Breach Notification Requirements', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-1-5', title: 'Minimum Necessary Standard', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-4-1-6', title: 'HITECH Act Requirements', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-4-2',
                title: 'Protected Health Information (PHI) Management',
                description: 'Confidentiality and secure handling of PHI',
                lessons: [
                    { id: 'lesson-4-2-1', title: 'Maintaining Confidentiality & Security of PHI', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-4-2-2', title: 'De-identification of PHI', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-2-3', title: 'Release of PHI (ROI Procedures)', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-4-2-4', title: 'Secure Transmission of PHI', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-4-3',
                title: 'Access Controls & Security',
                description: 'User roles, privileges, and security practices',
                lessons: [
                    { id: 'lesson-4-3-1', title: 'User Roles & Privileges', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-4-3-2', title: 'Allocating Access Controls in EHR', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-3-3', title: 'Verifying Compliance with Access Controls', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-4-3-4', title: 'Identifying Non-Compliant Behaviors', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-3-5', title: 'Password Management & Security Best Practices', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-4-4',
                title: 'Professional Standards & Best Practices',
                description: 'Professional conduct and legal considerations',
                lessons: [
                    { id: 'lesson-4-4-1', title: 'Professional Standards of Care for Health Records', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-4-2', title: 'Educating Others on Compliance', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-4-4-3', title: 'Enforcing Compliant Behaviors', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-4-4-4', title: 'Legal Ramifications of EHR Inaccuracies', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-4-5',
                title: 'Compliance Management',
                description: 'Auditing, risk assessment, and incident response',
                lessons: [
                    { id: 'lesson-4-5-1', title: 'Abbreviation Standards & Compliance', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-4-5-2', title: 'Internal EHR Audits', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-4-5-3', title: 'Audit Trails & Access Logs', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-5-4', title: 'Risk Assessment & Management', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-4-5-5', title: 'Incident Response Procedures', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-4-6',
                title: 'EHR System Management',
                description: 'Downtime, recovery, and business continuity',
                lessons: [
                    { id: 'lesson-4-6-1', title: 'EHR Downtime Procedures', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-6-2', title: 'Data Recovery & Backup Procedures', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-4-6-3', title: 'Business Continuity Planning', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-4-7',
                title: 'Incentive Programs & Quality Measures',
                description: 'Meaningful Use, MIPS, and incentive compliance',
                lessons: [
                    { id: 'lesson-4-7-1', title: 'Meaningful Use / Promoting Interoperability', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-4-7-2', title: 'MIPS & Quality Payment Programs (QPP)', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-4-7-3', title: 'EHR Incentive Program Compliance', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            }
        ]
    },
    {
        id: 'module-5',
        title: 'Reporting',
        description: 'Financial reporting, clinical reporting, quality measures, and external reporting',
        weekRange: 'Week 7',
        icon: 'BarChart',
        examWeight: 10,
        sections: [
            {
                id: 'section-5-1',
                title: 'Financial Reporting',
                description: 'Standardized and ad hoc financial report generation',
                lessons: [
                    { id: 'lesson-5-1-1', title: 'Standardized Financial Reports (Aging, Carriers, RVU)', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-5-1-2', title: 'Financial Guarantor Reports', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-5-1-3', title: 'Cost of Procedures & Prospective Payment Systems', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-5-1-4', title: 'Ad Hoc Financial Report Generation', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-5-1-5', title: 'Using EHR Fields for Custom Financial Reports', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-5-2',
                title: 'Clinical Reporting',
                description: 'Clinical reports and patient outcome tracking',
                lessons: [
                    { id: 'lesson-5-2-1', title: 'Standardized Clinical Reports (By Diagnosis, Procedure, Provider)', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-5-2-2', title: 'Patient Outcome Tracking Reports', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-5-2-3', title: 'Ad Hoc Clinical Report Generation', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-5-2-4', title: 'Using EHR Fields for Custom Clinical Reports', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-5-2-5', title: 'Continuity of Care Reporting', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-5-3',
                title: 'Quality Improvement & Statistical Reporting',
                description: 'CQMs, productivity, and research reporting',
                lessons: [
                    { id: 'lesson-5-3-1', title: 'Clinical Quality Measures (CQMs)', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-5-3-2', title: 'Quality Improvement (QI) Measures', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-5-3-3', title: 'Productivity & Metrics Reports', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-5-3-4', title: 'Research & Statistical Reports', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-5-3-5', title: 'Average Length of Stay & Patient Outcomes', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-5-4',
                title: 'External Reporting & Compliance',
                description: 'Regulatory reporting and data extraction',
                lessons: [
                    { id: 'lesson-5-4-1', title: 'Meaningful Use/QPP External Reporting', contentType: 'lesson', estimatedMinutes: 18 },
                    { id: 'lesson-5-4-2', title: 'Compiling Data for External Agencies', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-5-4-3', title: 'Report Accuracy Verification', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-5-4-4', title: 'Data Mining & Extraction Methods', contentType: 'lesson', estimatedMinutes: 12 },
                ]
            },
            {
                id: 'section-5-5',
                title: 'Report Generation Techniques',
                description: 'Query building and report distribution',
                lessons: [
                    { id: 'lesson-5-5-1', title: 'Running Queries in EHR Systems', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-5-5-2', title: 'Creating Custom Reports', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-5-5-3', title: 'Report Distribution & Documentation', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            }
        ]
    },
    {
        id: 'module-6',
        title: 'Practice & Exam Prep',
        description: 'Comprehensive review, practice tests, and exam strategies',
        weekRange: 'Weeks 8-10',
        icon: 'Target',
        examWeight: 0,
        sections: [
            {
                id: 'section-6-1',
                title: 'Domain Review',
                description: 'Detailed review of all five exam domains',
                lessons: [
                    { id: 'lesson-6-1-1', title: 'Non-Clinical Operations Review', contentType: 'review', estimatedMinutes: 35 },
                    { id: 'lesson-6-1-2', title: 'Clinical Operations Review', contentType: 'review', estimatedMinutes: 40 },
                    { id: 'lesson-6-1-3', title: 'Revenue Cycle Review', contentType: 'review', estimatedMinutes: 20 },
                    { id: 'lesson-6-1-4', title: 'Regulatory Compliance Review', contentType: 'review', estimatedMinutes: 25 },
                    { id: 'lesson-6-1-5', title: 'Reporting Review', contentType: 'review', estimatedMinutes: 20 },
                ]
            },
            {
                id: 'section-6-2',
                title: 'Domain-Specific Practice',
                description: 'Mini tests for each exam domain',
                lessons: [
                    { id: 'lesson-6-2-1', title: 'Non-Clinical Operations Mini Test', contentType: 'practice', estimatedMinutes: 20 },
                    { id: 'lesson-6-2-2', title: 'Clinical Operations Mini Test', contentType: 'practice', estimatedMinutes: 20 },
                    { id: 'lesson-6-2-3', title: 'Revenue Cycle Mini Test', contentType: 'practice', estimatedMinutes: 15 },
                    { id: 'lesson-6-2-4', title: 'Regulatory Compliance Mini Test', contentType: 'practice', estimatedMinutes: 15 },
                    { id: 'lesson-6-2-5', title: 'Reporting Mini Test', contentType: 'practice', estimatedMinutes: 15 },
                ]
            },
            {
                id: 'section-6-3',
                title: 'Integrated Practice Tests',
                description: 'Full-length exam simulations',
                lessons: [
                    { id: 'lesson-6-3-1', title: 'Full-Length Practice Test 1', contentType: 'practice', estimatedMinutes: 125 },
                    { id: 'lesson-6-3-2', title: 'Full-Length Practice Test 2', contentType: 'practice', estimatedMinutes: 125 },
                    { id: 'lesson-6-3-3', title: 'Full-Length Practice Test 3', contentType: 'practice', estimatedMinutes: 125 },
                    { id: 'lesson-6-3-4', title: 'Timed Exam Simulation', contentType: 'practice', estimatedMinutes: 125 },
                ]
            },
            {
                id: 'section-6-4',
                title: 'Exam Strategy & Preparation',
                description: 'Tips and techniques for test day success',
                lessons: [
                    { id: 'lesson-6-4-1', title: 'Time Management Tips', contentType: 'lesson', estimatedMinutes: 10 },
                    { id: 'lesson-6-4-2', title: 'Question Analysis Techniques', contentType: 'lesson', estimatedMinutes: 12 },
                    { id: 'lesson-6-4-3', title: 'Common Pitfalls & Mistakes', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-6-4-4', title: 'Test Day Preparation', contentType: 'lesson', estimatedMinutes: 8 },
                    { id: 'lesson-6-4-5', title: 'Stress Management & Test Anxiety', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            },
            {
                id: 'section-6-5',
                title: 'Weak Area Focus',
                description: 'Targeted improvement and final review',
                lessons: [
                    { id: 'lesson-6-5-1', title: 'Identifying Knowledge Gaps', contentType: 'lesson', estimatedMinutes: 15 },
                    { id: 'lesson-6-5-2', title: 'Targeted Review Sessions', contentType: 'lesson', estimatedMinutes: 30 },
                    { id: 'lesson-6-5-3', title: 'Final Review Checklist', contentType: 'lesson', estimatedMinutes: 10 },
                ]
            }
        ]
    },
]
