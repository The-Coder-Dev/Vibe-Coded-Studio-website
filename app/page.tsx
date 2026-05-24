import Hero from '@/components/sections/Hero'
import WhyUs from '@/components/sections/WhyUs'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import SelectedWork from '@/components/sections/SelectedWork'
import CTA from '@/components/CTA'
import { getFeaturedProjects } from '@/lib/projects'

const page = async () => {
  const featuredProjects = await getFeaturedProjects()

  return (
    <main className='min-h-screen w-full '>
      <Hero />
      <WhyUs />
      <Services />
      <SelectedWork projects={featuredProjects} />
      <Testimonials />
      <CTA />
    </main>
  )
}

export default page