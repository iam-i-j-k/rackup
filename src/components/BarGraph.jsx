'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the Bar Graph
const data = [
  { name: 'January', desktop: 4000, mobile: 2400 },
  { name: 'February', desktop: 3000, mobile: 1398 },
  { name: 'March', desktop: 2000, mobile: 9800 },
  { name: 'April', desktop: 2780, mobile: 3908 },
  { name: 'May', desktop: 1890, mobile: 4800 },
  { name: 'June', desktop: 2390, mobile: 3800 },
];

const BarGraph = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Monthly Web Traffic</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="desktop" fill="#8884d8" barSize={30} radius={[5, 5, 0, 0]} />
          <Bar dataKey="mobile" fill="#82ca9d" barSize={30} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
