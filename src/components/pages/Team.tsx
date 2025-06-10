import { Github, Linkedin, Twitter } from 'lucide-react';
import Container from '../layout/Container';

const persons = [
	{
		name: 'Ayanfeoluwa Olajide',
		role: 'Founder & CEO',
		image:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
		bio: 'Web3 Lawyer and Blockchain Enthusiast, dedicated to bridging the gap between technology and law.',
		social: {
			twitter: 'https://x.com/ShaperofCulture',
			linkedin: '#',
			github: '#',
		},
	},
	{
		name: 'Tope Emmanuel',
		role: 'Co-Founder',
		image:
			'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
		bio: 'Blockchain developer turned educator, passionate about making complex concepts accessible.',
		social: {
			twitter: 'https://x.com/0xTopichido',
			linkedin: '#',
			github: '#',
		},
	},
	{
		name: 'Emily Rodriguez',
		role: 'Community Manager',
		image:
			'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
		bio: 'Community building expert with a background in youth program development.',
		social: {
			twitter: '#',
			linkedin: '#',
			github: '#',
		},
	},
];

const Team = () => {
	return (
		<section className='relative bg-gradient-to-br from-white via-indigo-50 to-indigo-100 py-16'>
			<Container>
				<div className='place-items-center'>
					<div>
						<h3 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
							MEET THE TEAM
						</h3>
					</div>
					<div className='mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
						{persons.map((person, index) => (
							<article key={index} className='text-center group'>
								<div className='relative mb-6 inline-block'>
									<img
										src={person.image}
										alt={person.name}
										className='w-32 h-32 rounded-full mx-auto object-cover filter group-hover:grayscale transition-all duration-300'
									/>
								</div>
								<h3 className='text-xl font-bold text-gray-900'>
									{person.name}
								</h3>
								<p className='text-indigo-600 font-medium mb-2'>
									{person.role}
								</p>
								<p className='text-gray-600 text-sm mb-4'>
									{person.bio}
								</p>
								<div className='flex justify-center space-x-4 mb-2'>
									{person.social.twitter &&
										person.social.twitter !== '#' && (
											<a
												href={person.social.twitter}
												target='_blank'
												rel='noopener noreferrer'
												aria-label='Twitter'
											>
												<Twitter className='w-5 h-5 text-indigo-500 hover:text-indigo-700 transition' />
											</a>
										)}
									{person.social.linkedin &&
										person.social.linkedin !== '#' && (
											<a
												href={person.social.linkedin}
												target='_blank'
												rel='noopener noreferrer'
												aria-label='LinkedIn'
											>
												<Linkedin className='w-5 h-5 text-indigo-500 hover:text-indigo-700 transition' />
											</a>
										)}
									{person.social.github &&
										person.social.github !== '#' && (
											<a
												href={person.social.github}
												target='_blank'
												rel='noopener noreferrer'
												aria-label='GitHub'
											>
												<Github className='w-5 h-5 text-indigo-500 hover:text-indigo-700 transition' />
											</a>
										)}
								</div>
							</article>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Team;