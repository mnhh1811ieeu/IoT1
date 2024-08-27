import React from 'react';

// Dữ liệu giả định cho biểu đồ
const data = [
  { time: '00:00', temperature: 22, humidity: 50, light: 100 },
  { time: '06:00', temperature: 20, humidity: 55, light: 300 },
  { time: '12:00', temperature: 26, humidity: 60, light: 800 },
  { time: '18:00', temperature: 24, humidity: 65, light: 500 },
];

// Biểu đồ kết hợp với trục thời gian
const CombinedChart = ({ data }) => {
  // Tạo điểm cho các đường biểu đồ
  const temperaturePoints = data.map((d, i) => `${i * 25},${100 - d.temperature}`).join(' ');
  const humidityPoints = data.map((d, i) => `${i * 25},${100 - d.humidity}`).join(' ');
  const lightPoints = data.map((d, i) => `${i * 25},${100 - (d.light / 10)}`).join(' '); // Chia light để phù hợp với tỉ lệ

  return (
    <svg width="100%" height="200" viewBox="0 0 100 100">
      {/* Trục Y */}
      <line x1="0" y1="0" x2="0" y2="100" stroke="black" strokeWidth="1" />
      
      {/* Trục X */}
      <line x1="0" y1="100" x2="100" y2="100" stroke="black" strokeWidth="1" />
      
      {/* Trục X - Nhãn thời gian */}
      {data.map((d, i) => (
        <text key={i} x={i * 25} y="105" textAnchor="middle" fontSize="3">
          {d.time}
        </text>
      ))}

      {/* Trục Y - Nhãn giá trị */}
      <text x="-10" y="10" textAnchor="middle" fontSize="4" transform="rotate(-90, -10, 10)">
        Giá Trị
      </text>

      {/* Biểu đồ */}
      <polyline
        fill="none"
        stroke="red"
        strokeWidth="2"
        points={temperaturePoints}
        strokeDasharray="5,5"
      />
      <polyline
        fill="none"
        stroke="blue"
        strokeWidth="2"
        points={humidityPoints}
        strokeDasharray="5,5"
      />
      <polyline
        fill="none"
        stroke="green"
        strokeWidth="2"
        points={lightPoints}
      />
      {data.map((d, i) => (
        <React.Fragment key={i}>
          <circle cx={i * 25} cy={100 - d.temperature} r="2" fill="red" />
          <circle cx={i * 25} cy={100 - d.humidity} r="2" fill="blue" />
          <circle cx={i * 25} cy={100 - (d.light / 10)} r="2" fill="green" />
        </React.Fragment>
      ))}
    </svg>
  );
};

const WeatherDashboard = () => {
  return (
    <div style={{ padding: '20px' }}>
     
      
      
        <CombinedChart data={data} />
      </div>
     
   
  );
};

export default WeatherDashboard;
