export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            modules: {
                Row: {
                    id: string
                    title: string
                    description: string | null
                    display_order: number
                    icon: string | null
                    week_range: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    description?: string | null
                    display_order?: number
                    icon?: string | null
                    week_range?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    description?: string | null
                    display_order?: number
                    icon?: string | null
                    week_range?: string | null
                    created_at?: string
                }
                Relationships: []
            }
            sections: {
                Row: {
                    id: string
                    module_id: string
                    title: string
                    description: string | null
                    display_order: number
                    created_at: string
                }
                Insert: {
                    id?: string
                    module_id: string
                    title: string
                    description?: string | null
                    display_order?: number
                    created_at?: string
                }
                Update: {
                    id?: string
                    module_id?: string
                    title?: string
                    description?: string | null
                    display_order?: number
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "sections_module_id_fkey"
                        columns: ["module_id"]
                        referencedRelation: "modules"
                        referencedColumns: ["id"]
                    }
                ]
            }
            lessons: {
                Row: {
                    id: string
                    section_id: string
                    title: string
                    content_markdown: string | null
                    content_type: string
                    display_order: number
                    estimated_minutes: number | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    section_id: string
                    title: string
                    content_markdown?: string | null
                    content_type?: string
                    display_order?: number
                    estimated_minutes?: number | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    section_id?: string
                    title?: string
                    content_markdown?: string | null
                    content_type?: string
                    display_order?: number
                    estimated_minutes?: number | null
                    created_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "lessons_section_id_fkey"
                        columns: ["section_id"]
                        referencedRelation: "sections"
                        referencedColumns: ["id"]
                    }
                ]
            }
            user_progress: {
                Row: {
                    id: string
                    user_id: string
                    lesson_id: string
                    completed: boolean
                    notes: string | null
                    completed_at: string | null
                    updated_at: string
                }
                Insert: {
                    id?: string
                    user_id: string
                    lesson_id: string
                    completed?: boolean
                    notes?: string | null
                    completed_at?: string | null
                    updated_at?: string
                }
                Update: {
                    id?: string
                    user_id?: string
                    lesson_id?: string
                    completed?: boolean
                    notes?: string | null
                    completed_at?: string | null
                    updated_at?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "user_progress_lesson_id_fkey"
                        columns: ["lesson_id"]
                        referencedRelation: "lessons"
                        referencedColumns: ["id"]
                    }
                ]
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
