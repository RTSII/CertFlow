export type ResourceType = 'official' | 'course' | 'article' | 'video' | 'practice' | 'pdf'
export type ResourceCategory = 'essential' | 'deep-dive' | 'practice' | 'official'
export type ContentType = 'lesson' | 'quiz' | 'practice' | 'review'

export interface Resource {
    id: string
    title: string
    url: string
    resourceType: ResourceType
    category: ResourceCategory
    description: string
    isExternal: boolean
    domainTags: string[]
}

export interface Lesson {
    id: string
    title: string
    contentType: ContentType
    estimatedMinutes?: number
    resourceIds?: string[]
    contentMarkdown?: string
}

export interface Section {
    id: string
    title: string
    description?: string
    lessons: Lesson[]
}

export interface Module {
    id: string
    title: string
    description: string
    weekRange: string
    icon: string
    examWeight: number  // Percentage of exam (e.g., 25)
    sections: Section[]
}
