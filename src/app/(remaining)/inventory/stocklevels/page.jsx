import React from 'react';
import Back from '@/components/Back';
import { stocklevelsinfo } from '@/data/stocklevelsinfo';
import Image from 'next/image';

const Page = () => {
    const start = 1;
    const size = 200;
    const end = 600;
  return (
    <div>
      <Back />
      <div className='h-screen m-5 p-5 rounded-xl bg-[#F0F3F5] overflow-auto'>
        <div className="overflow-x-auto">
          <table className='w-full mt-5 rounded-md min-w-[640px]'>
            <thead>
                <tr>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[150px]'>Item ID</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[200px]'>Item Name</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[180px]'>Quantity in stock</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[180px]'>Minimum stock level</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[200px]'>Storage location</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[200px]'>Dimensions</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[150px]'>Volume</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[180px]'>Category</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[200px]'>Subcategory</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[180px]'>Reorder quantity</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[180px]'>Unit of measure</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[200px]'>Secondary location</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[150px]'>Weight</th>
                    <th className='border-b border-slate-500 font-semibold gap-10 p-2 min-w-[200px]'>Material/composition</th>
                </tr>
            </thead>

            <tbody>
              {stocklevelsinfo.map((item, index) => (
                <tr className='text-center' key={index}>
                  <td className='px-2 py-5'><a href="/inventory/stocklevels/infograph">{item.id}</a></td>
                  <td className='px-2 py-5'>{item.name}</td>
                  <td className='px-2 py-5'>{item.quantity}</td>
                  <td className='px-2 py-5'>{item.minimumStock}</td>
                  <td className='px-2 py-5'>{item.location}</td>
                  <td className='px-2 py-5'>{item.dimensions}</td>
                  <td className='px-2 py-5'>{item.volume}</td>
                  <td className='px-2 py-5'>{item.category}</td>
                  <td className='px-2 py-5'>{item.subcategory}</td>
                  <td className='px-2 py-5'>{item.reorderQuantity}</td>
                  <td className='px-2 py-5'>{item.unit}</td>
                  <td className='px-2 py-5'>{item.secondaryLocation}</td>
                  <td className='px-2 py-5'>{item.weight}</td>
                  <td className='px-2 py-5'>{item.material}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer className='bg-[#F0F3F5]'>
        <div className='flex items-center justify-around p-5'>
            <div>
                <p>Page {start}</p>
            </div>
            <div>
                <a className='flex' href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 100 100" fill="black">
                        <polygon points="20,50 80,10 80,90"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 100 100" fill="black">
                        <polygon points="20,50 80,10 80,90"/>
                    </svg>
                </a>
            </div>
            <div>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 100 100" fill="black">
                        <polygon points="20,50 80,10 80,90"/>
                    </svg>
                </a>
            </div>
            <div>
                <div className='bg-white w-20 h-10 flex items-center justify-center rounded-xl'>
                    <p>{`${start} to ${size}`}</p>
                </div>
            </div>
            <div>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}  viewBox="0 0 100 100" fill="black">
                        <polygon points="80,50 20,10 20,90"/>
                    </svg>
                </a>
            </div>
            <div>   
                <a className='flex' href="">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}  viewBox="0 0 100 100" fill="black">
                        <polygon points="80,50 20,10 20,90"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}  viewBox="0 0 100 100" fill="black">
                        <polygon points="80,50 20,10 20,90"/>
                    </svg>
                </a>
            </div>
            <div>
                <p>of {end}</p>
            </div>
            

        </div>
      </footer>
    </div>
  );
};

export default Page;
