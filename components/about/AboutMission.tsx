'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

/* ── Word-by-word scroll animation (reuses About.tsx pattern) ── */
const SENTENCE =
  'We believe great design is never decoration — it is the product itself. Every pixel we place is intentional, every interaction considered.'

const WORDS = SENTENCE.split(' ')

function buildRanges(words: string[]) {
  const step = 1 / words.length
  return words.map((_, i) => ({
    start: i * step,
    // end = next word's start, so each word finishes animating before the next begins
    // For the last word, end at exactly 1 — but the scroll offset below gives it room
    end: Math.min((i + 1) * step, 1),
  }))
}

const ranges = buildRanges(WORDS)

function AnimatedWord({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: { start: number; end: number }
}) {
  const opacity = useTransform(progress, [range.start, range.end], [0.12, 1])
  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em] will-change-[opacity]"
    >
      {word}
    </motion.span>
  )
}

/* ── Stat card ── */
const stats = [
  { value: '100+', label: 'Projects delivered' },
  { value: '4.9', label: 'Average client rating' },
  { value: '14d', label: 'Avg. delivery time' },
  { value: '3yr', label: 'Industry experience' },
]

const AboutMission = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0%', 'end 60%'],
  })

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-background">
      {/* Sticky scroll-driven text */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-foreground px-6 sm:px-10 lg:px-16">
        {/* Faint background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: "url('/footer.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-12 text-center">
          {/* Animated sentence */}
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-background">
            {WORDS.map((word, i) => (
              <AnimatedWord
                key={i}
                word={word}
                progress={scrollYProgress}
                range={ranges[i]}
              />
            ))}
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-background/10 rounded-2xl overflow-hidden"
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 px-6 py-5 bg-background/5 hover:bg-background/10 transition-colors"
              >
                <span className="text-2xl sm:text-3xl font-bold text-background leading-none">
                  {value}
                </span>
                <span className="text-[11px] text-background/40 uppercase tracking-widest font-medium text-center">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutMission
