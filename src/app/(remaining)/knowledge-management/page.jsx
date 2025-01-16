import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <div>
          <div className='flex items-center justify-between px-5 py-2'>
            <h2 className='font-semibold text-xl'>Knowledge Management</h2>
            <Link href='/knowledge-management/createnewreport' className='bg-[#481620] text-sm text-white px-3 py-2 rounded-xl'>
              + Create New
            </Link>
          </div>
          <div className='p-5 border-y-2 space-y-5'>
            <p><span  className='font-semibold'>Time Sheet</span> by Jai</p>
            <div>
              <p>How time sheet is filled within set timelines and  navigations</p>
            </div>
          </div>
          <div className='p-5 border-b-2 space-y-5'>
            <h3 className='font-semibold'>Inventory Layout</h3>
            <div>
              <p>let me guide you how to read an auto layout what are the symbols mean in the situations</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default page