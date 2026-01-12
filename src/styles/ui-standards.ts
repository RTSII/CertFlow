/**
 * CheckFlow UI Standards
 * 
 * MANDATORY styling guidelines for all components.
 * These classes should be used consistently across the entire application.
 * 
 * If you're building a new component, reference this file.
 */

// ============================================================================
// TEXT COLORS - Always use these, never raw color values for text
// ============================================================================

export const TEXT_STYLES = {
    // Primary text - for headings, important content
    primary: 'text-white',

    // Secondary text - for descriptions, subtitles
    secondary: 'text-zinc-300',

    // Muted text - for timestamps, metadata, hints
    muted: 'text-zinc-400',

    // Disabled/completed text
    disabled: 'text-zinc-500',

    // NEVER USE: text-zinc-100, text-gray-*, text-foreground (too light on dark backgrounds)
} as const

// ============================================================================
// INTERACTIVE TEXT - Links, buttons, clickable items
// ============================================================================

export const INTERACTIVE_TEXT_STYLES = {
    // Default interactive text
    default: 'text-white hover:text-cyan-300 transition-colors',

    // Completed/checked items
    completed: 'text-zinc-400 line-through decoration-emerald-500/50',

    // Active/selected state
    active: 'text-cyan-400',
} as const

// ============================================================================
// CARD BACKGROUNDS - Glassmorphism standards
// ============================================================================

export const CARD_STYLES = {
    // Standard card background
    default: 'bg-white/5 backdrop-blur-sm border border-white/10',

    // Hover state for interactive cards
    hover: 'hover:bg-white/10 hover:border-cyan-500/30',

    // Completed/success state
    completed: 'bg-emerald-500/10 border-emerald-500/30',

    // Selected/active state
    active: 'bg-cyan-500/10 border-cyan-500/40',
} as const

// ============================================================================
// GLOW EFFECTS - Neon accents
// ============================================================================

export const GLOW_STYLES = {
    cyan: 'shadow-[0_0_20px_rgba(0,255,245,0.3)]',
    fuchsia: 'shadow-[0_0_20px_rgba(255,0,255,0.3)]',
    emerald: 'shadow-[0_0_20px_rgba(0,255,136,0.3)]',
    purple: 'shadow-[0_0_20px_rgba(147,51,234,0.3)]',
} as const

// ============================================================================
// COMPONENT-SPECIFIC STANDARDS
// ============================================================================

// Lesson Item - for checklist items in modules
export const LESSON_ITEM_STYLES = {
    container: 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 rounded-xl px-4 py-3',
    title: 'text-white font-semibold text-sm', // ALWAYS white, never zinc-100
    titleCompleted: 'text-zinc-400 line-through decoration-emerald-500/50',
    titleHover: 'group-hover/link:text-cyan-300',
    metadata: 'text-zinc-400 text-xs font-mono',
    chevron: 'text-zinc-400 group-hover:text-cyan-400',
} as const

// Section Accordion
export const SECTION_STYLES = {
    container: 'bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 rounded-xl',
    title: 'text-white font-semibold text-base',
    subtitle: 'text-zinc-400 text-sm font-mono',
    badge: 'bg-white/10 text-white border-white/20',
    badgeCompleted: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
} as const

// Module Card
export const MODULE_CARD_STYLES = {
    container: 'bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl',
    title: 'text-white font-bold text-xl',
    description: 'text-zinc-300 text-sm',
    metadata: 'text-zinc-400 text-xs',
} as const

// ============================================================================
// UTILITY CLASSES FOR COMMON PATTERNS
// ============================================================================

// Use these in globals.css as utility classes
export const UTILITY_CLASSES = `
/* Visible text on dark backgrounds - USE THESE */
.text-visible { @apply text-white; }
.text-visible-secondary { @apply text-zinc-300; }
.text-visible-muted { @apply text-zinc-400; }

/* Interactive text with proper hover */
.text-interactive { @apply text-white hover:text-cyan-300 transition-colors; }

/* Card with proper visibility */
.card-dark { @apply bg-white/5 border border-white/10 backdrop-blur-sm; }
.card-dark-hover { @apply hover:bg-white/10 hover:border-cyan-500/30; }
`

// ============================================================================
// ANTI-PATTERNS - NEVER USE THESE
// ============================================================================

/**
 * ❌ NEVER USE:
 * - text-zinc-100 (too light, barely visible)
 * - text-foreground (maps to wrong color in dark mode)
 * - text-muted-foreground (unreliable in vaporwave theme)
 * - text-gray-* (inconsistent with zinc palette)
 * - opacity-* on text (makes text invisible)
 * 
 * ✅ ALWAYS USE:
 * - text-white for primary text
 * - text-zinc-300 for secondary text
 * - text-zinc-400 for muted/metadata text
 * - text-zinc-500 for disabled text only
 */
