import React from 'react';
import Back from '@/components/Back';
import { stocklevelsinfo } from '@/data/stocklevelsinfo';
import Footpage from '@/components/Footpage';

const Page = () => {
  return (
    <div>
        
      <Back />
      <div className='h-screen my-5 py-5 rounded-xl bg-[#F0F3F5] overflow-auto'>
        <div className="overflow-x-auto">
          <table className='w-full mt-5 rounded-md min-w-[640px]'>
            <thead>
                <tr>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]'>Item ID</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]'>Item Name</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]'>Quantity in stock</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]'>Minimum stock level</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]'>Storage location</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]'>Dimensions</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]'>Volume</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]'>Category</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]'>Subcategory</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]'>Reorder quantity</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[180px]'>Unit of measure</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]'>Secondary location</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[150px]'>Weight</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 py-2 min-w-[200px]'>Material/composition</th>
                </tr>
            </thead>

            <tbody>
              {stocklevelsinfo.map((item, index) => (
                <tr className={`text-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  }`} key={index}>
                  <td className='py-5'><a href="/inventory/stocklevels/infograph">{item.id}</a></td>
                  <td className='py-5'>{item.name}</td>
                  <td className='py-5'>{item.quantity}</td>
                  <td className='py-5'>{item.minimumStock}</td>
                  <td className='py-5'>{item.location}</td>
                  <td className='py-5'>{item.dimensions}</td>
                  <td className='py-5'>{item.volume}</td>
                  <td className='py-5'>{item.category}</td>
                  <td className='py-5'>{item.subcategory}</td>
                  <td className='py-5'>{item.reorderQuantity}</td>
                  <td className='py-5'>{item.unit}</td>
                  <td className='py-5'>{item.secondaryLocation}</td>
                  <td className='py-5'>{item.weight}</td>
                  <td className='py-5'>{item.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <footer className='bg-[#F0F3F5]'>
        <Footpage />
      </footer>
    </div>
  );
};

export default Page;
