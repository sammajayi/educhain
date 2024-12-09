import React from 'react'

const Blog = () => {
    const posts = [
        {
            title: "Understanding Blockchain Technology: A Student's Guide",
            excerpt: "An introduction to blockchain technology and its fundamental concepts, explained in a way that's accessible to high school students.",
            author: "Sarah Johnson",
            date: "March 15, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "The Future of Digital Currency in Education",
            excerpt: "Exploring how blockchain and digital currencies are shaping the future of educational transactions and student credentials.",
            author: "Michael Chen",
            date: "March 10, 2024",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "Student Success Stories: Learning Blockchain",
            excerpt: "Real stories from high school students who have completed our blockchain education programs and their achievements.",
            author: "David Smith",
            date: "March 5, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        }
    ]

    return (
        <section className=' bg-gray-50'>
            <div>
                Latest Updates
            </div>

            <div className='flex py-20'>
                {posts.map((post) => (
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

                        <img
                            src="{post.image}"
                            alt="{post.title}"
                            className="w-full h-48 object-cover"
                        />
                        <div>
                            <h2>
                                {post.title}
                            </h2>
                            <p>
                                {post.excerpt}
                            </p>
                            <div>
                                {post.author}
                                {post.date}
                                {post.readTime}
                            </div>
                        </div>

                    </article>
                ))};
            </div>

        </section>
    )
}

export default Blog