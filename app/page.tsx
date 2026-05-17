import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WhyUs from '@/components/sections/WhyUs'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import SelectedWork from '@/components/sections/SelectedWork'
import { getFeaturedProjects } from '@/lib/projects'

const page = async () => {
  const featuredProjects = await getFeaturedProjects()

  return (
    <main className='min-h-screen w-full '>
      <Hero />
      <WhyUs />
      <SelectedWork projects={featuredProjects} />
      {/* <About /> */}
      <Services />
      <Testimonials />
    </main>
  )
}

export default page