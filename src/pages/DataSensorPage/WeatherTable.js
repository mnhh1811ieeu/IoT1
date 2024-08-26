import React from 'react';

const WeatherTable = () => {
  
  const weatherData = [
    { id: 1, temperature: '30°C', humidity: '60%', time: '08:00 AM' },
    { id: 2, temperature: '32°C', humidity: '65%', time: '12:00 PM' },
    { id: 3, temperature: '28°C', humidity: '70%', time: '04:00 PM' },
    { id: 4, temperature: '25°C', humidity: '75%', time: '08:00 PM' },
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nhiệt độ</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Độ ẩm</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Thời gian</th>
        </tr>
      </thead>
      <tbody>
        {weatherData.map((row) => (
          <tr key={row.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.temperature}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.humidity}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
