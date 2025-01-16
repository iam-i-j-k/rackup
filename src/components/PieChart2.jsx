"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';


// Pie Chart Data for Order Status
const pieData = [
    { name: 'Returned', value: 200 },
    { name: 'Shipped', value: 800 },
    { name: 'Processing', value: 500 },
    { name: 'Awaiting Shipment', value: 300 },
];

const COLORS = ['#4CAF50', '#FFC107', '#F44336', '#2196F3'];


const PieGraph2 = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 py-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Order Status Breakdown</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius="80%"
            label={(entry) => `${entry.name}: ${entry.value}`}
            fill="#8884d8"
            paddingAngle={5}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieGraph2