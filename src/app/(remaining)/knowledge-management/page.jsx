'use client'
import { ReportDataContext } from '@/context/ReportContext'
import Link from 'next/link'
import React, { useContext } from 'react'

const Page = () => {
  const { reports } = useContext(ReportDataContext);

  return (
    <div>
      <div className="flex items-center justify-between px-5 py-2">
        <h2 className="font-semibold text-xl">Knowledge Management</h2>
        <Link
          href="/knowledge-management/createnewreport"
          className="bg-[#481620] text-sm text-white px-3 py-2 rounded-xl"
        >
          + Create New
        </Link>
      </div>

      <div>
        {reports.map((item) => {
          return (
            <div key={item.id} className="border-b-2 p-5 space-y-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p>by {item.author}</p>
              <div>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
