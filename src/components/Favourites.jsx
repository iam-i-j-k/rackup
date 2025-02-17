import React from 'react'
import "remixicon/fonts/remixicon.css";

const Favourites = ({ onClose }) => {
  return (
    <div className="absolute top-full left-0 w-80 bg-white border border-black rounded-xl shadow-lg z-50">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold">Favourites</h3>
        <div className="flex space-x-2">
          <button 
            onClick={onClose}  
            className="text-gray-400 hover:text-gray-600"
            aria-label="Close notifications"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-h-80 overflow-y-auto p-5 gap-10 space-y-5">
        <div className='flex items-center gap-5'>
            <a className='flex justify-center items-center gap-5' href="/dashboard">
                <i className="ri-home-4-line text-slate-900 text-xl"></i>
                <p className='text-sm font-light'>Dashboard</p>
            </a>
        </div>
        <div className='flex items-center gap-5'>
            <a className='flex justify-center items-center gap-5' href="/employee/timesheet">
                <i className="ri-timeline-view text-slate-900 text-xl"></i>
                <p className='text-sm font-light'>Time Sheet</p>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Favourites