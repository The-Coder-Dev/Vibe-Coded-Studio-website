'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
  priority?: boolean
  index?: number
}

const ProjectCard = ({ project, priority = false, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl bg-muted/30 aspect-square"
    >
      <Link href={`/projects/${project.slug}`} className="absolute inset-0">
        {/* Featured image */}
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />

        {/* Gradient overlay — slides up on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Bottom content — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-widest text-white/60 mb-1">
              {project.category}
            </p>
            <h3 className="text-lg font-semibold text-white leading-tight">{project.title}</h3>
          </div>

          {/* Arrow button */}
          <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg">
            <ArrowUpRight size={17} className="text-black" />
          </div>
        </div>

        {/* Category pill — visible by default, hides on hover */}
        <div className="absolute top-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white/80">
            {project.category}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard
