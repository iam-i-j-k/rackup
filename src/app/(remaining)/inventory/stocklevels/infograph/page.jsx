import BarGraph from '@/components/BarGraph'
import { itemdetailsinfo } from '@/data/itemdetailsinfo'
import React from 'react'

const page = () => {
  return (
    <div>
        <h2 className="font-semibold text-lg m-4">
                  Maaza Mango Drink, Original Flavour, 1.2L PET Bottle
                </h2>
        <BarGraph />
        <div className="h-auto m-5 p-5 rounded-xl bg-[#F0F3F5]">
                <h2 className="font-semibold text-lg mb-4">
                  Maaza Mango Drink, Original Flavour, 1.2L PET Bottle
                </h2>
                <form className="w-full p-5 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                  {itemdetailsinfo.map((option) => (
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
                        defaultValue={`${option.value}`}
                        className="bg-gray-50 border h-fit border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  ))}
                </form>
              </div>
    </div>
  )
}

export default page