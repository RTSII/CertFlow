-- Enable RLS on all tables
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

-- CONTENT ACCESS: Read-only for authenticated users
CREATE POLICY "Authenticated users can read modules" ON public.modules
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can read sections" ON public.sections
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can read lessons" ON public.lessons
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can read resources" ON public.resources
    FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can read lesson_resources" ON public.lesson_resources
    FOR SELECT TO authenticated USING (true);

-- USER PROGRESS: Full CRUD for own data only
CREATE POLICY "Users can manage their own progress" ON public.user_progress
    FOR ALL TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- USER SETTINGS: Full CRUD for own data only
CREATE POLICY "Users can manage their own settings" ON public.user_settings
    FOR ALL TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);
