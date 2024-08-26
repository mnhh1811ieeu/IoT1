import React from 'react';

const ActionHistoryTable = () => {
  const actionHistoryData = [
    { id: 1, deviceName: 'Device A', action: 'On', time: '09:00 AM' },
    { id: 2, deviceName: 'Device B', action: 'Off', time: '10:00 AM' },
    { id: 3, deviceName: 'Device A', action: 'Off', time: '11:00 AM' },
    { id: 4, deviceName: 'Device C', action: 'On', time: '12:00 PM' },
  ];

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Tên thiết bị</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>On/Off</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Thời gian</th>
        </tr>
      </thead>
      <tbody>
        {actionHistoryData.map((row) => (
          <tr key={row.id}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.deviceName}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.action}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActionHistoryTable;
