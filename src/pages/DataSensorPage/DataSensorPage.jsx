import React from 'react'
import Search from 'antd/es/transfer/search'
import { Col } from 'antd'
import { WrapperHeader } from './style'
import WeatherTable from './WeatherTable'
import ActionHistoryTable from './ActionHistoryTable'
const DataSensorPage = () => {
  return (
   <div>
    <h1>Weather Table</h1>
    <div style={{marginTop:'10px', marginBottom:'10px'}}>
      <WeatherTable />
      </div>
      <hr/>
      <h1>Action History Table</h1>
      <div style={{marginTop:'10px', marginBottom:'10px'}}><ActionHistoryTable/></div>
    </div>
  )
}

export default DataSensorPage