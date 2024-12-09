


const Navbar = () => {
  return (
   
      <nav className='bg-white shadow-lg  z-5 p-5'>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className='flex h-14'>
              <img src="./logo.png" alt="educhain-logo" />
            </div>

            <div className='flex p-4'>
              <ul className='flex space-x-8'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
              <button className="bg-indigo-600 text-white px-4 ml-4  rounded-md hover:bg-indigo-700 transition-colors">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar