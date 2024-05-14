
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface RevenueData {
    month: string;
    total_amount: number;
}

interface RevenueChartProps {
    revenue: RevenueData[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ revenue }) => {
    // Transform the revenue data here
    const revenueData = revenue.map(row => ({
        month: row.month,
        total_amount: row.total_amount
    }));

    return (
        <div style={{ width: '100%', height: 300 }}>
            <h2>Revenue Chart</h2>
            <ResponsiveContainer>
                <BarChart
                    data={revenueData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total_amount" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RevenueChart;


