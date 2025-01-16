"use client";

import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

// Sample data for employee productivity metrics
const data = [
  { name: 'Completed Tasks', value: 500 },
  { name: 'In Progress', value: 300 },
  { name: 'Pending Review', value: 200 },
  { name: 'On Leave', value: 100 },
  { name: 'Idle Time', value: 50 },
];

const COLORS = ['#4CAF50', '#FFC107', '#2196F3', '#FF5722', '#9E9E9E'];

const EmployeeGraph = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Employee Productivity Metrics</h2>
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

export default EmployeeGraph;
