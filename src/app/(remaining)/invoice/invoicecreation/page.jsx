import { invoicecreation } from '@/data/invoicecreation'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='bg-[#F0F3F5] m-5 p-10 rounded-lg '>
            <h2 className='m-5'>To</h2>
            <div>
                <form className="w-full p-5 grid gap-x-10 sm:grid-cols-1 md:grid-cols-2">
                  {invoicecreation.map((option) => (
                    <div key={option.id} className="mb-5 grid grid-cols-2">
                      <label
                        htmlFor={`input-${option.id}`}
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {option.title}
                      </label>
                      <input
                        type="text"
                        id={`input-${option.id}`}
                        className="bg-gray-50 border h-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  ))}
                   
                   <div className="md:col-span-2 flex justify-end">
                    <button className="bg-[#481620] w-[7rem] text-white py-2 px-2 rounded-xl">
                      Create
                    </button>
                  </div>
                
                </form>
            </div>
        </div>
    </div>
  )
}

export default page