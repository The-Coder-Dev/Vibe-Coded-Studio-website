/* ─────────────────────────────────────────────
   Project Types
   Structured to mirror future Payload CMS schema
───────────────────────────────────────────── */

export type ProjectType = 'graphic-design' | 'website-case-study'

export interface Project {
  // Core
  title: string
  slug: string
  category: string
  shortDescription: string
  fullDescription: string
  featured: boolean
  projectType: ProjectType
  year: string
  client: string

  // Media
  featuredImage: string
  galleryImages: string[]

  // Metadata
  services: string[]
  technologies: string[]

  // Website case study specific
  liveUrl?: string
  challenge?: string
  solution?: string
  outcome?: string
  designProcess?: string[]

  // Graphic design specific
  creativeDirection?: string
  designRationale?: string
  colorPalette?: string[]
}
