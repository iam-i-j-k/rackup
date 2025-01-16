import { Warehouse } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { MdEmail } from "react-icons/md";

const Page = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },
    {
      id: 1,
    },

    
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className='flex p-10 m-16 bg-[#F0F3F5] gap-10'>
          <div className='flex flex-col space-y-5'>
            <p>From:</p>
            <p>To: </p>
            <p>Subject: </p>
            <p className='text-3xl'><MdEmail /></p>
            <Link href='#'>show email details</Link>
          </div>
          <div className='flex flex-col space-y-5'>
            <p>Warehouse</p>
            <p>Vendor</p>
            <p>ORD012343</p>
            <p>Email sent</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Page;
