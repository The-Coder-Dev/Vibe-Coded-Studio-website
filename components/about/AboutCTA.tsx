'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const AboutCTA = () => {
  return (
    <section className="w-full p-4 sm:p-5 pb-6">
      <motion.div
        {...fadeUp(0)}
        className="relative mx-auto w-full rounded-2xl overflow-hidden bg-foreground min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-center text-center gap-8 px-8 py-20"
      >
        {/* Faint background image */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage: "url('/footer.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Orange ambient blob */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none blur-3xl opacity-20"
          style={{
            background:
              'radial-gradient(ellipse at center, oklch(0.6501 0.2239 35.76), transparent 70%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
          <motion.span
            {...fadeUp(0.04)}
            className="text-[11px] uppercase tracking-widest text-background/35 font-medium"
          >
            // READY TO START //
          </motion.span>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-tight text-background"
          >
            Let&apos;s build something great together.
          </motion.h2>

          <motion.p
            {...fadeUp(0.16)}
            className="text-base text-background/50 max-w-md leading-relaxed"
          >
            Whether you&apos;re an agency looking for a reliable creative
            partner, or a brand ready for a new chapter — we&apos;re here.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.22)}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="mailto:hello@ojas.studio"
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.6501_0.2239_35.76)] text-white text-sm font-semibold px-6 py-3 hover:opacity-90 transition-opacity"
            >
              Get in touch
              <ArrowUpRight size={15} />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-background/60 border-b border-background/20 pb-0.5 hover:text-background hover:border-background transition-all"
            >
              Browse our work
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutCTA
