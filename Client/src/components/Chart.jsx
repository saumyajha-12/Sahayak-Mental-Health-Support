import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { day: 'Monday', '2023': 65, '2024': 21 },
  { day: 'Tuesday', '2023': 8, '2024': 48 },
  { day: 'Wednesday', '2023': 90, '2024': 40 },
  { day: 'Thursday', '2023': 81, '2024': 19 },
  { day: 'Friday', '2023': 56, '2024': 96 },
  { day: 'Saturday', '2023': 55, '2024': 27 },
  { day: 'Sunday', '2023': 40, '2024': 99 },
];

const CustomChart = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <h2 style={{ textAlign: 'center' }}>Your Weekly Progress</h2>
      <p style={{ textAlign: 'center' }}>Track your mood and activity throughout the week</p>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="2023" fill="#3498db" name="Improvement" />
          <Bar dataKey="2024" fill="#27ae60" name="Sleep" />
        </BarChart>
      </ResponsiveContainer>
      <p style={{ textAlign: 'center', marginTop: 10, fontSize: 12 }}>
        Made with Recharts
      </p>
    </div>
  );
};

export default CustomChart;
