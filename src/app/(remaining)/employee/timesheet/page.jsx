'use client'

import Footpage from '@/components/Footpage'
import { employeeprofiles } from '@/data/employeeprofiles'
import React, { useState } from 'react'

const page = () => {

  const [startDate, setStartDate] = useState(new Date());

  // Get the date range (7 days starting from startDate)
  const getDateRange = (start) => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
      console.log(date);
      
    }
    return dates;
  };
  

  // Format date as "MMM D"
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric'
    });
  };

  // Format date range as "MMM D to MMM D YYYY"
  const formatDateRange = (dates) => {
    const firstDate = dates[0];
    const lastDate = dates[6];
    
    const firstMonth = firstDate.toLocaleDateString('en-US', { month: 'short' });
    const lastMonth = lastDate.toLocaleDateString('en-US', { month: 'short' });
    const firstDay = firstDate.getDate();
    const lastDay = lastDate.getDate();
    const year = lastDate.getFullYear();
    console.log(year);
    
    if (firstMonth === lastMonth) {
      return `${firstMonth} ${firstDay} to ${lastDay}, ${year}`;
    }
    return `${firstMonth} ${firstDay} to ${lastMonth} ${lastDay}, ${year}`;
  };

  const goToPreviousWeek = () => {
    setStartDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() - 7);
      return newDate;
    });
  };

  const goToNextWeek = () => {
    setStartDate(prev => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + 7);
      return newDate;
    });
  };

  const resetToCurrentWeek = () => {
    const today = new Date();
    setStartDate(today);
  };

  const dateRange = getDateRange(startDate);

  return (
    <div>
      <h2 className='font-semibold m-5'>Shift Timings</h2>
      <div className="h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto">
              <div className="overflow-x-auto">
                <table className="w-full mt-5 rounded-md min-w-[640px]">
                  <thead>
                    <tr className='border-b border-slate-500'>
                      <th className="font-semibold gap-10 py-2 min-w-[100px]">Name</th>
                      <th className="font-semibold gap-10 py-2 min-w-[150px]">Employee ID</th>
                      <th className="font-semibold gap-10 py-2 min-w-[180px]">Job Title</th>
                      <th className="flex relative items-center justify-center font-semibold gap-10 py-2">
                      <div className='absolute left-[28%]'>
                            <button onClick={goToPreviousWeek}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 100 100" fill="black">
                                    <polygon points="20,50 80,10 80,90"/>
                                </svg>
                            </button>
                        </div>
                        <div>
                            {formatDateRange(dateRange)}
                        </div>
                        <div className='absolute right-[28%]'>
                            <button onClick={goToNextWeek}>
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}  viewBox="0 0 100 100" fill="black">
                                    <polygon points="80,50 20,10 20,90"/>
                                </svg>
                            </button>
                        </div>
                        <div className='absolute right-5'>
                            <button className='underline' onClick={resetToCurrentWeek}>
                                Reset to Current Week
                            </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                            <div className="grid grid-cols-7 gap-2">
                            {dateRange.map((date, index) => (
                                <div 
                                    key={index}
                                    className="text-center p-2 rounded"
                                >
                                    <div className="text-sm text-gray-500">
                                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                    </div>
                                    <div className="font-medium">
                                        {formatDate(date)}
                                    </div>
                                </div>
                            ))}
                            </div>
                        </td>
                    </tr>
                    {employeeprofiles.map((item, index) => (
                      
                      <tr
                        className={`text-center ${
                          index % 2 === 0 ? 'bg-white' : 'bg-[#F0F3F5]'
                        }`}
                        key={index}
                      >
                        <td className="px-2 py-5">{item.Name}</td>
                        <td className="px-2 py-5">{item.EmployeeId}</td>
                        <td className="px-2 py-5">{item.JobTitle}</td>
                        <td>
                            <div className='grid grid-cols-7 gap-2'>
                                {Object.entries(item.Days).map(([day, hours],index) =>(
                                    <div key={index}
                                        className='p-2 text-center'
                                    >
                                        <div className="font-medium">
                                            {hours}
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Footpage />
    </div>
  )
}



export default page
