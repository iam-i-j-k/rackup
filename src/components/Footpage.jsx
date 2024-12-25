import React from 'react'

const Footpage = () => {
    const start = 1;
    const size = 200;
    const end = 600;
  return (
    <div className='bg-[#F0F3F5]'>
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
    </div>
  )
}

export default Footpage