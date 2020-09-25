import React from 'react';
import {Row , Col } from 'antd';




  
  

function DashboardCompany(){

   


    return(
        <>
       {/* navbar starts */}
        <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(32, 46, 46)', height:'7rem'}}>
            <Col>

                 <h1 style={{color: 'white'}}>Dashboard Of Company </h1>
            
            </Col>
            <Col>
                <h2 style={{color: 'white'}}>LogOut</h2>
            
            </Col>
        </Row>
        {/* navbar ends */}
        <Row>
            <Col>

                <table border='1'>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Joining-Date</th>
                        
                    </tr>
                    <tr>
                        <td>Hammad</td>
                        <td>Software Engineer</td>
                        <td>100000</td>
                        <td>25-02-2019</td>
                    </tr>


                </table>
            
            </Col>
        </Row>


        </>

    )
}

export default DashboardCompany;