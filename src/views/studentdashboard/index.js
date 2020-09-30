import React from 'react';
import {Row , Col } from 'antd';
import Footer from '../../components/footer'
import Button from '../../components/button'
import { useHistory } from "react-router-dom";


function StudentDashboard(){
    return(
        <>

         {/* navbar starts */}
         <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(32, 46, 46)', height:'7rem'}}>
            <Col>

                 <h1 style={{color: 'white'}}>Dashboard Of Student </h1>
            
            </Col>
            <Col>
              <a href=''>  <h2 style={{color: 'white'}}>LogOut</h2> </a>
            
            </Col>
        </Row>
        {/* navbar ends */}

        <Row>

            <Col>

            
            
            </Col>


        </Row>





        </>


    )
}

export default StudentDashboard;