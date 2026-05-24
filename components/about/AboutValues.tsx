'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
})

const values = [
  {
    number: '01',
    title: 'Intentional',
    description:
      'Every decision we make — from colour to copy — has a clear reason. We strip away noise until only the essential remains.',
  },
  {
    number: '02',
    title: 'Reliable',
    description:
      "Deadlines aren't suggestions. We deliver what we promise, when we promise it, with quality that holds up under scrutiny.",
  },
  {
    number: '03',
    title: 'Collaborative',
    description:
      "Your goals are our goals. We act as an embedded extension of your team — not a vendor, a partner. Your wins are our wins.",
  },
  {
    number: '04',
    title: 'Scalable',
    description:
      'We build systems, not one-offs. The work we ship today is designed to grow with you for years — not just look good for a week.',
  },
  {
    number: '05',
    title: 'Swift',
    description:
      'Speed without sacrifice. Our streamlined process cuts the back-and-forth and gets polished work into your hands fast.',
  },
  {
    number: '06',
    title: 'Transparent',
    description:
      'Clear communication, honest timelines, no hidden costs. You always know where your project stands.',
  },
]

const AboutValues = () => {
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
              // OUR VALUES //
            </motion.span>
            <motion.h2
              {...fadeUp(0.08)}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-none tracking-tight text-foreground"
            >
              What We Stand For.
            </motion.h2>
          </div>
          <motion.p
            {...fadeUp(0.14)}
            className="text-sm text-muted-foreground max-w-[260px] sm:text-right leading-relaxed"
          >
            The principles that guide every brief, every pixel, and every
            conversation we have.
          </motion.p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {values.map(({ number, title, description }, i) => (
            <motion.div
              key={number}
              {...fadeUp(0.05 * i + 0.1)}
              className="group flex flex-col gap-6 bg-background p-8 hover:bg-card transition-colors duration-300"
            >
              {/* Number */}
              <span className="text-[11px] font-semibold text-muted-foreground/50 tracking-widest uppercase">
                {number}
              </span>

              {/* Divider */}
              <div className="h-px w-8 bg-[oklch(0.6501_0.2239_35.76)] group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground tracking-tight leading-tight">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AboutValues
