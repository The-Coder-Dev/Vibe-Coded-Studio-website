"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

/* ─── animation helper ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

/* ─── inline SVG icons ─── */
const IconBolt = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const IconScale = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21" />
    <path d="M3 9l9-7 9 7" />
    <path d="M3 15l9 7 9-7" />
  </svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const features = [
  {
    icon: <IconBolt />,
    title: "Streamlined Process",
    desc: "Our focused, step-by-step approach saves time and keeps projects moving smoothly.",
  },
  {
    icon: <IconScale />,
    title: "Scalable Design",
    desc: "We create systems that grow with your brand and stay effective over time.",
  },
  {
    icon: <IconClock />,
    title: "24/7 Dedicated Support",
    desc: "We're always here when you need us, ready to answer questions, provide updates.",
  },
];

const bulletPoints = [
  "Collaborative Approach",
  "Quick turnaround",
  "Clear Communication",
  "Consistent Quality",
  "Reliable Support",
];

const WhyUs = () => {
  return (
    <section className="w-full bg-background px-6 py-24">

      {/* ── Section header ── */}
      <div className="mx-auto mb-10 max-w-7xl flex flex-col gap-3">
        <motion.p
          className="text-xs uppercase tracking-widest text-muted-foreground"
          {...fadeUp(0)}
        >
          / Why us
        </motion.p>
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-foreground max-w-6xl"
          {...fadeUp(0.08)}
        >
          We help agencies and businesses create modern {" "}<span className="text-muted-foreground">digital experiences that actually stand out.</span>
        </motion.h2>
      </div>

      {/* ── 4-column bento grid ── */}
      <motion.div
        className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3  items-stretch"
        {...fadeUp(0.14)}
      >

        {/* ── COL 1 — Hero card ── */}
        <div className="flex flex-col rounded-2xl overflow-hidden border border-border bg-card  h-full">
          {/* dark image area — grows to fill */}
          <div className="relative flex-1 min-h-[180px] footer-bg p-5 flex flex-col justify-between">
            <h3 className="text-lg font-bold text-white leading-snug tracking-tight drop-shadow-sm">
              Purposeful Design<br />for Modern Brands.
            </h3>
            <span className="absolute bottom-4 left-5 text-xs text-white/60">© 2025</span>
            <Button className="absolute bottom-3 right-3 bg-card text-foreground text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1 hover:bg-secondary transition-colors">
              Get started <span>+</span>
            </Button>
          </div>
          {/* bullet list */}
          <ul className="px-5 py-4 flex flex-col gap-2 list-none m-0">
            {bulletPoints.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <span className="w-1.5 h-1.5 rounded-full border border-foreground flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── COL 2 — Testimonial card ── */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 h-full">
          {/* top: avatars + rating */}
          <div className="flex flex-col gap-2">
            <div className="flex">
              {[
              { initials: 'JK', color: '#4A7FC1' },
              { initials: 'MC', color: '#C07A4A' },
              { initials: 'JL', color: '#5A9E8A' },
            ].map(({ initials, color }, i) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full border-2 border-card flex items-center justify-center text-[11px] font-semibold text-white"
                  style={{ zIndex: 4 - i, marginLeft: i === 0 ? 0 : -10, backgroundColor: color }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-foreground">4.9/5 ★</span>
              <p className="text-sm text-muted-foreground">100+ Happy clients worldwide</p>
            </div>
          </div>

          {/* quote */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-sm text-foreground">★★★★★</div>
            <blockquote className="text-sm text-foreground leading-relaxed">
              &ldquo;Kanso understood our brand better than we did. Their ability to find the essential and express it simply is what sets them apart.&rdquo;
            </blockquote>
          </div>

          {/* author */}
          <div className="flex items-center gap-2 pt-3 border-t border-border">
            <div className="w-8 h-8 rounded-full bg-[oklch(0.72_0_0)] flex items-center justify-center text-[12px] font-semibold text-white flex-shrink-0">
              S
            </div>
            <div>
              <p className="text-[13px] font-semibold text-foreground">Sofia Ford</p>
              <p className="text-[11px] text-muted-foreground">Founder</p>
            </div>
          </div>
        </div>

        {/* ── COL 3 — Features card ── */}
        <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden h-full">
          {features.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className={`flex flex-col gap-1.5 px-5 py-5 flex-1 ${i < features.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="text-foreground flex">{icon}</span>
              <h4 className="text-sm font-bold text-foreground tracking-tight">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── COL 4 — Brand / atmospheric card ── */}
        <div className="relative rounded-2xl overflow-hidden h-full min-h-[280px] flex flex-col">
          {/* gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "url('/bg.webp')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              rotate: '-180deg',
            }}
          />
          {/* shimmer overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 60% 40%, rgba(200,200,200,0.15) 0%, transparent 70%)",
            }}
          />
          {/* content */}
          <div className="relative z-10 flex flex-col justify-between h-full p-5 flex-1">
            {/* <span className="text-[12px] font-semibold text-white/80 tracking-wide">Kanso®</span> */}
            <div className="mt-auto">
              <p className="text-xl font-bold text-white tracking-tight leading-snug">Design with intent.</p>
              <p className="text-[13px] text-white/55 mt-1">No excess, no fluff.</p>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default WhyUs;