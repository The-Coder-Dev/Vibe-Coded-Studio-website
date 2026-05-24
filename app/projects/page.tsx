import { getAllProjects } from '@/lib/projects'
import ProjectsClient from './ProjectsClient'

export const revalidate = 60

export const metadata = {
  title: 'Projects — Ojas Studio',
  description: 'Browse our selected work — websites, brand identities, and creative campaigns for agencies and modern brands.',
}

const ProjectsPage = async () => {
  const projects = await getAllProjects()

  return (
    <main className="min-h-screen w-full pt-32 pb-24">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <span className="text-sm text-muted-foreground mb-3 block">// PROJECTS //</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-none tracking-tight text-foreground">
              All Projects.
            </h1>
          </div>
          <p className="text-sm text-muted-foreground max-w-[260px] sm:text-right leading-relaxed">
            Work we&apos;re proud of — spanning brand, web, and creative design.
          </p>
        </div>

        <ProjectsClient projects={projects} />

      </div>
    </main>
  )
}

export default ProjectsPage
