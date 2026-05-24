'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay },
})

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-foreground">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/footer.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
        }}
      />

      {/* Subtle warm gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 80%, oklch(0.6501 0.2239 35.76 / 0.12) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-6 sm:px-8 lg:px-10 pb-20 pt-44">
        {/* Label */}
        <motion.span
          {...fadeUp(0)}
          className="block text-xs uppercase tracking-widest text-background/40 font-medium mb-8"
        >
          // ABOUT US //
        </motion.span>

        {/* Big heading */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-5xl sm:text-7xl lg:text-[6rem] xl:text-[7.5rem] font-bold leading-none tracking-tight text-background mb-10"
        >
          We Design<br />
          <span className="text-[oklch(0.6501_0.2239_35.76)]">for Impact.</span>
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          {...fadeUp(0.18)}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 border-t border-background/10 pt-8"
        >
          <p className="text-base sm:text-lg text-background/55 max-w-md leading-relaxed">
            The Ojas Studio is a white-label creative partner for agencies and modern
            brands — delivering brand identity, web design, and no-code builds
            with precision and speed.
          </p>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-background border-b border-background/30 pb-0.5 hover:border-[oklch(0.6501_0.2239_35.76)] hover:text-[oklch(0.6501_0.2239_35.76)] transition-all self-start sm:self-auto"
          >
            See our work
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Scrolling marquee strip at very bottom */}
      <div className="relative z-10 border-t border-background/10 overflow-hidden py-4">
        <motion.div
          className="flex gap-12 whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-background/25 font-medium"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="shrink-0">
              Graphic Design &nbsp;·&nbsp; Web Design &nbsp;·&nbsp; No-Code &nbsp;·&nbsp; The Ojas Studio &nbsp;·&nbsp; Video editing &nbsp;·&nbsp;
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
