/* ─────────────────────────────────────────────
   Data Fetching Layer — Sanity CMS + static fallback
   Sanity projects are shown first; static projects
   fill the rest so nothing disappears mid-migration.
───────────────────────────────────────────── */

import type { Project } from '@/types/project'
import { projects as staticProjects } from '@/data/projects'
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
  "description": pt::text(description)
}`

/** Map a raw Sanity document → Project shape */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapSanityProject(doc: any): Project {
  return {
    _sanity: true,
    _id: doc._id,
    title: doc.title,
    slug: doc.slug,
    category: Array.isArray(doc.categories) && doc.categories.length > 0
      ? doc.categories[0]
      : 'Web Design',
    shortDescription: doc.tagline ?? '',
    fullDescription: doc.description ?? doc.tagline ?? '',
    featured: doc.featured ?? false,
    projectType: 'website-case-study',
    year: doc.publishedAt ? new Date(doc.publishedAt).getFullYear().toString() : new Date().getFullYear().toString(),
    client: '',
    featuredImage: doc.coverImage ?? '',
    galleryImages: [],
    services: [],
    technologies: doc.technologies ?? [],
    liveUrl: doc.projectUrl,
  }
}

/** Fetch all Sanity projects */
async function getSanityProjects(): Promise<Project[]> {
  try {
    const docs = await client.fetch(ALL_PROJECTS_QUERY, {}, { next: { revalidate: 60 } })
    return (docs ?? []).map(mapSanityProject)
  } catch {
    return []
  }
}

/** Merge Sanity + static, deduplicating by slug (Sanity wins) */
async function getMergedProjects(): Promise<Project[]> {
  const sanity = await getSanityProjects()
  const sanitySlugs = new Set(sanity.map((p) => p.slug))
  const filtered = staticProjects.filter((p) => !sanitySlugs.has(p.slug))
  return [...sanity, ...filtered]
}

/** Return all projects */
export async function getAllProjects(): Promise<Project[]> {
  return getMergedProjects()
}

/** Return only featured projects */
export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getMergedProjects()
  return all.filter((p) => p.featured)
}

/** Return a single project by slug, or null */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const all = await getMergedProjects()
  return all.find((p) => p.slug === slug) ?? null
}

/** Return all unique categories */
export async function getAllCategories(): Promise<string[]> {
  const all = await getMergedProjects()
  const cats = all.map((p) => p.category)
  return ['All', ...Array.from(new Set(cats))]
}

/** Return related projects (same category, different slug) */
export async function getRelatedProjects(slug: string, limit = 2): Promise<Project[]> {
  const all = await getMergedProjects()
  const current = all.find((p) => p.slug === slug)
  if (!current) return []
  return all
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit)
}

/** Return next N projects after a given slug (for "Next Projects" section) */
export async function getNextProjects(slug: string, limit = 2): Promise<Project[]> {
  const all = await getMergedProjects()
  const idx = all.findIndex((p) => p.slug === slug)
  if (idx === -1) return []
  const rest = [...all.slice(idx + 1), ...all.slice(0, idx)]
  return rest.slice(0, limit)
}

