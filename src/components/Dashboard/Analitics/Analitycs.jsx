import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Analitycs = () => {
  const data = [
    { name: 'Enero', ventas: 12 },
    { name: 'Febrero', ventas: 19 },
    { name: 'Marzo', ventas: 3 },
    { name: 'Abril', ventas: 5 },
    { name: 'Mayo', ventas: 2 },
  ];

  return (
    <BarChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="ventas" fill="#8884d8" />
    </BarChart>
  );
};

export default Analitycs;
