'use client'

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'


const NotFound = () => {
    

  return (
    <div className="antialiased">
          <Navbar />
  
          <div className='bg-[#FOF3F5] h-[20rem] p-10 flex items-center justify-center'>
            <img src="/svg404.svg" alt="404" />
            <div>
                <h1 className='text-5xl mb-5 text-center text-black font-Onest font-extralight'>
                    404 error
                </h1>
                <span className='text-5xl text-black font-Onest font-extralight'>
                    Sorry, page not found.
                </span>
            </div>


          </div>




      </div>
  )
}

export default NotFound



  