import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, LineChart } from 'recharts';

const Dashboard = () => {
      const data02 = [
        { name: 'A1', value: 60 },
        { name: 'A2', value: 59 },
        { name: 'A3', value: 60 },
        { name: 'A4', value: 57 },
        { name: 'A5', value: 53 },
        { name: 'A6', value: 59 },
        { name: 'A7', value: 60 },
        { name: 'A8', value: 60 },
      ];
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#8884d8" label />
            </PieChart>

            <h1 className='font-bold text-3xl'>This is the PieChart Of my Assignment Marks</h1>
        </div>
    );
};

export default Dashboard;