'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/types/project'
import ProjectCard from '@/components/projects/ProjectCard'

interface ProjectsClientProps {
  projects: Project[]
}

const ProjectsClient = ({ projects }: ProjectsClientProps) => {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-lg font-medium text-foreground mb-2">No projects yet</p>
        <p className="text-sm text-muted-foreground">Check back soon — we&apos;re adding work to the studio.</p>
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={i < 2}
          index={i}
        />
      ))}
    </motion.div>
  )
}

export default ProjectsClient
