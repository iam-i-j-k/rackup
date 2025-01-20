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
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Item ID</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[300px]">Description</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]">Date</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Receipt Number</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Amount</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Status</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]">Payment Method</th>
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
                  <td className='py-5'><a className='hover:underline text-blue-800' href="/inventory/itemdetails">{item.id}</a></td>
                  <td className="px-2 py-5">{item.description}</td>
                  <td className="px-2 py-5">{item.date}</td>
                  <td className="px-2 py-5">{item.receiptnumber}</td>
                  <td className="px-2 py-5">{item.amount}</td>
                  <td className="px-2 py-5 font-semibold">{item.paymentstatus}</td>
                  <td className="px-2 py-5">{item.paymentmethod}</td>
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