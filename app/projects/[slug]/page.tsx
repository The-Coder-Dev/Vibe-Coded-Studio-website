import { notFound } from 'next/navigation'
import { getProjectBySlug, getNextProjects, getAllProjects } from '@/lib/projects'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectContentRenderer from '@/components/projects/ProjectContentRenderer'
import RelatedProjects from '@/components/projects/RelatedProjects'

interface Props {
  params: Promise<{ slug: string }>
}

/* Generate all static slugs at build time */
export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

/* Dynamic metadata per project */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: `${project.title} — Ojas Studio`,
    description: project.shortDescription,
    openGraph: {
      images: [{ url: project.featuredImage }],
    },
  }
}

const ProjectPage = async ({ params }: Props) => {
  const { slug } = await params
  const [project, nextProjects] = await Promise.all([
    getProjectBySlug(slug),
    getNextProjects(slug, 2),
  ])

  if (!project) notFound()

  return (
    <main className="min-h-screen w-full pt-24 pb-0">
      {/* Hero: back link, title, metadata row, hero image */}
      <ProjectHero project={project} />

      {/* Type-specific content: challenge/solution/gallery/tech OR creative direction/gallery */}
      <ProjectContentRenderer project={project} />

      {/* Next Projects */}
      <RelatedProjects projects={nextProjects} title="Next Projects." />
    </main>
  )
}

export default ProjectPage
