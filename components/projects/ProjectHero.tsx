'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import type { Project, SanityImage } from '@/types/project'
import { urlFor } from '@/sanity/lib/image'

function resolveImage(img: string | SanityImage | null | undefined): string {
  if (!img) return ''
  if (typeof img === 'string') return img
  try {
    return urlFor(img).width(1600).height(700).fit('crop').auto('format').url()
  } catch {
    return ''
  }
}

interface ProjectHeroProps {
  project: Project
}


const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section className="w-full pt-8 pb-0">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft size={13} />
            Back to Projects
          </Link>
        </div>

        {/* Title + live link */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-none"
          >
            {project.title}
          </h1>

          {project.liveUrl && (
            <div>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/85 transition-colors duration-200"
              >
                See the site live
                <ExternalLink size={13} />
              </Link>
            </div>
          )}
        </div>

        {/* Short description */}
        <p
          className="text-sm text-muted-foreground max-w-md mb-8 leading-relaxed"

        >
          {project.shortDescription}
        </p>

        {/* Metadata row */}
        <div
          className="flex flex-wrap gap-0 mb-8 border-y border-border divide-x divide-border"
        >
          {/* Category — from Sanity categories field */}
          <div className="flex flex-col gap-1.5 px-6 py-4 first:pl-0">
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">// CATEGORY</span>
            <div className="flex flex-wrap gap-1.5">
              {(project.services?.length > 0 ? project.services : [project.category]).map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center rounded-full border border-border bg-card px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Tools — technologies only */}
          {project.technologies?.length > 0 && (
            <div className="flex flex-col gap-1.5 px-6 py-4">
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">// TOOLS</span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-border bg-card px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Year */}
          <div className="flex flex-col gap-0.5 px-6 py-4 last:pr-0">
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">// YEAR</span>
            <span className="text-sm font-semibold text-foreground">{project.year}</span>
          </div>
        </div>

        {/* Hero image */}
        {(() => {
          const heroSrc = resolveImage(project.featuredImage)
          return heroSrc ? (
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: '16/7' }}
            >
              <Image
                src={heroSrc}
                alt={project.title}
                fill
                priority
                unoptimized={project._sanity === true}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ) : null
        })()}
      </div>
    </section>
  )
}

export default ProjectHero
