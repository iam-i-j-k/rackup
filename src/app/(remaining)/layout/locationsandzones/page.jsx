import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>

        <div>
            <h1 className='m-5 font-semibold'>
                Site Map
            </h1>
            <div className='flex items-center justify-center'>
                <Image 
                    width={800}
                    height={800}
                    alt='layout'
                    src='/layout.png'
                />
            </div>
        </div>
    </div>
  )
}

export default page