"use client"
import React from 'react'
import { cn } from "@/lib/util";
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const page = () => {
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
    <div>
        <Navbar/>
         <div className="flex flex-col items-center bg-black py-10">
                  <div className="text-center mb-10">
                    <h2 className="text-lg font-semibold text-orange-500 mb-2">CONTACT</h2>
                    <h1 className="text-4xl text-white font-bold mb-4">Our Team</h1>
                    <p className="text-white">Contact us for any queries, questions, or ideas.</p>
                  </div>
        
               <div className="grid grid-cols-2  ">
                 {teamMembers.map((member,index)=>(
                   <div className="max-w-xs  group/card mt-10 m-4  md:m-20" key={index}>
                   <div
                     className={cn(
                       " cursor-pointer overflow-hidden relative card h-60 md:h-72 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                       "bg-[url(/_next/static/media/abhi.4a87f790.jpeg)] bg-cover"
                     )}
                   >
                     <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
                     <div className="flex flex-row items-center space-x-4 z-10">
                       <Image
                         height="100"
                         width="100"
                         alt={`Portrait of ${member.name}`}
                         src={member.image}
                         className="h-10 w-10 rounded-full border-2 object-cover"
                       />
                       <div className="flex flex-col">
                         <p className="font-normal text-base text-gray-50 relative z-10">
                           {member.name}
                         </p>
                         {/* <p className="text-sm text-gray-400">2 min read</p> */}
                       </div>
                     </div>
                     <div className="text content">
                       <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                         {member.role}
                       </h1>
                       <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                         {member.gmail}
                       </p>
                     </div>
                   </div>
                 </div>
                 ))}
                 </div>
              </div>
        <Footer/>      
    </div>
  )
}

export default page
