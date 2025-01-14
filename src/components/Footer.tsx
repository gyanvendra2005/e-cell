import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
        
       <div className="bg-gray-800 text-gray-300 py-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                  {/* About Section */}
                  <div className="w-full md:w-1/3 mb-6">
                    <div className="flex items-center mb-4">
                      <img
                        alt="E-Cell Logo"
                        className="h-12 rounded-full"
                        src="/_next/static/media/logo2.adab1b74.webp"
                      />
                      <span className="ml-2 text-xl font-bold text-white">E-Cell DR. AITD</span>
                    </div>
                    <p className="text-gray-400">
                      Empowering innovators and startups at AITH to shape the future of entrepreneurship.
                    </p>
                  </div>
      
                  {/* Links Section */}
                  <div className=" mb-6">
                    <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="hover:text-orange-500">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="team" className="hover:text-orange-500">
                          Team
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-orange-500">
                          Startups
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-orange-500">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="gallery" className="hover:text-orange-500">
                          Gallery
                        </a>
                      </li>
                    </ul>
                  </div>
      
                  {/* Social Media Section */}
                  <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-2xl text-gray-300 hover:text-orange-500">
                        <FaInstagram />
                      </a>
                      <a href="#" className="text-2xl text-gray-300 hover:text-orange-500">
                        <FaXTwitter />
                      </a>
                      <a href="#" className="text-2xl text-gray-300 hover:text-orange-500">
                        <FaFacebookF />
                      </a>
                      <a href="#" className="text-2xl text-gray-300 hover:text-orange-500">
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                  <p className="text-gray-400 text-sm">&copy; 2025 E-Cell AITH. All Rights Reserved.</p>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Footer
