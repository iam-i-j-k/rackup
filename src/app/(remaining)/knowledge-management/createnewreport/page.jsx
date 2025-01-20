'use client';
import { ReportDataContext } from '@/context/ReportContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';

const Page = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  // Accessing report and setReport from context
  const { reports, setReports } = useContext(ReportDataContext);

  const toggleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!title || !author || !content) {
      alert('All fields are required');
      return;
    }

    const newReport = {
      id: reports.length + 1, // Generate a new ID for the new report
      title,
      author,
      content,
    };

    // Update the global context with the new report
    setReports([...reports, newReport]);

    // Reset local state
    setTitle('');
    setAuthor('');
    setContent('');
    
    // Navigate to the reports page after update
    router.push('/knowledge-management');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="font-semibold text-xl">Create New Report</h2>
          <Link
            href="/knowledge-management"
            className="bg-gray-200 text-sm px-3 py-2 rounded-xl hover:bg-gray-300"
          >
            Cancel
          </Link>
        </div>

        {/* Form */}
        <form
          onSubmit={toggleSubmit}
          className="bg-white p-6 rounded-lg shadow-sm space-y-6"
        >
          {/* Title Section */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#481620] focus:border-[#481620] outline-none"
              placeholder="Enter report title"
            />
          </div>

          {/* Author Section */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#481620] focus:border-[#481620] outline-none"
              placeholder="Your name"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border rounded-lg h-48 focus:ring-2 focus:ring-[#481620] focus:border-[#481620] outline-none"
              placeholder="Write your report content here..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#481620] text-white px-4 py-2 rounded-xl hover:bg-[#5c1c29] transition-colors"
              disabled={!title || !author || !content} // Disable button if any field is empty
            >
              Create Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
