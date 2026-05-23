'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    rating: 4.9,
    quote:
      'Proactive, precise, and easy to work with—no hand-holding needed, just smooth collaboration from start to finish.',
    name: 'Jared Kim',

  },
  {
    rating: 5.0,
    quote:
      'Felt like an embedded team with zero friction; communication was clear, and revisions landed perfectly on the first go.',
    name: 'Maya Collins',

  },
  {
    rating: 4.9,
    quote:
      'The quality was unmatched. We submitted our request on Monday and had polished designs by Wednesday.',
    name: 'Jesse Leigh',

  },
  {
    rating: 4.9,
    quote:
      "We've tried other design subscriptions—none compare. Professional, reliable, and seriously creative.",
    name: 'Benjamin Daul',
  },
]

const AVATAR_COLORS = ['#f27c38', '#4A7FC1', '#5A9E8A', '#C07A4A', '#3A5A7C']
const AVATAR_INITIALS = ['SR', 'JK', 'JL', 'MC', 'BD']

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
})

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */

const Testimonials = () => {
  return (
    <section className="w-full py-20 sm:py-28">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-none tracking-tight text-foreground"
            {...fadeUp(0)}
          >
            Success Stories.
          </motion.h2>
          <motion.p
            className="text-sm text-muted-foreground max-w-[260px] sm:text-right leading-relaxed"
            {...fadeUp(0.08)}
          >
            Discover how our white-label services help innovative agencies grow smarter and faster.
          </motion.p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Left — dark stat card */}
          <motion.div
            className="bg-foreground rounded-2xl p-8 flex flex-col justify-between min-h-[400px] lg:min-h-auto"
            {...fadeUp(0.1)}
          >
            {/* Top: rating + blurb */}
            <div className="flex items-start justify-between gap-4">
              <span className="text-5xl font-bold text-background leading-none">4.9/5</span>
              <p className="text-sm text-background/55 max-w-[150px] leading-relaxed">
                We&apos;ve delivered 100+ projects that drive real results.
              </p>
            </div>

            {/* Bottom: avatars, stars, trust copy */}
            <div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-[#f27c38] text-[#f27c38]" />
                ))}
              </div>

              <p className="text-background font-semibold text-sm">Trusted by 100+ businesses</p>
              <p className="text-background/40 text-[11px] uppercase tracking-widest mt-1 font-medium">
                They hit their targets — you&apos;re next.
              </p>
            </div>
          </motion.div>

          {/* Right — 2×2 testimonial cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="bg-muted/30 border border-border/60 rounded-2xl p-6 flex flex-col justify-between gap-6"
                {...fadeUp(0.1 + i * 0.07)}
              >
                {/* Rating pill */}
                <div>
                  <div className="inline-flex items-center gap-1.5 mb-4">
                    <span className="text-[13px] font-semibold text-foreground tabular-nums">
                      {t.rating.toFixed(1)}
                    </span>
                    <Star size={12} className="fill-[#f27c38] text-[#f27c38]" />
                    <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
                      Rating
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground/85 text-[15px] leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-none mb-1">{t.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
