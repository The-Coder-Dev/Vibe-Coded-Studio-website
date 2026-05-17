import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

/* ─── data ─── */
const quickLinks = [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/' },
    { label: 'Services', href: '/' },
    { label: 'Features', href: '/' },
    { label: 'Contact', href: '/' },
]

const services = [
    { label: 'Brand Identity', href: '/' },
    { label: 'Web Design', href: '/' },
    { label: 'UI / UX', href: '/' },
    { label: 'Motion & Video', href: '/' },
    { label: 'Consulting', href: '/' },
]

const socials = [
    { icon: "/assets/facebook.svg", label: 'Facebook', href: '/' },
    { icon: "/assets/instagram.svg", label: 'Instagram', href: '/' },
]

const Footer = () => {
    return (
        <section className="w-full p-4 sm:p-5 pb-6">
            <div className="mx-auto w-full relative bg-foreground rounded-2xl overflow-hidden">

                {/* ── Background image ── */}
                <Image
                    src="/footer.webp"
                    alt="Footer background"
                    fill
                    className="object-cover object-center opacity-10 pointer-events-none select-none"
                />

                {/* ── Content wrapper ── */}
                <div className="relative z-10 flex flex-col h-full">

                    {/* ── Hero row ── */}
                    <div className="px-6 sm:px-10 pt-10 pb-8 border-b border-background/10">
                        {/* Big wordmark */}
                        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold text-background leading-none tracking-tight">
                            OJAS STUDIO
                        </h1>

                        {/* tagline + CTA row */}
                        <div className="mt-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
                            <p className="text-sm sm:text-base text-background/60 max-w-md leading-relaxed">
                                Whether you&apos;re an agency or individual, we&apos;ve got the
                                perfect solution to bring your vision to life.
                            </p>
                        </div>
                    </div>

                    {/* ── Middle grid: contact + links ── */}
                    <div className="px-6 sm:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-background/10">

                        {/* Contact */}
                        <div className="flex flex-col gap-3 lg:col-span-2">
                            <p className="text-[11px] uppercase tracking-widest text-background/40 font-medium">
                                Get in touch
                            </p>
                            <a
                                href="mailto:hello@ojas.studio"
                                className="text-lg sm:text-2xl font-semibold text-background hover:text-background/70 transition-colors"
                            >
                                hello@ojas.studio
                            </a>
                            <a
                                href="tel:+918806524441"
                                className="text-base font-medium text-background/60 hover:text-background/90 transition-colors"
                            >
                                (+91) 88065 24441
                            </a>

                            {/* Social icons */}
                            <div className="flex items-center gap-3 mt-3">
                                {socials.map(({ icon: Icon, label, href }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="w-8 h-8 rounded-lg border border-background/15 flex items-center justify-center text-white transition-all  hover:opacity-60"
                                    >
                                        <Image src={Icon} className='filter invert' width={14} height={14} alt={label} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[11px] uppercase tracking-widest text-background/40 font-medium">
                                Quick Links
                            </p>
                            <ul className="flex flex-col gap-2">
                                {quickLinks.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="text-sm text-background/60 hover:text-background transition-colors"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-3">
                            <p className="text-[11px] uppercase tracking-widest text-background/40 font-medium">
                                Services
                            </p>
                            <ul className="flex flex-col gap-2">
                                {services.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            className="text-sm text-background/60 hover:text-background transition-colors"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* ── Bottom bar: copyright + made by ── */}
                    <div className="px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <p className="text-[12px] text-background/35">
                            © {new Date().getFullYear()} Ojas Studio. All rights reserved.
                        </p>
                        <p className="text-[12px] text-background/35">
                            Made with ♥ by{' '}
                            <Link
                                href="/"
                                className="text-background/55 hover:text-background transition-colors underline underline-offset-2"
                            >
                                Dev
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer