'use client'

import { inventoryauditinfo } from '@/data/inventoryauditinfo'
import Image from 'next/image'
import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const page = () => {

  const MySwal = withReactContent(Swal)

  return (
    <div>
        <div className="h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto">
            <div className="overflow-x-auto">
            <table className="w-full mt-5 rounded-md min-w-[640px]">
                <thead>
                <tr>
                    <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Status</th>
                    <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Item ID</th>
                    <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[300px]">Description</th>
                    <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[300px]"></th>
                </tr>
                </thead>
                <tbody>
                    {inventoryauditinfo.map((item, index) => (
                        <tr key={index} className={`text-center ${
                            index % 2 === 0 ? 'bg-white' : 'bg-[#F0F3F5]'
                          }`}>
                        <td className="px-2 py-5 flex justify-center"><Image 
                        src={`${item.status}`}
                        width={30}
                        height={30}
                        alt={`${item.status}`}
                        /> </td>
                        <td className='py-5'><a className='hover:underline text-blue-800' href="/inventory/itemdetails">{item.id}</a></td>
                        <td className="px-2 py-5">{item.description}</td>
                        <td className="px-2 py-5">
                            <div>
                                <button onClick={()=>{
                                    MySwal.fire({
                                        title: "Done!",
                                        text: "Reorder Successful!",
                                        icon: "success"
                                    });
                                }} className="bg-[#481620] text-white py-1 px-3 rounded-md">Reorder</button>
                            </div>
                        </td>
                    </tr> 
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default page