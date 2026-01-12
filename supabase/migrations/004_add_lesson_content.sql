-- Migration 004: Add content and image_url to lessons
-- Enables rich study material and graphic aids

ALTER TABLE lessons
ADD COLUMN IF NOT EXISTS content TEXT,
ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Add a comment to the columns for documentation
COMMENT ON COLUMN lessons.content IS 'Markdown formatted study content for the lesson';
COMMENT ON COLUMN lessons.image_url IS 'URL to a graphic aid for this lesson';
