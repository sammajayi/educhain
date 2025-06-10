import { ArrowRight } from 'lucide-react'
import Container from './layout/Container';

const Hero = () => {
    return (
        <header className="relative bg-gradient-to-br from-white via-indigo-50 to-indigo-100 min-h-[70vh] flex items-center py-16 px-4 sm:px-8 md:px-16 mt-20">
            <Container>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 leading-tight">
                            <span className="block">Onboarding the</span>
                            <span className="block text-indigo-600 mt-2">Next-Gen Onchain</span>
                        </h1>
                        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-xl">
                            Empowering high school students with the knowledge and skills they need to understand and leverage blockchain technology for the future.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3 w-full">
                            <a
                                href="#mission"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transition"
                            >
                               Learn More
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            {/* <a
                                href="#about"
                                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition"
                            >
                                Learn More
                            </a> */}
                        </div>
                    </div>
                    {/* Image */}
                    <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                        <img
                            className="max-h-64 sm:max-h-80 w-full max-w-xs sm:max-w-md rounded-3xl shadow-2xl object-cover transition"
                            src="/images/children-garden.jpg"
                            alt="children in the garden"
                        />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Hero