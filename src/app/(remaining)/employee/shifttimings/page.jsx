import Footpage from '@/components/Footpage'
import { employeeprofiles } from '@/data/employeeprofiles'
import React from 'react'

const page = () => {
  return (
    <div>
      <h2 className='font-semibold pl-5'>Shift Timings</h2>
      <div className="h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto">
              <div className="overflow-x-auto">
                <table className="w-full mt-5 rounded-md min-w-[640px]">
                  <thead>
                    <tr className='border-b border-slate-500'>
                      <th className="font-semibold gap-10 py-2 min-w-[100px]">Name</th>
                      <th className="font-semibold gap-10 py-2 min-w-[150px]">Employee ID</th>
                      <th className="font-semibold gap-10 py-2 min-w-[180px]">Job Title</th>
                      <th className="font-semibold gap-10 py-2 min-w-[80px]">Log In</th>
                      <th className="font-semibold gap-10 py-2 min-w-[80px]">Log Out</th>
                    </tr>
                  </thead>
                  <tbody>
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
                        <td className="px-2 py-5">{item.login}</td>
                        <td className="px-2 py-5">{item.logout}</td>
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