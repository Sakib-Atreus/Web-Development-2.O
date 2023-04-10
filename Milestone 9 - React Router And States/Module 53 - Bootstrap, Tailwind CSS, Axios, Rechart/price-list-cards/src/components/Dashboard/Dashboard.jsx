import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        { id: 1, name: "John", phy: 90, chem: 85, math: 95 },
        { id: 2, name: "Alice", phy: 75, chem: 80, math: 70 },
        { id: 3, name: "Bob", phy: 60, chem: 70, math: 80 },
        { id: 4, name: "Emily", phy: 95, chem: 90, math: 85 },
        { id: 5, name: "David", phy: 85, chem: 75, math: 65 },
        { id: 6, name: "Sarah", phy: 70, chem: 60, math: 75 },
        { id: 7, name: "Mark", phy: 80, chem: 90, math: 85 },
        { id: 8, name: "Mia", phy: 95, chem: 85, math: 90 },
        { id: 9, name: "Adam", phy: 80, chem: 75, math: 70 },
        { id: 10, name: "Lucy", phy: 70, chem: 65, math: 75 },
        { id: 11, name: "Karen", phy: 85, chem: 90, math: 80 },
        { id: 12, name: "Tom", phy: 75, chem: 80, math: 85 }
      ];
      
    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={marksArray}
            >
                <Line dataKey='phy'></Line>
                <Line stroke="#8884d8" dataKey='chem'></Line>
                <Line stroke="#82ca9d" dataKey='math'></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;