import type { Project } from '@/types/project'

/* ─────────────────────────────────────────────
   Local Project Data
   Replace data fetching in /lib/projects.ts
   when migrating to Payload CMS
───────────────────────────────────────────── */

export const projects: Project[] = [
  // ── Website Case Studies ──────────────────────────────────────────────────
  {
    title: 'Stackwise',
    slug: 'stackwise',
    category: 'Health & Wellness',
    shortDescription: 'A clean SaaS platform for wellness teams to manage client progress and automate reporting.',
    fullDescription:
      'Stackwise needed a digital product that matched their premium positioning in the B2B wellness space. We designed and built a fully responsive SaaS dashboard with a custom onboarding flow, data visualization components, and a marketing site — all shipped in under four weeks.',
    featured: true,
    projectType: 'website-case-study',
    year: '2024',
    client: 'Stackwise Inc.',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80',
    ],
    services: ['UI/UX Design', 'Web Development', 'Design System', 'Framer Motion'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveUrl: 'https://stackwise.io',
    challenge:
      'Stackwise had a fragmented product with inconsistent UI across mobile and desktop, making it hard for clients to navigate reports and take action.',
    solution:
      'We rebuilt the core dashboard around a strict design system — unified typography, consistent spacing tokens, and a coherent data visualization library. A guided onboarding flow reduced time-to-value from 14 minutes to under 3.',
    outcome:
      'Delivered a conversion-focused platform with clear messaging, strategic layout, and polished visuals — tailored for growth. User activation improved by 38% within the first month after launch.',
    designProcess: ['Discovery & Research', 'Information Architecture', 'Wireframing', 'High-Fidelity Design', 'Development', 'QA & Launch'],
  },
  {
    title: 'Aven',
    slug: 'aven',
    category: 'Finance',
    shortDescription: 'Bold website for a fintech startup with personality and edge.',
    fullDescription:
      'Aven needed a professional digital presence to reflect their expertise in AI consulting and attract B2B clients with confidence. Their existing online presence did not clearly communicate their value proposition, lacked authority, and was not optimized to convert qualified leads into discovery calls.',
    featured: true,
    projectType: 'website-case-study',
    year: '2024',
    client: 'Aven Financial',
    featuredImage: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80',
      'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=1200&q=80',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=80',
    ],
    services: ['Brand Strategy', 'Web Design', 'Copywriting', 'Framer Dev'],
    technologies: ['Framer', 'Figma', 'Lottie', 'Webflow'],
    liveUrl: 'https://aven.finance',
    challenge:
      'Aven lacked a cohesive visual identity and their website failed to communicate trust and authority in a competitive fintech landscape.',
    solution:
      'We designed a high-contrast, editorial brand presence — dark backgrounds, strong typography, and purposeful motion. Every page element was crafted to build trust and drive action.',
    outcome:
      'We delivered a conversion-focused website with clear messaging, strategic layout, and polished visuals, tailored for growth. Qualified leads from the site increased by 62% in the first six weeks.',
    designProcess: ['Brand Audit', 'Visual Identity', 'Wireframing', 'UI Design', 'Framer Development', 'Launch'],
  },
  {
    title: 'Veldt Commerce',
    slug: 'veldt-commerce',
    category: 'E-commerce',
    shortDescription: 'Minimal e-commerce experience for a premium outdoor lifestyle brand.',
    fullDescription:
      'Veldt approached us to design and build a custom Shopify storefront that matched their premium outdoor brand identity. The project involved designing a full product discovery and checkout experience optimized for mobile.',
    featured: false,
    projectType: 'website-case-study',
    year: '2023',
    client: 'Veldt Outdoor Co.',
    featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    ],
    services: ['E-commerce Design', 'Shopify Development', 'UX Research', 'Photography Direction'],
    technologies: ['Shopify', 'Liquid', 'Figma', 'Klaviyo'],
    liveUrl: 'https://veldt.co',
    challenge: 'High cart abandonment rates and a generic storefront that didn\'t reflect the premium nature of the products.',
    solution: 'A fully custom Shopify theme with editorial product pages, immersive photography, and a streamlined checkout flow.',
    outcome: 'Conversion rate improved by 44%. Average order value increased by $38 within the first 90 days post-launch.',
    designProcess: ['UX Audit', 'Customer Research', 'Wireframing', 'Visual Design', 'Shopify Development', 'Launch'],
  },

  // ── Graphic Design ────────────────────────────────────────────────────────
  {
    title: 'Surge Identity',
    slug: 'surge-identity',
    category: 'Brand Identity',
    shortDescription: 'Full brand identity system for a performance marketing agency.',
    fullDescription:
      'Surge needed a visual identity that embodied speed, confidence, and results. We designed a complete brand system — logo, color palette, typography, and a comprehensive brand guidelines document used across all touchpoints.',
    featured: true,
    projectType: 'graphic-design',
    year: '2024',
    client: 'Surge Agency',
    featuredImage: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80',
      'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=1200&q=80',
      'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
    ],
    services: ['Brand Identity', 'Logo Design', 'Color Systems', 'Brand Guidelines'],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    creativeDirection:
      'The brand direction was anchored in the concept of "controlled velocity" — sharp angles, bold contrast, and a limited palette of black, white, and an energetic accent orange. Every mark communicates forward motion without noise.',
    designRationale:
      'We chose a geometric sans-serif wordmark to convey precision and modernity. The custom icon mark — a stylized upward arrow abstracted into a monogram — works as a standalone app icon and favicon.',
    colorPalette: ['#0A0A0A', '#F5F5F5', '#F27C38', '#1A1A1A'],
  },
  {
    title: 'Nexus Campaign',
    slug: 'nexus-campaign',
    category: 'Social Media',
    shortDescription: 'High-impact social media ad creatives for a B2B SaaS product launch.',
    fullDescription:
      'Nexus launched a new analytics product and needed a suite of scroll-stopping creatives for LinkedIn and Instagram. We designed 40+ assets — static ads, story formats, carousel posts, and animated banners — all within a cohesive visual system.',
    featured: true,
    projectType: 'graphic-design',
    year: '2024',
    client: 'Nexus Analytics',
    featuredImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1616469829941-c7200edec809?w=1200&q=80',
      'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80',
      'https://images.unsplash.com/photo-1611162616305-c69b3396be57?w=1200&q=80',
      'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=1200&q=80',
      'https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1200&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&q=80',
    ],
    services: ['Social Media Design', 'Ad Creatives', 'Motion Graphics', 'Campaign Strategy'],
    technologies: ['Figma', 'After Effects', 'Canva Pro', 'Adobe Express'],
    creativeDirection:
      'We developed a "Data in Motion" visual language — abstract data visualizations as graphic elements, gradient-lit interfaces on dark backgrounds, and bold typographic lockups that communicate ROI at a glance.',
    designRationale:
      'Each creative was designed for the 1.5-second scroll stop. High contrast between background and foreground, motion blur effects to suggest speed, and direct copy placement ensure maximum impact across feed and story formats.',
    colorPalette: ['#0D0D0D', '#FFFFFF', '#6C63FF', '#00D4FF'],
  },
  {
    title: 'Bloom Print Series',
    slug: 'bloom-print-series',
    category: 'Print Design',
    shortDescription: 'Editorial print campaign for a sustainable lifestyle brand.',
    fullDescription:
      'Bloom needed a print campaign that communicated their commitment to slow living and sustainable design. The result was a 6-part editorial series featuring rich botanical photography, hand-rendered type, and natural texture overlays.',
    featured: false,
    projectType: 'graphic-design',
    year: '2023',
    client: 'Bloom Lifestyle Co.',
    featuredImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1400&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&q=80',
      'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1200&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=1200&q=80',
    ],
    services: ['Print Design', 'Art Direction', 'Typography', 'Campaign Design'],
    technologies: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    creativeDirection:
      'Inspired by 1970s Scandinavian design annuals, we used a warm neutral palette, generous white space, and organic typographic compositions to communicate unhurried quality.',
    designRationale:
      'Uncoated stock, tactile textures, and a restrained use of color reinforce Bloom\'s commitment to sustainability. The editorial grid allows photography to breathe while maintaining clear communication hierarchy.',
    colorPalette: ['#F5F0E8', '#2C2C2C', '#8B7355', '#A8B89A'],
  },
]
