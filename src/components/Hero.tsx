import React from 'react'
import { ArrowRight } from 'lucide-react'
import Container from './layout/Container';

const Hero = () => {
    return (
        <header className="relative bg-white overflow-hidden">
            <Container>
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-8xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className='flex mx-auto mt-10'>
                        <div className='"sm:text-center lg:text-left"'>
                            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl '>
                                <span className='block'>Onboarding the</span>
                                <span className='block text-indigo-600 mt-3'>Next-Gen Onchain</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Empowering high school students with the knowledge and skils they need to understand  and leverage blockchain technology for the future.</p>

                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">

                                <a
                                    href="#programs"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                                <a
                                    href="#about"
                                    className="mt-3 sm:mt-0 sm:ml-3 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                                >
                                    Learn More
                                </a>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
            </Container>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
                    src="./src/assets/images/children-garden.jpg"
                    alt="children in the garden" />
            </div>
        </header>
    )
}

export default Hero