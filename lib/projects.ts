/* ─────────────────────────────────────────────
   Data Fetching Layer
   Swap these functions for Payload CMS API
   calls when migrating — zero changes needed
   in components or pages.
───────────────────────────────────────────── */

import type { Project } from '@/types/project'
import { projects } from '@/data/projects'

/** Return all projects */
export async function getAllProjects(): Promise<Project[]> {
  return projects
}

/** Return only featured projects */
export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter((p) => p.featured)
}

/** Return a single project by slug, or null */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return projects.find((p) => p.slug === slug) ?? null
}

/** Return all unique categories */
export async function getAllCategories(): Promise<string[]> {
  const cats = projects.map((p) => p.category)
  return ['All', ...Array.from(new Set(cats))]
}

/** Return related projects (same category, different slug) */
export async function getRelatedProjects(slug: string, limit = 2): Promise<Project[]> {
  const current = projects.find((p) => p.slug === slug)
  if (!current) return []
  return projects
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit)
}

/** Return next N projects after a given slug (for "Next Projects" section) */
export async function getNextProjects(slug: string, limit = 2): Promise<Project[]> {
  const idx = projects.findIndex((p) => p.slug === slug)
  if (idx === -1) return []
  const rest = [...projects.slice(idx + 1), ...projects.slice(0, idx)]
  return rest.slice(0, limit)
}
