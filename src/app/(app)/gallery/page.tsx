"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
       <Navbar/>
    <div className="bg-white text-center mt-2">
  <div className="container mx-auto px-4 py-8">
   <h1 className="text-4xl font-bold">
    Gallery
   </h1>
   <p className="text-gray-600 mt-2">
    A GLIMPSE INTO LIFE WITH E-CELL
   </p>
   <div className="mt-8">
    <h2 className="text-2xl font-semibold">
     Alumni Meetups
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
     <img alt="Group of alumni meeting in a classroom setting" src="https://placehold.co/600x400"/>
     <img alt="Group of alumni meeting outside a building" src="https://placehold.co/600x400"/>
    </div>
   </div>
   <div className="mt-8">
    <h2 className="text-2xl font-semibold">
     E-Summit
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
     <img alt="Speaker presenting at E-Summit" src="https://placehold.co/600x400"/>
     <img alt="Audience at E-Summit" src="https://placehold.co/600x400"/>
     <img alt="Stage setup at E-Summit" src="https://placehold.co/600x400"/>
     <img alt="Speaker at podium during E-Summit" src="https://placehold.co/600x400"/>
    </div>
   </div>
   <div className="mt-8">
    <h2 className="text-2xl font-semibold">
     Entrepreneurship Lectures
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
     <img alt="Lecture hall filled with students" src="https://placehold.co/600x400"/>
     <img alt="Students working on laptops during lecture" src="https://placehold.co/600x400"/>
     <img alt="Students discussing during lecture" src="https://placehold.co/600x400"/>
     <img alt="Lecture hall with students and lecturer" src="https://placehold.co/600x400"/>
    </div>
   </div>
  </div>
 </div>

 <Footer/>
 </>
  )
}

export default page
