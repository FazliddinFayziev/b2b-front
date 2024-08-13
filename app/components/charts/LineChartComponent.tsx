import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartComponentProps {
  data: { name: string; value: number }[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => (
    <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
    </ResponsiveContainer>
);

export default LineChartComponent;
