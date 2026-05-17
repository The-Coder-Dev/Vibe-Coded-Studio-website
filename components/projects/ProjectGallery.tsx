'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProjectGalleryProps {
  images: string[]
  title: string
}

const ProjectGallery = ({ images, title }: ProjectGalleryProps) => {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % images.length))

  if (!images || images.length === 0) return null

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-10">

        {/* Masonry 2-column grid */}
        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative w-full overflow-hidden rounded-2xl block cursor-zoom-in"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full" style={{ aspectRatio: i % 3 === 0 ? '16/10' : '4/3' }}>
                <Image
                  src={src}
                  alt={`${title} gallery image ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={18} className="text-white" />
            </button>

            {/* Counter */}
            <span className="absolute top-7 left-1/2 -translate-x-1/2 text-xs font-medium text-white/50 tabular-nums">
              {lightbox + 1} / {images.length}
            </span>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              className="relative w-full max-w-5xl mx-16 rounded-xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox]}
                alt={`${title} — ${lightbox + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectGallery
