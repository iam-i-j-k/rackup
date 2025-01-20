'use client'
import React from 'react';
import Back from '@/components/Back';
import { newreturnorder } from '@/data/newreturnorder';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const page = () => {

  const MySwal = withReactContent(Swal)

  return (
    <div>
      <Back 
        link={"order/returnorders"}
      />
      <div className="h-auto m-5 p-5 rounded-xl bg-[#F0F3F5]">
        <form onSubmit={(e)=>{
          e.preventDefault()
          MySwal.fire({
            title: "Done!",
            text: "Return Order Placed Successfully!",
            icon: "success"
          });
          }} className="w-full p-5 grid gap-x-10 sm:grid-cols-1 md:grid-cols-2">
          {newreturnorder.map((option) => (
            <div key={option.id} className="mb-5 grid grid-cols-2">
              <label
                htmlFor={`input-${option.id}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {option.title}
              </label>
              <input
                required
                type="text"
                id={`input-${option.id}`}
                className="bg-gray-50 border h-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          ))}
           <div className="md:col-span-2 flex justify-end">
           <div>
              <button className="bg-[#481620] text-white py-1 px-3 rounded-md">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default page;
