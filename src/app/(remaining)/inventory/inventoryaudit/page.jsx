import { inventoryauditinfo } from '@/data/inventoryauditinfo';
import React from 'react';

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
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]">Audit Date</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]">Auditor Name</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]">Audit Status</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]">Location</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]">Condition Status</th>
                <th className="border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]">Updated By</th>
              </tr>
            </thead>

            <tbody>
              {inventoryauditinfo.map((item, index) => (
                <tr
                  className={`text-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  }`}
                  key={index}
                >
                  <td className="px-2 py-5">
                    {item.id}
                  </td>
                  <td className="px-2 py-5">{item.description}</td>
                  <td className="px-2 py-5">{item.auditDate}</td>
                  <td className="px-2 py-5">{item.auditorName}</td>
                  <td className="px-2 py-5">{item.auditStatus}</td>
                  <td className="px-2 py-5">{item.location}</td>
                  <td className="px-2 py-5">{item.ConditionStatus}</td>
                  <td className="px-2 py-5">{item.UpdatedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
