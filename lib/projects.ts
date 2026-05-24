/* ─────────────────────────────────────────────
   Data Fetching Layer — Sanity CMS only
───────────────────────────────────────────── */

import type { Project } from '@/types/project'
import { client } from '@/sanity/lib/client'

/** GROQ query — fetch all published projects from Sanity */
const ALL_PROJECTS_QUERY = `*[_type == "project"] | order(order asc, publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  tagline,
  coverImage,
  categories,
  technologies,
  featured,
  projectUrl,
  githubUrl,
  publishedAt,
  order,
  "description": pt::text(description),
  "descriptionRaw": description,
  "gallery": gallery[]{ _key, asset, alt, caption, hotspot, crop, _type }
}`

/** Convert a slug like 'web-design' → 'Web Design' */
function humanizeSlug(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/** Map a raw Sanity document → Project shape */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityProject(doc: any): Project {
  const galleryImages: (string | import('@/types/project').SanityImage)[] =
    Array.isArray(doc.gallery)
      ? doc.gallery
          .filter((img: any) => img?.asset?._ref)
          .map((img: any) => ({
            _type: 'image' as const,
            asset: img.asset,
            alt: img.alt ?? '',
            ...(img.hotspot ? { hotspot: img.hotspot } : {}),
            ...(img.crop ? { crop: img.crop } : {}),
          }))
      : []

  return {
    _sanity: true,
    _id: doc._id,
    title: doc.title,
    slug: doc.slug,
    category: Array.isArray(doc.categories) && doc.categories.length > 0
      ? humanizeSlug(doc.categories[0])
      : 'Web Design',
    shortDescription: doc.tagline ?? '',
    fullDescription: doc.description ?? doc.tagline ?? '',
    descriptionBlocks: Array.isArray(doc.descriptionRaw) ? doc.descriptionRaw : undefined,
    featured: doc.featured ?? false,
    projectType: 'website-case-study',
    year: doc.publishedAt
      ? new Date(doc.publishedAt).getFullYear().toString()
      : new Date().getFullYear().toString(),
    client: '',
    featuredImage: doc.coverImage ?? '',
    galleryImages,
    // services = all categories from Sanity, humanized
    services: Array.isArray(doc.categories) ? doc.categories.map(humanizeSlug) : [],
    // technologies = separate tech stack field from Sanity
    technologies: Array.isArray(doc.technologies) ? doc.technologies : [],
    liveUrl: doc.projectUrl,
  }
}

/** Fetch all published Sanity projects */
export async function getAllProjects(): Promise<Project[]> {
  try {
    const docs = await client.fetch(ALL_PROJECTS_QUERY, {}, { next: { revalidate: 60 } })
    return (docs ?? []).map(mapSanityProject)
  } catch (err: any) {
    console.error('[Sanity] fetch error:', err?.message ?? err)
    return []
  }
}

/** Return only featured projects */
export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects()
  return all.filter((p) => p.featured)
}

/** Return a single project by slug */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const all = await getAllProjects()
  return all.find((p) => p.slug === slug) ?? null
}

/** Return next N projects after a given slug (for "Next Projects" section) */
export async function getNextProjects(slug: string, limit = 2): Promise<Project[]> {
  const all = await getAllProjects()
  const idx = all.findIndex((p) => p.slug === slug)
  if (idx === -1) return []
  const rest = [...all.slice(idx + 1), ...all.slice(0, idx)]
  return rest.slice(0, limit)
}
