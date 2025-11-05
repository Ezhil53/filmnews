import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'NEWS', href: '/' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          

          {/* Logo */}
          <div className="flex-shrink-0 flex items-top justify-centter lg:absolute lg:left-1/2 lg:-translate-x-1/2 ">
            <Link to="/" className="flex items-top justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
                <span className="text-red-500 font-[Poppins]">Filmnews</span>
                <span className="text-black font-[Poppins]"> 24</span>
              </h1>
            </Link>
          </div>

          {/* Icons - Desktop */}
          <div className="hidden lg:flex items-bottom space-x-4">
            
            <a
              href="https://www.instagram.com/idiamondbabu/?hl=en" target='_blank'
              className="text-gray-500 hover:text-red-500 transition-colors hover:scale-110 transform duration-200"
            >
              <BsInstagram className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/diamond.babu/" target='_blank'
              className="text-gray-500 hover:text-red-500 transition-colors hover:scale-110 transform duration-200"
            >
              <BsFacebook className="text-xl" />
            </a>
            <a
              href="https://x.com/idiamondbabu" target='_blank'
              className="text-gray-500 hover:text-red-500 transition-colors hover:scale-110 transform duration-200"
            >
              <BsTwitterX className="text-xl" />
            </a>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-bottom justify-end space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold tracking-wider transition-colors relative group ${
                  link.active
                    ? 'text-red-500'
                    : 'text-gray-700 hover:text-red-500'
                }`}
              >
                {link.name}
                {link.active && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"></span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-bottom gap-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              {isMenuOpen ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-gray-50 border-t border-gray-200">
        

          {/* Mobile Nav Links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block py-3 px-4 text-base font-semibold rounded-lg transition-colors ${
                link.active
                  ? 'bg-red-500 text-white'
                  : 'text-gray-700 hover:bg-red-50 hover:text-red-500'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Social Icons - Mobile */}
          <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
            <a
              href="https://www.instagram.com/idiamondbabu/?hl=en" target='_blank'
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <BsInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.facebook.com/diamond.babu/" target='_blank'
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <BsFacebook className="text-2xl" />
            </a>
            <a
              href="https://x.com/idiamondbabu" target='_blank'
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <BsTwitterX className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        
        .font-dancing {
          font-family: 'Dancing Script', cursive;
        }
      `}</style> */}
    </nav>
  );
};

export default Navbar;