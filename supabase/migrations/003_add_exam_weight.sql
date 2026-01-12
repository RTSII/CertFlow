-- Migration: Add exam_weight to modules and estimated_minutes to lessons
-- This supports the ULTRATHINK UI/UX optimization

-- Add exam_weight column to modules table
ALTER TABLE modules 
ADD COLUMN IF NOT EXISTS exam_weight integer DEFAULT 0;

-- Add estimated_minutes column to lessons table  
ALTER TABLE lessons 
ADD COLUMN IF NOT EXISTS estimated_minutes integer DEFAULT 10;

-- Remove resource_tier if it exists (internal only, not user-facing)
ALTER TABLE lessons 
DROP COLUMN IF EXISTS resource_tier;

-- Update existing modules with exam weights based on CEHRS test plan
-- These correspond to official NHA domain percentages
UPDATE modules SET exam_weight = 25 WHERE title ILIKE '%Non-Clinical%';
UPDATE modules SET exam_weight = 30 WHERE title ILIKE '%Clinical%';
UPDATE modules SET exam_weight = 20 WHERE title ILIKE '%Revenue%';
UPDATE modules SET exam_weight = 25 WHERE title ILIKE '%Regulatory%' OR title ILIKE '%Compliance%';
UPDATE modules SET exam_weight = 0 WHERE title ILIKE '%Practice%' OR title ILIKE '%Review%';
