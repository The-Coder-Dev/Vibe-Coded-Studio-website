'use client'

import Link from 'next/link'
import DotField from '../DotField'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import CallBookButton from '../CallBookButton'
import { useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    // Raw motion values for the cursor position
    const rawX = useMotionValue(0)
    const rawY = useMotionValue(0)

    // Spring-smooth the cursor for a buttery follow effect
    const x = useSpring(rawX, { stiffness: 260, damping: 28, mass: 0.5 })
    const y = useSpring(rawY, { stiffness: 260, damping: 28, mass: 0.5 })

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = containerRef.current?.getBoundingClientRect()
        if (!rect) return
        rawX.set(e.clientX - rect.left)
        rawY.set(e.clientY - rect.top)
    }, [rawX, rawY])

    const handleVideoClick = () => {
        const video = videoRef.current
        if (!video) return
        if (isPlaying) {
            video.pause()
            setIsPlaying(false)
        } else {
            video.play()
            setIsPlaying(true)
        }
    }

    return (
        <section className='relative w-full min-h-screen overflow-hidden bg-transparent'>
            <div className='absolute inset-0 pointer-events-none'>
                <DotField
                    dotRadius={2.2}
                    dotSpacing={15}
                    sparkle
                    cursorRadius={10}
                    gradientFrom="#f7f4eb"
                    gradientTo="#f27c38"
                />
            </div>

            <div className='relative mx-auto w-full max-w-7xl px-6 pt-36 pb-16 sm:px-8 sm:pb-20 lg:px-10'>
                <div className='flex flex-col items-center gap-16'>
                    <div className='mx-auto w-full max-w-7xl flex items-center justify-center flex-col text-center mt-10 sm:mt-14 lg:mt-16'>
                        <Badge className='mx-auto mb-10 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-4 text-background shadow-sm sm:mx-0' variant="outline">
                            <span className='text-[13px] font-light'>Design • Web • Motion</span>
                        </Badge>
                        <h1 className='text-4xl font-bold uppercase text-foreground sm:text-5xl lg:text-6xl'>
                            Design, Web &amp; Motion <br />
                            — Done Right
                        </h1>
                        <p className='mt-2 max-w-2xl text-base leading-8 sm:text-lg sm:leading-9'>
                            We create simple, sharp, and reliable design, web, and motion work for agencies and brands who want things done right the first time.
                        </p>

                        <div className="mt-6 flex gap-5">
                            <Button asChild size={"lg"} className='text-sm px-4 py-3 rounded-xl'>
                                <Link href="/contact">Start a project</Link>
                            </Button>
                            <CallBookButton />
                        </div>
                    </div>

                    {/* ── Hero Video ── */}
                    <div
                        id="hero-video"
                        ref={containerRef}
                        className="relative bg-destructive/10 ring-1 ring-destructive/30 backdrop-blur-2xl p-0.5 rounded-4xl cursor-none select-none"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleVideoClick}
                    >
                        <div className='relative mx-auto w-full max-w-8xl bg-destructive/5 ring ring-destructive/30 rounded-3xl p-3'>
                            <video
                                ref={videoRef}
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                className="object-cover rounded-3xl"
                            >
                                <source
                                    src="https://ik.imagekit.io/o6wrut0fr/Studio%20video.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>

                        {/* ── Mouse-follow Cursor Button ── */}
                        <motion.div
                            className="pointer-events-none absolute top-0 left-0 z-20"
                            style={{ x, y }}
                        >
                            {/* Outer ring pulse when playing */}
                            <AnimatePresence>
                                {isPlaying && (
                                    <motion.div
                                        key="ring"
                                        className="absolute inset-0 rounded-full border border-white/30"
                                        style={{ x: '-50%', y: '-50%' }}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1.45, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Main pill */}
                            <motion.div
                                className="flex flex-col items-center justify-center rounded-full bg-foreground/90 backdrop-blur-md shadow-2xl border border-white/10 overflow-hidden"
                                style={{ x: '-50%', y: '-50%' }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isHovered
                                    ? { scale: 1, opacity: 1 }
                                    : { scale: 0.4, opacity: 0 }
                                }
                                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                            >
                                <div className="w-28 h-28 flex flex-col items-center justify-center gap-1">
                                    {/* Icon swap with AnimatePresence */}
                                    <AnimatePresence mode="wait" initial={false}>
                                        {isPlaying ? (
                                            <motion.div
                                                key="pause"
                                                initial={{ scale: 0.4, opacity: 0, rotate: -15 }}
                                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                                exit={{ scale: 0.4, opacity: 0, rotate: 15 }}
                                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                            >
                                                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-background">
                                                    <rect x="5" y="4" width="4" height="16" rx="1.5" />
                                                    <rect x="15" y="4" width="4" height="16" rx="1.5" />
                                                </svg>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="play"
                                                initial={{ scale: 0.4, opacity: 0, rotate: 15 }}
                                                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                                exit={{ scale: 0.4, opacity: 0, rotate: -15 }}
                                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                            >
                                                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-background ml-0.5">
                                                    <polygon points="5,3 20,12 5,21" />
                                                </svg>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Label */}
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.span
                                            key={isPlaying ? 'pause-label' : 'play-label'}
                                            className="text-[9px] font-semibold tracking-[0.18em] uppercase text-background/70"
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.18 }}
                                        >
                                            {isPlaying ? 'Pause' : 'Play Intro'}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <p className='text-foreground rounded-xl text-sm'>
                        Trusted by agencies, founders, creators, and growing brands.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero