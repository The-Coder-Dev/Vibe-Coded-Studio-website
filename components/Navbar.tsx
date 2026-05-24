'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const menuItems = [
  { title: 'About',    href: '/about', id: 1 },
  { title: 'Projects', href: '/projects', id: 2 },
  { title: 'Contact',  href: '/contact', id: 4 },
]

/* ── Hamburger / X icon ── */
const MenuIcon = ({ open }: { open: boolean }) => (
  <div className="relative w-5 h-4 flex flex-col justify-between">
    <motion.span
      className="block h-[1.5px] w-full bg-white rounded-full origin-center"
      animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    />
    <motion.span
      className="block h-[1.5px] w-full bg-white rounded-full"
      animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span
      className="block h-[1.5px] w-full bg-white rounded-full origin-center"
      animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    />
  </div>
)

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full px-4 pt-4 fixed z-50">
      <motion.nav
        className="w-full mx-auto max-w-4xl border border-white/10 bg-foreground/75 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg"
      >
        {/* ── top bar — always visible ── */}
        <div className="flex items-center justify-between px-4 py-3.5">
          {/* Logo */}
          <Link href="/" className="text-base font-semibold mt-1 text-white">
           <Image 
             src={"/logo.png"}
             alt="Logo"
             width={55}
             height={50}
             priority
           />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white/80 text-sm hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-destructive text-secondary px-3.5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start a Project
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>

        {/* ── Mobile menu — expands the navbar pill ── */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="px-4 pb-5 pt-1 flex flex-col gap-1 border-t border-white/8">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{
                      duration: 0.3,
                      delay: open ? i * 0.06 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-white/80 text-sm py-2.5 px-2 rounded-lg hover:bg-white/8 hover:text-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.3, delay: open ? menuItems.length * 0.06 : 0 }}
                  className="mt-2"
                >
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center bg-destructive text-secondary px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}

export default Navbar
