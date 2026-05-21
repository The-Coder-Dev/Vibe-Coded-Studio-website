import Image from 'next/image'
import Link from 'next/link'
import DotField from '../DotField'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import CallBookButton from '../CallBookButton'



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
                    <div className='mx-auto w-full max-w-7xl flex items-center justify-center flex-col text-center mt-10 sm:mt-14 lg:mt-16'>
                        <Badge className='mx-auto mb-10 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-4 text-background shadow-sm sm:mx-0' variant="outline">
                            <span className='text-[13px] font-light'>Design • Web • Motion</span>
                        </Badge>
                        <h1 className='text-4xl font-bold uppercase text-foreground sm:text-5xl lg:text-6xl'>
                            Design, Web & Motion <br />
                            — Done Right</h1>
                        <p className='mt-2 max-w-2xl text-base leading-8  sm:text-lg sm:leading-9'>We create simple, sharp, and reliable design, web, and motion work for agencies and brands who want things done right the first time.</p>

                        <div className="mt-6 flex gap-5">
                            <Button asChild size={"lg"} className='text-sm px-4 py-3 rounded-xl'>
                                <Link href="/contact" className=''>Start a project</Link>
                            </Button>
                            <CallBookButton />
                        </div>
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