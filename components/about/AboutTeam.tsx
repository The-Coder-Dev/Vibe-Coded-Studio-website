'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const team = [
  {
    initials: 'OJ',
    name: 'Ojas',
    role: 'Founder & Creative Director',
    color: '#f27c38',
    description:
      'Leads brand strategy and visual direction. Obsessed with purposeful design that earns trust.',
    skills: ['Brand Strategy', 'Art Direction', 'Typography'],
  },
  {
    initials: 'AR',
    name: 'Aryan',
    role: 'Lead Web Developer',
    color: '#4A7FC1',
    description:
      'Builds fast, accessible, pixel-perfect sites. Turns complex interactions into seamless UX.',
    skills: ['Next.js', 'Framer', 'Design Systems'],
  },
  {
    initials: 'PR',
    name: 'Priya',
    role: 'UI / UX Designer',
    color: '#5A9E8A',
    description:
      'Champions the user at every step. Crafts flows that feel intuitive and interfaces that delight.',
    skills: ['Figma', 'Prototyping', 'Motion Design'],
  },
  {
    initials: 'KD',
    name: 'Karan',
    role: 'Brand Designer',
    color: '#C07A4A',
    description:
      'Creates visual identities that last. Knows when to be bold and when restraint is the statement.',
    skills: ['Logo Design', 'Color Systems', 'Illustration'],
  },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map(({ initials, name, role, color, description, skills }, i) => (
            <motion.div
              key={name}
              {...fadeUp(0.07 * i + 0.1)}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Avatar area */}
              <div
                className="relative flex items-center justify-center py-12 overflow-hidden"
                style={{ backgroundColor: `${color}18` }}
              >
                {/* Ambient glow */}
                <div
                  className="absolute inset-0 opacity-30 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
                  }}
                />
                {/* Avatar circle */}
                <div
                  className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg ring-4 ring-background"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
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
