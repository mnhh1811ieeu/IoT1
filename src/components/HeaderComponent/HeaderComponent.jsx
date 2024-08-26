import React from 'react'
import { WrapperHeader } from './style'
import { Col } from 'antd'
import Search from 'antd/es/transfer/search'
import { HomeOutlined, SmileOutlined } from '@ant-design/icons'

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={4}>
         
        </Col>
        <Col span={12}>
          <Search
            placeholder="Tìm kiếm"
            enterButton="Search"

          />
        </Col>
       
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent