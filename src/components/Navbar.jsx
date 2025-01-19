'use client'

import React, { useEffect, useState } from 'react'
import { data } from '../data/data'
import Image from 'next/image';
import NotificationTab from './NotificationTab';


const initialNotifications = [
  { id: 1, title: "New Message", message: "You have a new message from John", time: "5 minutes ago" },
  { id: 2, title: "Meeting Reminder", message: "Team meeting in 30 minutes", time: "25 minutes ago" },
  { id: 3, title: "Task Update", message: "Your task 'Create presentation' is due tomorrow", time: "1 hour ago" },
];

const Navbar = () => {

  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

    
  const [openItems, setOpenItems] = useState({}); // Track open state for each item

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const [moreDropdown, setMoreDropdown] = useState(false)
      
  const handleDropdown = () =>{
      setDropdown(!dropdown)
  }
  
  const handleMoreDropdown = () =>{
      setMoreDropdown(!moreDropdown)
  }

  return (
    <div className='font-Onest'>
        {/* Top Navbar */}
        <div className="border-gray-200 font-Onest bg-[#0075A2]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              {/* Logo */}
              <a
                href="https://rackup.vercel.app/dashboard"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img src="/box.svg" alt="Box" />
                <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
                  Rack up
                </span>
              </a>
  
              {/* Search Bar */}
              <form className="hidden sm:block md:block max-w-md mx-auto w-[18rem] lg:w-[30rem]">
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="text-center block w-full h-10 px-4 py-0 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </div>
              </form>
  
              {/* Right-side Icons */}
              <div className="flex items-center space-x-4">
                {/* Notification Icon */}
                <div className="relative">
                  <button 
                    onClick={toggleNotifications} 
                    className="relative p-2 text-[#005D80] hover:text-gray-800 focus:text-gray-800"
                    aria-label="Notifications"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="currentColor"
                    >
                      <path d="M13,5c0-2.761-2.239-5-5-5S3,2.239,3,5v5l-3,2v1h16v-1l-3-2V5z" />
                      <path d="M10,14H6c0,1.105,0.895,2,2,2S10,15.105,10,14z" />
                    </svg>
                    {notifications.length > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                        {notifications.length}
                      </span>
                    )}
                  </button>
                  {showNotifications && (
                    <NotificationTab
                      notifications={notifications}
                      onClose={() => setShowNotifications(false)}
                      onClear={clearNotifications}
                    />
                  )}
                </div>
  
                {/* User Profile */}
                <div className="relative inline-block text-left">
                      {/* Profile Button */}
                      <button
                          onClick={handleDropdown}  
                          id="user-menu-button"
                          className="flex text-sm bg-gray-800 rounded-full focus:outline-none"
                      >
                          <span className="bg-[#54ded9] flex items-center justify-center text-md font-light tracking-wider text-center w-8 h-8 rounded-full">
                          IK
                          </span>
                      </button>
  
                      {/* Dropdown Menu */} 
                      { dropdown && (
                            <div
                            id="user-dropdown"
                            className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-lg shadow-lg"
                            >
                            <div className="px-4 py-3">
                                <p className="text-sm text-gray-700">Irfan Jan Khan</p>
                                <p className="text-xs text-gray-500 truncate">name@rackup.com</p>
                            </div>
                            <div className="py-2">
                                <a
                                href="/dashboard"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                Dashboard
                                </a>
                                <a
                                href="/settings"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                Settings
                                </a>
                                <a
                                href="/"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                Sign out
                                </a>
                            </div>
                        </div>
                      )}
                      
                      
                  </div>
              </div>
            </div>
          </div>
  
          {/* Bottom Navigation Links */}
          <div className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <ul className="flex items-center justify-start md:flex-row gap-10 font-medium  md:space-y-0 md:space-x-8 text-sm">    
                <li>
                  <a
                    onClick={handleMoreDropdown}
                    id="dropdownNavbarLink"
                    className="cursor-pointer flex items-center hover:underline w-full text-gray-900 hover:bg-gray-100"
                  >
                    All
                    <svg
                                          className={`w-4 h-4 transform rotate-90`}
                                          fill="black"
                                          viewBox="0 0 100 100"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M25 20 Q25 25 25 80 Q50 65 75 50 Q50 35 25 20 Z" />
                                        </svg>
                    
                  </a>
                  {/* Dropdown Menu */}
                  { moreDropdown && (
                    <div
                        id="dropdownNavbar"
                        className="absolute bg-white shadow rounded-b-xl"
                    >
                      <Image
                        src="/crumpiedfabric.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={50}
                        alt="Background"
                        className="opacity-50"
                      />
                      <form className="hidden sm:block md:block max-w-[15rem] m-5 w-[10rem] lg:w-[30rem]">
                          <div className="relative">
                            <input
                              onChange={(e) => setSearch(e.target.value)}
                              type="search"
                              id="default-search"
                              className="text-center block w-full h-10 px-4 py-0 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Search"
                              
                            />
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  stroke="black"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                              </svg>
                            </div>
                          </div>
                        </form>
                        <div>
                          {/* Bottom Navigation Links */}
                          <div className="relative bg-gray-50 z-50 dark:bg-gray-700">
                            <div className="max-w-screen-xl px-4 mx-auto">
                              <ul className="flex flex-col font-medium text-sm">
                                {data
                                  .filter((option) => {
                                    const mainTitleMatch = option.title
                                      .toLowerCase()
                                      .includes(search.toLowerCase());
                                    const childTitleMatch = option.children?.some((child) =>
                                      child.title.toLowerCase().includes(search.toLowerCase())
                                    );
                                    return mainTitleMatch || childTitleMatch;
                                  })
                                  .map((option) => (
                                    <li key={option.id} className="border-b">
                                      {/* Main Title */}
                                      <div
                                        className="cursor-pointer text-gray-900 hover:bg-gray-100 px-4 py-2 flex justify-start items-center"
                                        onClick={() => toggleItem(option.id)}
                                      >
                                        <svg
                                          className={`w-4 h-4 transform ${
                                            openItems[option.id] ? "rotate-90" : ""
                                          } transition-transform`}
                                          fill="black"
                                          viewBox="0 0 100 100"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path d="M25 20 Q25 25 25 80 Q50 65 75 50 Q50 35 25 20 Z" />
                                        </svg>



                                        {option.title}
                                      </div>

                                      {/* Children (visible when toggled) */}
                                      {openItems[option.id] && option.children && (
                                        <ul className="ml-4 mb-2">
                                          {option.children.map((child) => (
                                            <li key={child.id}>
                                              <a
                                                href={child.link}
                                                className="block px-4 hover:bg-gray-100 text-gray-700"
                                              >
                                                {child.title}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        

                    </div>
                  )}
                </li>
                <li>
                  <a href="#" className="text-gray-900 dark:text-white hover:underline">
                    Favourites
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-900 dark:text-white hover:underline">
                    History
                  </a>
                </li>
              </ul>
            </div>
          </div>
    </div>
  )
}

export default Navbar