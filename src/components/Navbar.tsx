import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg z-10 p-3 fixed top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center h-14">
            <img src="./logo.png" alt="educhain-logo" className="h-10 w-auto" />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer"
            >
              Home
            </Link>
      
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer"
            >
              Contact
            </a>
            <a
              href="/gallery"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer"
            >
              Gallery
            </a>
            {/* <Link
              to="/blog"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors cursor-pointer"
            >
              Blog
            </Link> */}
            <Link to="/donate">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors ml-4 font-semibold shadow">
                Get Involved
              </button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
        
            <a
              href="#contact"
              className="block text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
            <a
              href="/gallery"
              className="block text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Gallery
            </a>
            {/* <Link
              to="/blog"
              className="block text-gray-700 hover:text-indigo-600 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link> */}
            <Link to="/donate" onClick={() => setMobileOpen(false)}>
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors font-semibold shadow mt-2">
                Get Involved
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;