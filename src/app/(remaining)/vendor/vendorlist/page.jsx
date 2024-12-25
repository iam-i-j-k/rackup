import Footpage from '@/components/Footpage';
import { vendorlist } from '@/data/vendorlistinfo';
import React from 'react';

const page = () => {
  return (
    <div>
      <div className="h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto">
        <div className="overflow-x-auto">
          <table className="w-full mt-5 rounded-md min-w-[640px]">
            <thead>
              <tr>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Name</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[300px]">Product</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[130px]">Location</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Status</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]">Contact Info</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]">Rating</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]">Updated By</th>
              </tr>
            </thead>

            <tbody>
              {vendorlist.map((item, index) => (
                <tr
                  className={`text-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-[#F0F3F5]'
                  }`}
                  key={index}
                >
                  <td className="px-2 py-5">{item.Name}</td>
                  <td className="px-2 py-5">{item.Product}</td>
                  <td className="px-2 py-5">{item.Location}</td>
                  <td className="px-2 py-5">{item.Status}</td>
                  <td className="px-2 py-5">{item.Contactinfo}</td>
                  <td className="px-2 py-5">{item.Rating}</td>
                  <td className="px-2 py-5">{item.UpdatedBy}</td>
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
