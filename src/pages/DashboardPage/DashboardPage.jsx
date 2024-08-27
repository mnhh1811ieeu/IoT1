import React from 'react'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { Button } from "antd";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WeatherDashboard from './WeatherDashboard';
const DashboardPage = () => {
  return (
    <div>
       <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <tbody>
        <tr>
          <td>25 độ C <ThermostatIcon/></td>
          <td>60% <WaterDropIcon/></td>
          <td>Ánh sáng <WbSunnyIcon/></td>
        </tr>
        <tr>
          <td rowSpan="3" colSpan="2"><WeatherDashboard/></td>
          <td>Quạt  <Button/> </td>
        </tr>
        <tr>
          <td><LightbulbIcon/><Button/>  </td>
        </tr>
        <tr>
          <td>air conditionar <AcUnitIcon/></td>
        </tr>
      </tbody>
    </table>
       </div>
  )
}

export default DashboardPage