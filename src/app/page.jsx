'use client'

import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Image from 'next/image'

const page = () => {

    const [showPassword, setShowPassword] = useState(true)
    const handlePasswordChange = () => {
        setShowPassword(!showPassword)
    }

    return (
        <main className='flex items-center justify-center h-screen w-screen bg-[#54d2de] font-Onest relative'>
            <Image
                src="/crumpiedfabric.jpg"
                layout="fill"
                objectFit="cover"
                quality={50}
                alt="Background"
                className="opacity-50"
            />

            <div className='flex flex-wrap items-center justify-center z-10 gap-5 bg-[#F0F3F5] p-5 rounded-lg shadow-lg'>
                <div className='w-[10rem] sm:w-[20rem] md:w-[25rem] lg:w-[30rem]'>
                    <img className='w-full h-auto' src="/cardboardbox.jpg" alt="Logo" />
                </div>
                <div className='w-[15rem] md:w-[30rem] p-3'>
                    <form className="max-w-sm mx-auto w-full">
                        <div className='flex items-center justify-center text-center mb-5'>
                            <svg width="45" height="40" viewBox="0 0 104 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="104" height="73" fill="#B0916E" />
                                <path d="M76.625 13L56 43H68.0312V73H85.2188V43H97.25L76.625 13Z" fill="#FFF0A1" />
                            </svg>
                            <h1 className='text-center text-gray-950 font-bold text-3xl sm:text-4xl font-Onest'>
                                Rackup
                            </h1>
                        </div>
                        <div>
                            <h3 className='text-gray-950 font-Onest font-semibold antialiased text-xl sm:text-2xl'>Let's get started!</h3>
                        </div>
                        <div className="my-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                            <input type="email" id="email" className="bg-gray-50 h-[2rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="employee1@example.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <div className="relative">
                                <input type={showPassword ? 'password' : 'text'} id="password" className="bg-gray-50 h-[2rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;' required />
                                <div className='absolute top-[50%] right-3 transform -translate-y-[50%] text-xl cursor-pointer text-gray-600'>
                                    {(!showPassword ? (
                                        <IoEyeOff onClick={handlePasswordChange} />
                                    ) : (
                                        <IoEye onClick={handlePasswordChange} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start mb-5">
                            <a className='text-blue-800 text-sm font-Onest' href="#">Forgot Password?</a>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className="text-white bg-[#481620] hover:bg-[#41111b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-light text-sm w-full sm:w-auto px-[5rem] py-2.5 text-center">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default page
