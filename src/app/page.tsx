import React from "react";
import img from "../../public/ecell_img-removebg-preview.png"
// import Link from "next/link";
import logo from "../../public/logo3.png"
import { FaAngleDown, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { MdOutlineAccountCircle } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import logo1 from "../../public/logo2.webp"

export default function Home() {
  // const eventDates = "31st JAN 2025 to 2nd FEB 2025";
  console.log(logo);
  console.log(img);
  console.log(logo1);
  
  
  

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
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-2 px-8">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img
              alt="E-Cell dr.aith"
              className="h-16"
              src={`/_next/static/media/logo3.08c2ed5e.png`}
              // style={}
            />
            {/* <span className="ml-2 text-xl font-bold">E-Cell IIT BHU</span> */}
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative group">
                <button
                  className="text-gray-700 hover:text-gray-900 flex flex-row"
                  aria-label={`${menu.label} dropdown menu`}
                >
                  {menu.label} <FaAngleDown className="mt-2" />
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

          {/* Event Date and User Icon */}
          <div>
            <button>
              <RiAccountCircleLine className="text-orange-400 h-10 w-10"/> 
            </button>
          </div>
        </div>

      </header>



      <main className=" py-16">

        {/* Marquee Section */}
        <div className="bg-yellow-100 py-4 mt-0 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-blue-800 font-bold text-lg">
            Welcome to E-Cell DR. A.I.T.H KANPUR Empowering Innovators | Accelerate Your
            Incubation Journey | Discover the Future of Startups
          </div>
        </div>



        <div className="container mx-auto px-6 flex flex-row">

           <div className="w-2/3">
           <h1 className="text-6xl font-bold text-black  m-20 mb-10">E-Cell DR. AITD</h1>
          <p className="text-4xl text-gray-700 ml-20 mb-10">
            Accelerate Your{" "} <br />
            <span className="text-orange-500">Incubation</span> <br /> Journey!
          </p>
          <p className="text-gray-600 ml-20 text-xl">
            Welcome to the entrepreneurship community of Dr. A.I.T.D Kanpur where we ideate,
            iterate, and incubate the future innovations of the century!
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 ml-20 rounded-md hover:bg-gray-900 focus:ring focus:ring-gray-500 mt-5">
            Get Started!
          </button>
           </div>

          <div className="mt-12">
            <img
              alt="Illustration of a person working on a laptop with various icons representing ideas and innovation"
              className="mx-auto"
              src="/_next/static/media/ecell_img-removebg-preview.7e87eb88.png"
            />
          </div>
        </div>

        <div className="h-0.5 bg-slate-300  justify-center ml-20"></div>

        {/* About Section */}
        <div className="container mx-auto px-6 mt-16 flex flex-row">
          <div className="ml-20 w-2/3">
          <h2 className="text-5xl font-bold mb-10">Who are we?</h2>
          <p className="text-gray-600 mb-8 text-xl">
            E-Cell Dr. A.I.T.D Kanpur is an institute body run by the students of AITH
            Kanpur devoted to acting as a symbiotic link between the entrepreneurs
            of E-Cell and the existing startup ecosystem as well as acting as a hub
            where all the startups can meet, collaborate, and innovate!
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 focus:ring focus:ring-gray-500">
            Learn more about E-Cell →
          </button>
          </div>

          <div>
               
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 text-center mt-16">
          <div className="flex justify-center space-x-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-6xl font-bold text-blue-500">{stat.value}</h3>
                <p className="text-gray-600 text-2xl">{stat.description}</p>
              </div>
            ))}
          </div>
          {/* <div className="mt-12">
            <img
              alt="Illustration of a rocket representing startup growth"
              className="mx-auto"
              src="https://placehold.co/100x100"
            />
          </div> */}
        </div>
      </main>


      {/* footer */}

      <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container px-10">
        <div className="flex flex-wrap justify-around">
          {/* Left Section: Logo and About */}
          <div className=" w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                alt="E-Cell"
                className="h-10 rounded-full"
                src="/_next/static/media/logo2.adab1b74.webp"
              />
              <span className="ml-2 text-xl font-bold text-white">
                E-Cell DR. AITD
              </span>
            </div>
            <p className="text-gray-400">
              Empowering innovators and startups at AITH to shape the future of entrepreneurship.
            </p>
          </div>
 
             {/* Middle Section: Quick Links */}
             <div className=" mb-6 md:mb-0">
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

          {/* Right Section: Social Media */}
          <div className="">
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <div className=" flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 text-2xl"
                aria-label="Facebook"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 text-2xl"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 text-2xl"
                aria-label="Instagram"
              >
                <FaFacebookF />

              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-orange-500 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 E-Cell AITH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>

    </>
  );
}
