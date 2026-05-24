/* ─────────────────────────────────────────────
   Project Types
   Supports both Sanity CMS and static data
───────────────────────────────────────────── */

export type ProjectType = 'graphic-design' | 'website-case-study'

/** Sanity image asset shape */
export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  alt?: string
  hotspot?: { x: number; y: number; height: number; width: number }
}

export interface Project {
  // Source flag — true = came from Sanity
  _sanity?: boolean
  _id?: string

  // Core
  title: string
  slug: string
  category: string
  shortDescription: string
  fullDescription: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  descriptionBlocks?: any[]
  featured: boolean
  projectType: ProjectType
  year: string
  client: string

  // Media — either a URL string (static) or a Sanity image object
  featuredImage: string | SanityImage
  galleryImages: (string | SanityImage)[]

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
