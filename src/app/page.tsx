"use client"

import React, { useState } from "react";
import img from "../../public/ecell_img-removebg-preview.png";
import logo from "../../public/logo3.png";
import logo1 from "../../public/logo2.webp";
import bg from "../../public/abhi.jpeg"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {

      console.log(img,logo,logo1,bg);
      

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

  // const stats = [
  //   { value: "50+", description: "overall social reach!" },
  //   { value: "10+", description: "startups supported till date!" },
  // ];
  const teamMembers = [
    { name: "ABHISHEK SINGH", role: "Overall Coordinator", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com" },
    { name: "MANJEET SINGH", role: "Overall Coordinator", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"  },
    { name: "SAKSHI PANDEY", role: "Finance & PR manager", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"  },
    { name: "ARPIT SHAKYA", role: "Event Manager", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"  },
    { name: "STUTI CHAUDHARY", role: "Event Manager", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"  },
    { name: "SATYAM PANDEY", role: "Head Graphic Design", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"  },
    { name: "ABHAY TIWARI", role: "Head Video Editing", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"  },
    { name: "ANSH SHARMA", role: "Head Social Media", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"},
    { name: "HARIKESH TRIPATHI", role: "Head Tech", image: "/_next/static/media/abhi.4a87f790.jpeg",gmail:"gyani1234@gmail.com"},
  ];
  

  return (
    <>
      {/* Header */}
      <Navbar/>  

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
            <h1 className="text-4xl md:text-6xl font-bold text-black mt-16 lg:ml-20">
              E-Cell DR. AITD
            </h1>
            <p className="text-lg md:text-4xl text-gray-700 mt-8 lg:ml-20">
              Accelerate Your <span className="text-orange-500">Incubation</span> Journey!
            </p>
            <p className="text-gray-600 text-base md:text-xl mt-6 lg:ml-20">
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

      {/* About Section */}
        <div className="container mx-auto px-4 flex flex-wrap items-center mt-24">
          <div className="w-full lg:w-1/2 text-center lg:ml-16 lg:text-left">
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
          </div>
        </div>
        </div>

      </main>

      {/* Footer */}
     <Footer/>
    </>
  );
}
