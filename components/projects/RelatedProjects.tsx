'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project, SanityImage } from '@/types/project'
import { urlFor } from '@/sanity/lib/image'

interface RelatedProjectsProps {
  projects: Project[]
  title?: string
}

/** Resolve featuredImage — may be a Sanity object or a plain URL string */
function resolveImage(img: string | SanityImage | null | undefined): string {
  if (!img) return ''
  if (typeof img === 'string') return img
  try {
    return urlFor(img).width(900).height(675).fit('crop').auto('format').url()
  } catch {
    return ''
  }
}

const RelatedProjects = ({ projects, title = 'Next Projects.' }: RelatedProjectsProps) => {
  if (!projects || projects.length === 0) return null

  return (
    <section className="w-full py-16 border-t border-border">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-foreground mb-8 tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, i) => {
            const imgSrc = resolveImage(project.featuredImage)
            return (
              <motion.div
                key={project.slug}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/projects/${project.slug}`} className="absolute inset-0">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={project.title}
                      fill
                      unoptimized={project._sanity === true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-medium">{project.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-white/60 mb-1">{project.category}</p>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                      <ArrowUpRight size={16} className="text-black" />
                    </div>
                  </div>

                  {/* Default visible title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 px-3 py-1">
                      <span className="text-[11px] font-medium text-white/80">{project.title}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RelatedProjects
