"use client";

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Detailed Inventory Turnover Data
const inventoryData = [
  { name: 'Turned Over', value: 1500 },
  { name: 'Not Turned Over', value: 500 },
  { name: 'Partially Turned Over', value: 700 },
];

const COLORS = ['#4CAF50', '#F44336', '#FF9800']; // Green, Red, Orange

const InventoryTurnoverGraph = () => {
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, name
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return percent > 0.05 ? (
      <text
        x={x}
        y={y}
        fill="Black"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${name} ${(percent * 100).toFixed(1)}%`}
      </text>
    ) : null;
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-4">Inventory Turnover Breakdown</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Tooltip
            formatter={(value) => `${value.toLocaleString()} units`}
          />
          <Legend />
          <Pie
            data={inventoryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="60%"
            paddingAngle={5}
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {inventoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryTurnoverGraph;
