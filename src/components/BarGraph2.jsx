"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Bar Graph Data for Inventory Levels
const barData = [
    { name: 'Miscellaneous', items: 1000, reserved: 500 },
    { name: 'Packaging Supplies', items: 3000, reserved: 1000 },
    { name: 'Raw Materials', items: 4000, reserved: 1500 },
    { name: 'Finished Goods', items: 2500, reserved: 1200 },
    { name: 'Spare Parts', items: 2000, reserved: 900 },
  ];


const COLORS = ['#4CAF50', '#FFC107', '#F44336', '#2196F3'];

const BarGraph2 = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Inventory Levels by Category</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="items" fill="#8884d8" barSize={30} radius={[5, 5, 0, 0]} name="Available" />
          <Bar dataKey="reserved" fill="#82ca9d" barSize={30} radius={[5, 5, 0, 0]} name="Reserved" />

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph2