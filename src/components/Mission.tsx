import React from 'react'
import { Target, Lightbulb, Heart } from 'lucide-react';
import Container from './layout/Container';


const objectives = [
    {
        title: "Our Mission",
        description: "To democratize blockchain education and empower the next generation of innovators by making blockchain technology accessible to high school students worldwide.",
        icon: Target,
    },
    {
        title: "Our Vision",
        description: "To create a world where every student has the opportunity to understand and harness the power of blockchain technology for positive social impact.",
        icon: Lightbulb
    },
    {
        title: "Our Values",
        description: "We believe in inclusive education, practical learning, and fostering a community of young blockchain enthusiasts who will shape the future.",
        icon: Heart
    },
]

const Mission = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50">
            <Container>

                <div className='m-10 p-10'>

                

                <div className='text-center'>
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Mission & Objectives
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Empowering the next generation through blockchain education
                    </p>
                </div>

                <div className='mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3'>
                    {objectives.map((objective, index) => (
                        <div>
                            <article key={index} className="text-center">
                                <div className="flex justify-center mb-6">
                                    <span className="inline-flex p-4 rounded-full bg-indigo-100 text-indigo-600">
                                        <objective.icon className="h-8 w-8" />
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {objective.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {objective.description}
                                </p>
                            </article>

                        </div>
                    ))}
                </div>
                </div>
            </Container>
        </section>
    )
}

export default Mission