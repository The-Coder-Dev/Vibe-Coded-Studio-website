import Image from 'next/image'
import Link from 'next/link'
import DotField from '../DotField'
import { Badge } from '../ui/badge'
import { WandSparkles } from 'lucide-react'
import { Button } from '../ui/button'


const Hero = () => {
    return (
        <section className='relative w-full min-h-screen overflow-hidden bg-transparent'>
            <div className='absolute inset-0 pointer-events-none' >
                <DotField
                    dotRadius={2.2}
                    dotSpacing={12}
                    bulgeStrength={200}
                    glowRadius={10}
                    sparkle
                    waveAmplitude={0}
                    cursorRadius={100}
                    cursorForce={0}
                    bulgeOnly={false}
                    gradientFrom="#f7f4eb"
                    gradientTo="#f27c38"
                />
            </div>

            <div className='relative mx-auto w-full max-w-7xl px-6 pt-36 pb-16 sm:px-8 sm:pb-20 lg:px-10'>
                <div className='flex flex-col items-center gap-16 '>
                    <div className='mx-auto w-full max-w-7xl text-center mt-10 sm:mt-14 lg:mt-16'>
                        <Badge className='mx-auto mb-10 inline-flex items-center gap-2 rounded-full border-destructive bg-destructive/60 px-4 py-3 text-background shadow-sm sm:mx-0' variant="outline">
                            <WandSparkles color='white' size={18} />
                            <span className='text-sm font-light'>Agencies & Modern Brands</span>
                        </Badge>
                        <h1 className='text-4xl font-bold uppercase text-foreground sm:text-5xl lg:text-6xl'>Your Agency&apos;s Backend Team</h1>
                        <p className='mt-2 text-base leading-8  sm:text-lg sm:leading-9'>White-label websites, creative design, and digital support for fast-moving agencies.</p>

                        <Button asChild size={"lg"} className='mt-6 text-sm px-4 py-3 rounded-xl'>
                            <Link href="/" className=''>Get Started</Link>
                        </Button>
                    </div>

                    <div className="bg-destructive/10 ring-1 ring-destructive/30 backdrop-blur-2xl p-0.3 rounded-4xl " >
                        <div className='relative mx-auto w-full max-w-8xl bg-destructive/5 ring ring-destructive/30 rounded-3xl p-3'>
                            <Image
                                src={'/dashboard.webp'}
                                alt='dashboard'
                                width={1716}
                                height={917}
                                className='h-auto w-full rounded-3xl object-cover'
                                priority
                            />


                        </div>
                    </div>

                    <p className='text-background px-4 py-1.5 rounded-xl text-sm w-fit h-fit bg-primary/30 ring-2 ring-primary/60'>Trusted by agencies, founders, creators, and growing brands.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero