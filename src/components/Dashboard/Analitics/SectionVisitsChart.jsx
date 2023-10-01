import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SectionVisitsChart = ({ data }) => {
  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="section" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="visits" fill="#8884d8" />
    </BarChart>
  );
};

export default SectionVisitsChart;
