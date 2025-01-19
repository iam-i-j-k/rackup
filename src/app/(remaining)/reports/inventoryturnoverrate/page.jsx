import PieGraph2 from '@/components/PieChart2'
import React from 'react'

const page = () => {
  return (
    <div>
        <h2 className='m-5 font-semibold'>Inventory Turnover</h2>
        <div>
            <PieGraph2 />
        </div>
    </div>
  )
}

export default page