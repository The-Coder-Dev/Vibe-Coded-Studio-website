'use client'

import { motion } from 'framer-motion'
import type { Project } from '@/types/project'
import ProjectGallery from './ProjectGallery'

interface ProjectContentRendererProps {
  project: Project
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ── Shared Section Heading ── */
const SectionLabel = ({ text }: { text: string }) => (
  <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
    // {text}
  </span>
)

/* ── Website Case Study Layout ── */
const WebsiteCaseStudy = ({ project }: { project: Project }) => (
  <div className="w-full">
    {/* Challenge + Solution */}
    {(project.challenge || project.solution) && (
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.challenge && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0)}>
                <SectionLabel text="Project Goals" />
                <p className="text-base text-foreground/80 leading-relaxed">{project.challenge}</p>
              </motion.div>
            )}
            {project.solution && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0.08)}>
                <SectionLabel text="The Result" />
                <p className="text-base text-foreground/80 leading-relaxed">{project.solution}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )}

    {/* Gallery */}
    <ProjectGallery images={project.galleryImages} title={project.title} />

    {/* Outcome */}
    {project.outcome && (
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <SectionLabel text="Final Outcome" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 tracking-tight">
                Results that move the needle.
              </h2>
            </motion.div>
            <motion.p
              className="text-base text-foreground/75 leading-relaxed"
              {...fadeUp(0.08)}
            >
              {project.outcome}
            </motion.p>
          </div>
        </div>
      </section>
    )}

    {/* Tech Stack */}
    {project.technologies && project.technologies.length > 0 && (
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)}>
            <SectionLabel text="Tech Stack" />
            <div className="flex flex-wrap gap-3 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )}
  </div>
)

/* ── Graphic Design Layout ── */
const GraphicDesign = ({ project }: { project: Project }) => (
  <div className="w-full">
    {/* Creative Direction + Design Rationale */}
    {(project.creativeDirection || project.designRationale) && (
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.creativeDirection && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0)}>
                <SectionLabel text="Creative Direction" />
                <p className="text-base text-foreground/80 leading-relaxed">{project.creativeDirection}</p>
              </motion.div>
            )}
            {project.designRationale && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0.08)}>
                <SectionLabel text="Design Rationale" />
                <p className="text-base text-foreground/80 leading-relaxed">{project.designRationale}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )}

    {/* Color Palette */}
    {project.colorPalette && project.colorPalette.length > 0 && (
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)}>
            <SectionLabel text="Color Palette" />
            <div className="flex gap-3 mt-4 flex-wrap">
              {project.colorPalette.map((color) => (
                <div key={color} className="flex flex-col items-center gap-2">
                  <div
                    className="h-14 w-14 rounded-xl border border-border shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-[11px] font-mono text-muted-foreground">{color}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )}

    {/* Gallery */}
    <ProjectGallery images={project.galleryImages} title={project.title} />

    {/* Services used */}
    {project.services && project.services.length > 0 && (
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp(0)}>
            <SectionLabel text="Services" />
            <div className="flex flex-wrap gap-3 mt-4">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )}
  </div>
)

/* ── Main Renderer ── */
const ProjectContentRenderer = ({ project }: ProjectContentRendererProps) => {
  if (project.projectType === 'website-case-study') {
    return <WebsiteCaseStudy project={project} />
  }
  return <GraphicDesign project={project} />
}

export default ProjectContentRenderer
