"use client";

import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

// Sample data for vendor performance metrics
const data = [
  { name: 'On-time Deliveries', value: 600 },
  { name: 'Delayed Deliveries', value: 200 },
  { name: 'Quality Issues', value: 150 },
  { name: 'Cancellations', value: 50 },
  { name: 'Excellent Feedback', value: 300 },
];

const COLORS = ['#4CAF50', '#FF9800', '#F44336', '#9C27B0', '#3F51B5'];

const VendorGraph = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 className='font-semibold' style={{ textAlign: 'center', marginBottom: '20px' }}>Vendor Performance Metrics</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => `${entry.name}: ${entry.value}`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VendorGraph;
