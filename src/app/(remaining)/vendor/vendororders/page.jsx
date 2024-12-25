import Footpage from '@/components/Footpage';
import { vendororders } from '@/data/vendororders';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto">
        <div className="overflow-x-auto">
          <table className="w-full mt-5 rounded-md min-w-[640px]">
            <thead>
              <tr>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[130px]">Order ID</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[130px]">Vendor Name</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]">Product Description</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Order Date</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Status Info</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Order Priority</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Payment Status</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Total Amount</th>
              </tr>
            </thead>

            <tbody>
              {vendororders.map((item, index) => (
                <tr
                  className={`text-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F0F3F5]'
                  }`}
                  key={index}
                >
                  <td className="px-2 py-5">{item.orderid}</td>
                  <td className="px-2 py-5">{item.vendorname}</td>
                  <td className="px-2 py-5">{item.desc}</td>
                  <td className="px-2 py-5">{item.orderdate}</td>
                  <td className="px-2 py-5">{item.status}</td>
                  <td className="px-2 py-5">{item.orderpriority}</td>
                  <td className="px-2 py-5">{item.paymentstatus}</td>
                  <td className="px-2 py-5">{item.totalamount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footpage />
    </div>
  );
};

export default page;
