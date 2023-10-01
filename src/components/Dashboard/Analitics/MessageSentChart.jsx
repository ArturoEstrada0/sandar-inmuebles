import React from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

const MessageSentChart = ({ data }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="count" data={data} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default MessageSentChart;
