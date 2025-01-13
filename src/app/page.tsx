"use client"

import React, { useState } from "react";
import img from "../../public/ecell_img-removebg-preview.png";
import logo from "../../public/logo3.png";
import { FaAngleDown, FaBars, FaFacebookF, FaInstagram, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import logo1 from "../../public/logo2.webp";

export default function Home() {

      console.log(img,logo,logo1);
      

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

  const stats = [
    { value: "50+", description: "overall social reach!" },
    { value: "10+", description: "startups supported till date!" },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md">
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
            <a className="text-gray-700 hover:text-orange-400" href="#">
              Team
            </a>
            <a className="text-gray-700 hover:text-orange-400" href="#">
              Startups
            </a>
            <a className="text-gray-700 hover:text-orange-400" href="#">
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
              <a className="block text-gray-700 hover:text-orange-400" href="#">
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

       
      </header>

      <main className="py-16">
        {/* Marquee Section */}
        <div className="bg-yellow-100 py-4 overflow-hidden">
          <div className="animate-marquee text-blue-800 font-bold text-lg whitespace-nowrap">
            Welcome to E-Cell DR. A.I.T.H KANPUR Empowering Innovators | Accelerate Your
            Incubation Journey | Discover the Future of Startups
          </div>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-black mt-8 lg:ml-20">
              E-Cell DR. AITD
            </h1>
            <p className="text-lg md:text-4xl text-gray-700 mt-4 lg:ml-20">
              Accelerate Your <span className="text-orange-500">Incubation</span> Journey!
            </p>
            <p className="text-gray-600 text-base md:text-xl mt-4 lg:ml-20">
              Welcome to the entrepreneurship community of Dr. A.I.T.D Kanpur where we ideate,
              iterate, and incubate the future innovations of the century!
            </p>
            <button className="bg-gray-800 text-white px-6 py-2 mt-6 rounded-md hover:bg-gray-900 lg:ml-20">
              Get Started!
            </button>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 text-center">
            <img
              alt="Illustration"
              className="mx-auto w-3/4"
              src="/_next/static/media/ecell_img-removebg-preview.7e87eb88.png"
            />
          </div>
        </div>
 
           {/* About Section */}
        <div className="container lg:ml-20 mx-auto px-4 flex flex-wrap items-center mt-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Who Are We?</h2>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              E-Cell Dr. A.I.T.D Kanpur is an institute body run by students, devoted to connecting entrepreneurs with the startup ecosystem. 
              We act as a hub where startups can meet, collaborate, and innovate!
            </p>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900">
              Learn more about E-Cell →
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            {/* <img
              alt="About Illustration"
              className="mx-auto rounded-lg"
              src="/_next/static/media/logo2.adab1b74.webp"
            /> */}
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-6xl font-bold text-blue-500">{stat.value}</h3>
                <p className="text-gray-600 text-sm md:text-xl">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* About Section */}
            <div className="w-full md:w-1/3 mb-6">
              <div className="flex items-center mb-4">
                <img
                  alt="E-Cell Logo"
                  className="h-12"
                  src="/_next/static/media/logo2.adab1b74.webp"
                />
                <span className="ml-2 text-xl font-bold text-white">E-Cell DR. AITD</span>
              </div>
              <p className="text-gray-400">
                Empowering innovators and startups at AITH to shape the future of entrepreneurship.
              </p>
            </div>

            {/* Links Section */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    About Us
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
                  <a href="#" className="hover:text-orange-500">
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
      </footer>
    </>
  );
}
