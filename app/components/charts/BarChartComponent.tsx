import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartComponentProps {
  data: { name: string; value: number }[];
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data }) => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
    </ResponsiveContainer>
);

export default BarChartComponent;
