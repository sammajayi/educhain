import React from 'react'
import { Github, Linkedin, Twitter } from 'lucide-react';
import Container from '../layout/Container';


const persons = [
  {
    name: "Sarah Johnson",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Former EdTech executive with 15 years of experience in education innovation.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Blockchain developer turned educator, passionate about making complex concepts accessible.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Community building expert with a background in youth program development.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },

]


const Team = () => {

  return (
    <section className=' bg-white my-10'>
      <Container>

      <div className='place-items-center'>

        <div className=''>
          <h3 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            MEET THE TEAM
          </h3>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:w[10rem] lg:grid-cols-3">
          {persons.map((person, index) => (
            <article key={index} className="text-center group">
              <div  className="relative mb-6 inline-block">
                <img 
                src={person.image} 
                alt={person.name}
                className="w-32 h-32 rounded-full mx-auto object-cover filter group-hover:grayscale transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-indigo-600 font-medium mb-2">{person.role}</p>
              <p className="text-gray-600 text-sm mb-4">{person.bio}</p>
            </article>

          ))};

        </div>

      </div>
      </Container>
    </section >
  )
}

export default Team