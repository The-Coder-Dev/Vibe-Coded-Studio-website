'use client'

import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

export default function SmoothScroll({ children }: { children?: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      // ── Feel ──────────────────────────────────────────────────────────────
      // lerp: how fast the scroll catches up to the target.
      // Higher = snappier / lighter.  Lower = more inertia / heavier.
      // 0.12 hits the sweet spot between smoothness and lightness.
      lerp: 0.12,

      // wheelMultiplier: distance scrolled per wheel tick.
      // < 1.0 shortens each tick → removes the "heavy/sluggish" sensation.
      wheelMultiplier: 0.8,

      // smoothWheel: smooth mouse-wheel & trackpad
      smoothWheel: true,

      // Prevent the rubber-band overscroll that causes jank on scroll-up
      overscroll: false,

      // ── Performance ───────────────────────────────────────────────────────
      // Use the document as the scroll container (native scroll position).
      // Avoids transform-based scroll which can conflict with canvas layers.
      eventsTarget: window,
    })

    lenisRef.current = lenis

    // Drive Lenis inside requestAnimationFrame — zero extra dependencies
    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
