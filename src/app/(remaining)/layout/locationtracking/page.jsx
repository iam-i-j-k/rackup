import Footpage from '@/components/Footpage'
import { inventoryauditinfo } from '@/data/inventoryauditinfo'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto">
              <div className="overflow-x-auto">
                <table className="w-full mt-5 rounded-md min-w-[640px]">
                  <thead>
                    <tr>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[100px]">Product ID</th>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Product Name</th>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[80px]">Zone</th>
                      <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[80px]">Loaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryauditinfo.map((item, index) => (
                      <tr
                        className={`text-center ${
                          index % 2 === 0 ? 'bg-white' : 'bg-[#F0F3F5]'
                        }`}
                        key={index}
                      >
                        <td className="px-2 py-5">{item.id}</td>
                        <td className="px-2 py-5">{item.description}</td>
                        <td className="px-2 py-5">{item.zone}</td>
                        <td className="px-2 py-5">{item.location}</td>
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