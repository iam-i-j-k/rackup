import BarGraph from '@/components/BarGraph'
import BarGraph2 from '@/components/BarGraph2'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-center mb-10'>
            <div className='flex flex-col w-screen h-full pl-10'>
                <h2 className='my-5 font-semibold'>Occupancy Metrics</h2>
                <div className='w-[80%] h-[50%]'>
                    <BarGraph />
                </div>
                <div className='flex flex-col gap-10 pt-10'>
                    <p>Occupancy Rate: 70%</p>
                    <p>Peak Occupancy: Q1 JFM</p>
                    <p>Utilization Rate: 16.6 hrs</p>
                </div>
            </div>
            <div className='flex flex-col w-screen h-full pl-10'>
                <h2 className='my-5 font-semibold'>Usage Patterns</h2>
                <div className='w-[80%] h-[50%]'>
                    <BarGraph2 />
                </div>
                <div className='flex flex-col gap-10 pt-10'>
                    <p>Space Characteristics</p>
                    <p>Total Area: 5000sq.ft</p>
                    <p>Seating Capacity: 50 seats</p>
                    <p>Space Type: Storage Room</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center mb-10'>
            <div className='flex flex-col w-screen h-full pl-10'>
                <h2 className='my-5 font-semibold'>Occupancy Metrics</h2>
                <div className='w-[80%] h-[50%]'>
                    <BarGraph />
                </div>
                <div className='flex flex-col gap-10 pt-10'>
                    <p>Occupancy Rate: 70%</p>
                    <p>Peak Occupancy: Q1 JFM</p>
                    <p>Utilization Rate: 16.6 hrs</p>
                </div>
            </div>
            <div className='flex flex-col w-screen h-full pl-10'>
                <h2 className='my-5 font-semibold'>Usage Patterns</h2>
                <div className='w-[80%] h-[50%]'>
                    <BarGraph2 />
                </div>
                <div className='flex flex-col gap-10 pt-10'>
                    <p>Space Characteristics</p>
                    <p>Total Area: 5000sq.ft</p>
                    <p>Seating Capacity: 50 seats</p>
                    <p>Space Type: Storage Room</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page