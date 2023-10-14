import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PropertyMetricsChart = ({ data }) => {
  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="property" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="visits" stackId="a" fill="#8884d8" />
      <Bar dataKey="interactions" stackId="a" fill="#82ca9d" />
      {/* Agrega más métricas aquí */}
    </BarChart>
  );
};

export default PropertyMetricsChart;
