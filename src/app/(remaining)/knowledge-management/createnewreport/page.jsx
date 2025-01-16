import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="font-semibold text-xl">Create New Report</h2>
          <button className="bg-gray-200 text-sm px-3 py-2 rounded-xl hover:bg-gray-300">
            Cancel
          </button>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
          {/* Title Section */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Title</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#481620] focus:border-[#481620] outline-none"
              placeholder="Enter report title"
            />
          </div>

          {/* Author Section */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Author</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#481620] focus:border-[#481620] outline-none"
              placeholder="Your name"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Content</label>
            <textarea 
              className="w-full p-2 border rounded-lg h-48 focus:ring-2 focus:ring-[#481620] focus:border-[#481620] outline-none"
              placeholder="Write your report content here..."
            />
          </div>

          {/* Category Section */}
          <div className="space-y-2">
            <label className="block font-medium text-gray-700">Category</label>
            <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#481620] focus:border-[#481620] outline-none">
              <option value="">Select a category</option>
              <option value="timesheet">Time Sheet</option>
              <option value="inventory">Inventory</option>
              <option value="process">Process Documentation</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button className="w-full bg-[#481620] text-white px-4 py-2 rounded-xl hover:bg-[#5c1c29] transition-colors">
              Create Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;