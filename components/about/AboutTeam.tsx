'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
})

const team = [
  {
    initials: 'AS',
    name: 'Ashwani Sharma',
    role: 'Founder & Graphic Designer',
    color: '#f27c38',
    image: '/ash.webp',
    description:
      'Leads brand strategy and visual direction. Obsessed with purposeful design that earns trust.',
    skills: ['Logo Design', 'Social Media Post', 'Ad Creatives'],
  },
  {
    initials: 'DS',
    name: 'Dev Sharma',
    role: 'Lead Web Developer',
    color: '#4A7FC1',
    image: '/dev.webp',
    description:
      'Builds fast, accessible, pixel-perfect sites. Turns complex interactions into seamless UX.',
    skills: ['Next.js', 'WordPress'],
  },
  {
    initials: 'DO',
    name: 'Dolly',
    role: 'Video Editor',
    color: '#4A7FC1',
    image: '/dolly.webp',
    description:
      'She is a very good at video editing and she can edit any type of video. She is very good at creativity.',
    skills: ['Video Editing', 'Creativity', 'Editing'],
  },
  // {
  //   initials: 'PR',
  //   name: 'Pradyuman',
  //   role: 'Content Writer',
  //   color: '#f27c38',
  //   image: null,
  //   description:
  //     'He is the Best at copy writing and content writing. He is very good at communication and presentation skills.',
  //   skills: ['Copy Writing', 'Content Writing', 'Presentation Skills'],
  // },
]

const AboutTeam = () => {
  return (
    <section className="w-full bg-background py-24 px-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <motion.span
              {...fadeUp(0)}
              className="text-xs uppercase tracking-widest text-muted-foreground font-medium"
            >
              // THE TEAM //
            </motion.span>
            <motion.h2
              {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-none tracking-tight text-foreground"
            >
              People Behind It.
            </motion.h2>
          </div>
          <motion.p
            {...fadeUp(0.14)}
            className="text-sm text-muted-foreground max-w-[260px] sm:text-right leading-relaxed"
          >
            A small, senior team with zero juniors on your account — ever.
          </motion.p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map(({ initials, name, role, color, image, description, skills }, i) => (
            <motion.div
              key={name}
              {...fadeUp(0.07 * i + 0.1)}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Avatar area */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: `${color}18`, height: '620px' }}
              >
                {/* Ambient glow */}
                <div
                  className="absolute inset-0 opacity-20 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
                  }}
                />

                {image ? (
                  /* Real photo — fills the entire avatar area */
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  /* Fallback initials circle */
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg ring-4 ring-background"
                    style={{ backgroundColor: color }}
                  >
                    {initials}
                  </div>
                )}

                {/* Subtle bottom gradient so text is readable on hover */}
                {image && (
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                <div>
                  <h3 className="text-base font-bold text-foreground tracking-tight leading-tight">
                    {name}
                  </h3>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium mt-0.5">
                    {role}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {description}
                </p>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium text-foreground/70 tracking-wide"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: color }}
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutTeam
