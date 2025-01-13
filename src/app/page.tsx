import React from "react";
// import img from "../../public/ecell_img-removebg-preview.png"
// import Link from "next/link";
import logo from "../../public/logo3.png"

export default function Home() {
  // const eventDates = "31st JAN 2025 to 2nd FEB 2025";
  console.log(logo);
  

  const menuItems = [
    {
      label: "Discover",
      options: ["Option 1", "Option 2"],
    },
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
    { value: "50000+", description: "overall social reach!" },
    { value: "108", description: "startups supported till date!" },
  ];

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
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
                  className="text-gray-700 hover:text-gray-900"
                  aria-label={`${menu.label} dropdown menu`}
                >
                  {menu.label} <i className="fas fa-chevron-down"></i>
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
            <a className="text-gray-700 hover:text-gray-900" href="#">
              Team
            </a>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              Startups
            </a>
            <a className="text-gray-700 hover:text-gray-900" href="#">
              Contact
            </a>
          </nav>

          {/* Event Date and User Icon */}
          {/* <div className="flex items-center space-x-4">
            <span className="text-gray-700">{eventDates}</span>
            <i className="fas fa-user-circle text-2xl text-gray-700"></i>
          </div> */}
        </div>

      </header>



      <main className=" py-16">

        {/* Marquee Section */}
        <div className="bg-yellow-100 py-4 mt-0 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-blue-800 font-bold text-lg">
            Welcome to E-Cell DR. A.I.T.H KANPUR Empowering Innovators | Accelerate Your
            Incubation Journey | Discover the Future of Startups
            {/* <span>
               <p>HIRING OF MEMBERS IS GOING ON</p>
              <Link href="#">
                Wants to join E-CELL?Apply Now
              </Link>
            </span> */}
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

        {/* About Section */}
        <div className="container mx-auto px-6 text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Who are we?</h2>
          <p className="text-gray-600 mb-8">
            E-Cell IIT BHU is an institute body run by the students of IIT (BHU)
            Varanasi devoted to acting as a symbiotic link between the entrepreneurs
            of E-Cell and the existing startup ecosystem as well as acting as a hub
            where all the startups can meet, collaborate, and innovate!
          </p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 focus:ring focus:ring-gray-500">
            Learn more about E-Cell →
          </button>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 text-center mt-16">
          <div className="flex justify-center space-x-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-4xl font-bold text-blue-500">{stat.value}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <img
              alt="Illustration of a rocket representing startup growth"
              className="mx-auto"
              src="https://placehold.co/100x100"
            />
          </div>
        </div>
      </main>
    </>
  );
}
