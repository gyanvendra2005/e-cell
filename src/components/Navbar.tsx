import React, { useState } from 'react'
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';
import { RiAccountCircleLine } from 'react-icons/ri';

export default function Navbar(){
     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
      const menuItems = [
        {
          label: "Initiatives",
          options: ["Option 1", "Option 2"],
        },
        {
          label: "Learn",
          options: ["Option 1", "Option 2"],
        },
      ];
  return (
    <div>
       <div className="bg-white shadow-md">
              <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
                {/* Logo */}
                <div className="flex items-center">
                  <img
                    alt="E-Cell Logo"
                    className="h-12"
                    src={`/_next/static/media/logo3.08c2ed5e.png`}
                  />
                </div>
      
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                  {menuItems.map((menu, index) => (
                    <div key={index} className="relative group">
                      <button className="text-gray-700 hover:text-gray-900 flex items-center">
                        {menu.label} <FaAngleDown className="ml-1" />
                      </button>
                      <div className="absolute hidden group-hover:block z-10 bg-white shadow-lg mt-2 rounded-md">
                        {menu.options.map((option, i) => (
                          <a
                            key={i}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            href="#"
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  <a className="text-gray-700 hover:text-orange-400" href="team">
                    Team
                  </a>
                  <a className="text-gray-700 hover:text-orange-400" href="#">
                    Startups
                  </a>
                  <a className="text-gray-700 hover:text-orange-400" href="gallery">
                    Gallery
                  </a>
                  <a className="text-gray-700 hover:text-orange-400" href="#">
                    Contact
                  </a>
                </nav>
                 {/* right section */}
              <div className="hidden md:flex">
                  <RiAccountCircleLine className="text-orange-400 h-10 w-10" />
                </div>
      
                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                  <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                  </button>
                </div>
      
              </div>
      
      
      
              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="bg-white md:hidden shadow-md">
                  <div>
                  <RiAccountCircleLine className="text-orange-400 h-10 w-10" />
                </div>
                  <nav className="space-y-4 py-4 px-4">
                    {menuItems.map((menu, index) => (
                      <div key={index} className="group">
                        <button className="text-gray-700 flex items-center">
                          {menu.label} <FaAngleDown className="ml-1" />
                        </button>
                        <div className="pl-4 mt-2 space-y-2">
                          {menu.options.map((option, i) => (
                            <a
                              key={i}
                              className="block text-gray-700 hover:text-orange-400"
                              href="#"
                            >
                              {option}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    <a className="block text-gray-700 hover:text-orange-400" href="/team">
                      Team
                    </a>
                    <a className="block text-gray-700 hover:text-orange-400" href="#">
                      Startups
                    </a>
                    <a className="block text-gray-700 hover:text-orange-400" href="#">
                      Gallery
                    </a>
                    <a className="block text-gray-700 hover:text-orange-400" href="#">
                      Contact
                    </a>
                  </nav>
                </div>
              )}
      
             
            </div>  
      
    </div>
  )
}

