'use client'

import { motion } from 'framer-motion'
import { PortableText } from '@portabletext/react'
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

/* ── Rich Text components for Portable Text ── */
const portableTextComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-lg text-foreground/80 leading-relaxed mb-4 last:mb-0">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-8 mb-4 tracking-tight">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-7 mb-3 tracking-tight">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg font-bold text-foreground mt-5 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-foreground/30 pl-5 my-6 italic text-foreground/60 text-lg leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold text-foreground">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: any) => (
      <span className="underline underline-offset-2">{children}</span>
    ),
    'strike-through': ({ children }: any) => (
      <span className="line-through">{children}</span>
    ),
    code: ({ children }: any) => (
      <code className="font-mono text-sm bg-card border border-border px-1.5 py-0.5 rounded">{children}</code>
    ),
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2 text-foreground hover:text-foreground/70 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-outside ml-6 my-4 space-y-2 text-foreground/80 text-lg leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside ml-6 my-4 space-y-2 text-foreground/80 text-lg leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
}

/* ── Website Case Study Layout ── */
const WebsiteCaseStudy = ({ project }: { project: Project }) => (
  <div className="w-full">

    {/* Description — rich text if blocks available, plain text fallback */}
    {(project.descriptionBlocks?.length || project.fullDescription) && (
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
            <motion.div {...fadeUp(0)} className="pt-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                // About This Project
              </span>
            </motion.div>
            <motion.div {...fadeUp(0.06)}>
              {project.descriptionBlocks?.length ? (
                <PortableText
                  value={project.descriptionBlocks}
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-lg text-foreground/80 leading-relaxed">{project.fullDescription}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    )}

    {/* Challenge + Solution */}
    {(project.challenge || project.solution) && (
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.challenge && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0)}>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  // Project Goals
                </span>
                <p className="text-base text-foreground/80 leading-relaxed">{project.challenge}</p>
              </motion.div>
            )}
            {project.solution && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0.08)}>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  // The Result
                </span>
                <p className="text-base text-foreground/80 leading-relaxed">{project.solution}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )}

    {/* Gallery — uniform height grid */}
    <ProjectGallery images={project.galleryImages} title={project.title} />

    {/* Outcome */}
    {project.outcome && (
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                // Final Outcome
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4 tracking-tight">
                Results that move the needle.
              </h2>
            </motion.div>
            <motion.p className="text-base text-foreground/75 leading-relaxed" {...fadeUp(0.08)}>
              {project.outcome}
            </motion.p>
          </div>
        </div>
      </section>
    )}
  </div>
)

/* ── Graphic Design Layout ── */
const GraphicDesign = ({ project }: { project: Project }) => (
  <div className="w-full">

    {/* Description */}
    {(project.descriptionBlocks?.length || project.fullDescription) && (
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
            <motion.div {...fadeUp(0)} className="pt-1">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                // About This Project
              </span>
            </motion.div>
            <motion.div {...fadeUp(0.06)}>
              {project.descriptionBlocks?.length ? (
                <PortableText value={project.descriptionBlocks} components={portableTextComponents} />
              ) : (
                <p className="text-lg text-foreground/80 leading-relaxed">{project.fullDescription}</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    )}

    {/* Creative Direction + Design Rationale */}
    {(project.creativeDirection || project.designRationale) && (
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.creativeDirection && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0)}>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">// Creative Direction</span>
                <p className="text-base text-foreground/80 leading-relaxed">{project.creativeDirection}</p>
              </motion.div>
            )}
            {project.designRationale && (
              <motion.div className="flex flex-col gap-3" {...fadeUp(0.08)}>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">// Design Rationale</span>
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
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">// Color Palette</span>
            <div className="flex gap-3 mt-4 flex-wrap">
              {project.colorPalette.map((color) => (
                <div key={color} className="flex flex-col items-center gap-2">
                  <div className="h-14 w-14 rounded-xl border border-border shadow-sm" style={{ backgroundColor: color }} />
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
