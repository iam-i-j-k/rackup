import Footpage from '@/components/Footpage'
import { employeeprofiles } from '@/data/employeeprofiles'
import React from 'react'

const page = () => {
  return (
    <div>
      <h2 className='font-semibold m-5'>Role Based Access</h2>
      <div className="h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto">
              <div className="overflow-x-auto">
                <table className="w-full mt-5 rounded-md min-w-[640px]">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[100px]">Name</th>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Employee ID</th>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]">Job Title</th>
                      <th className="border-b boer-slate-500 font-semibold gap-10 py-2 min-w-[80px]">Read</th>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[80px]">Create</th>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[80px]">Edit</th>
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
                        <td className="px-2 py-5"><input 
                          type='checkbox' checked={item.read} /></td>
                        <td className="px-2 py-5"><input 
                          type='checkbox' checked={item.create} /></td>
                        <td className="px-2 py-5"><input 
                          type='checkbox' checked={item.edit} /></td>
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


