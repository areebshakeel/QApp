import React from 'react';
import {Row , Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer(){
    return(
        <>

        <Row style={{backgroundColor: 'rgb(32, 46, 46)', color: 'white',display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '12rem' }}>

            <Col span={6}>

              <h4>Developed By Areeb and Hammad</h4>
            
            </Col>
            <Col span={6}>
            <h4>Developed By Areeb and Hammad</h4>
            </Col>
            <Col span={6}>
            <h4>Developed By Areeb and Hammad</h4>
            </Col>
            <Col span={6}>
            <h4>Developed By Areeb and Hammad</h4>
            </Col>


        </Row>



        </>


    )
}

export default Footer;