"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Bar Graph Data for Inventory Levels
const barData = [
  { name: 'Apparel', count: 4000, value: 8000 },    
  { name: 'Furniture', count: 3000, value: 10000 },  
  { name: 'Electronics', count: 5000, value: 12000 },
  { name: 'Food', count: 2000, value: 6000 },      
  { name: 'Books', count: 1500, value: 5000 },       
];




const COLORS = ['#4CAF50', '#FFC107', '#F44336', '#2196F3'];

const BarGraph = () => {
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
          <Bar dataKey="count" fill="#8884d8" barSize={30} radius={[5, 5, 0, 0]} name="Available"/>
          <Bar dataKey="value" fill="#82ca9d" barSize={30} radius={[5, 5, 0, 0]} name="Percentage" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export default BarGraph