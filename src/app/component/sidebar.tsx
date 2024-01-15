import React from 'react'
import image from "../../../public/images.jpeg"
import Image from 'next/image'
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Sidebar = () => {
  return (
 
    <div className="bg-[#400028] h-auto sm:h-screen flex flex-col-3 content-between w-full sm:justify-around sm:w-1/3 sm:fixed ">
     <div className='flex flex-col p-10'>
      <div>
      <Image src={image} alt="image" className="w-80" />
      <h1 className='text-white text-2xl mt-2 '>Hi There! I Am Safina</h1>
      <h2 className='text-[#A55D35] font-semibold text-xl mt-2'>Web Developer</h2>
      <p className='text-white mt-2 '>Student Of PIAIC Quarter 2</p>
      <p className='text-white mt-2 '>Lorem, ipsum dolor.</p>
       </div>
       <h3 className='text-center mt-8 sm:mt-14 text-white'>CONTACT ME</h3>
       <div className='flex  justify-center items-center gap-4 sm:gap-6 mt-2'>
       <div style={{color:"white"}} ><FaEnvelope /></div>
       <div style={{color:"white"}}><FaTwitter /></div>
       <div style={{color:"white"}}><FaLinkedin /></div>
       <div style={{color:"white"}}><FaMedium /></div>
       </div> 
       </div>
    </div>
   
)
}

export default Sidebar