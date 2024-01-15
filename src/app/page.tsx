import React from 'react'
import Sidebar from './component/sidebar'
import AboutMe from './component/about-me'
import Skills from './component/skills'
import ProfessionalExp from './component/professional-exp'


const page = () => {
  return (
    <div className='sm:flex'>
      <div className='w-full sm:w-1/3'>
      <Sidebar/>
      </div>
      <div className='w-full sm:w-2/3'>
         <AboutMe/>
         <Skills/>
         <ProfessionalExp/>
   
         </div>
    </div>
  )
}

export default page