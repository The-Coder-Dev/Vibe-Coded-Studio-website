'use client'

import type { Project } from '@/types/project'
import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-medium text-foreground mb-2">No projects found</p>
        <p className="text-sm text-muted-foreground">Try adjusting your filter or search.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} priority={i < 2} index={i} />
      ))}
    </div>
  )
}

export default ProjectGrid
