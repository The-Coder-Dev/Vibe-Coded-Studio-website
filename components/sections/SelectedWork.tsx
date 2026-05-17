'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types/project'
import ProjectCard from '@/components/projects/ProjectCard'

interface SelectedWorkProps {
  projects: Project[]
}

const SelectedWork = ({ projects }: SelectedWorkProps) => {
  if (!projects || projects.length === 0) return null



  return (
    <section className="w-full py-20 sm:py-28 bg-background" id="work">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-none tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Selected Work.
          </motion.h2>

          <div className="flex flex-col items-start sm:items-end gap-3">
            <motion.p
              className="text-sm text-muted-foreground max-w-[240px] sm:text-right leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              A look at some of the brands we&apos;ve helped — and the outcomes we&apos;ve delivered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground border-b border-foreground pb-0.5 hover:opacity-60 transition-opacity"
              >
                View all projects
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Grid — all cards equal size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.slug} project={project} priority={i < 2} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default SelectedWork
