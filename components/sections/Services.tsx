"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ─── animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

/* ─── inline folder icon (matches reference) ─── */
const FolderIcon = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="44" height="44" rx="10" fill="#1a1a1a" />
    <path
      d="M10 16a2 2 0 012-2h6l2 2h12a2 2 0 012 2v12a2 2 0 01-2 2H12a2 2 0 01-2-2V16z"
      fill="#fff"
    />
    <path d="M10 20h24v10a2 2 0 01-2 2H12a2 2 0 01-2-2V20z" fill="#d4d4d4" />
  </svg>
);

/* ─── tag pill ─── */
const Tag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-[11px] font-medium text-foreground tracking-wide">
    <span className="w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
    {label}
  </span>
);

/* ─── data ─── */
const services = [
  {
    id: "brand",
    title: "Graphic Design",
    description:
      "We design visual content that communicates messages and ideas through typography, colors, and layout.",
    tags: ["Logo Design", "Social Media Post", "Brochure Design", "Banner Design"],
    image: "/service-brand.png",
    imageAlt: "Brand identity book mockup",
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "We design visually stunning, fast-loading websites that capture attention and drive results.",
    tags: ["NextJS", "WordPress", "E-commerce", "UI/UX", "Modern UI", "Landing Pages"],
    image: "/service-mobile.png",
    imageAlt: "Web and mobile design mockup",
  },
  {
    id: "video",
    title: "Video Editing",
    description:
      "We create engaging video content that tells stories and captivates audiences. ",
    tags: ["Reels", "Shorts", "Motion Design"],
    image: "/service-nocode.png",
    imageAlt: "MacBook no-code website mockup",
  },
];

/* ─── component ─── */
const Services = () => {
  return (
    <section className="w-full bg-background px-6 py-24" id="services">
      {/* ── Header row ── */}
      <div className="mx-auto mb-12 max-w-7xl flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div className="flex flex-col gap-3">
          {/* pill label */}
          <motion.div {...fadeUp(0)}>
            <span className="text-foreground text-sm">
              // SERVICES //
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-none"
            {...fadeUp(0.08)}
          >
            What We Do.
          </motion.h2>
        </div>

        <motion.p
          className="max-w-xs text-sm text-muted-foreground leading-relaxed sm:text-right"
          {...fadeUp(0.14)}
        >
          We combine strategy, speed, and skill to deliver exceptional design —
          every time.
        </motion.p>
      </div>

      {/* ── 3-column grid ── */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {services.map(({ id, title, description, tags, image, imageAlt }, i) => (
          <motion.div
            key={id}
            className="flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card"
            {...fadeUp(0.06 * i + 0.1)}
          >
            {/* ── info card (top) ── */}
            <div className="flex flex-col gap-5 p-6 flex-1">
              {/* folder icon */}
              <FolderIcon />

              {/* title + desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>

              {/* tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>

            {/* ── image card (bottom) ── */}
            <div className="relative w-full overflow-hidden rounded-b-2xl" style={{ aspectRatio: "4/3" }}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* subtle dots indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className={`block rounded-full transition-all duration-300 ${
                      dot === 1
                        ? "w-4 h-1.5 bg-white/80"
                        : "w-1.5 h-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
