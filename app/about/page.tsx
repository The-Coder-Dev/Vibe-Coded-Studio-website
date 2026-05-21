import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutMission from '@/components/about/AboutMission'
import AboutValues from '@/components/about/AboutValues'
import AboutTeam from '@/components/about/AboutTeam'
import AboutCTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About — Ojas Studio',
  description:
    'We are a white-label design studio partnering with agencies and modern brands to craft digital experiences that perform.',
}

const AboutPage = () => {
  return (
    <main className="min-h-screen w-full">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutCTA />
    </main>
  )
}

export default AboutPage
