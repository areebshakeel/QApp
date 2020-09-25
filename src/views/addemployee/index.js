import React from 'react';
import {Row , Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Emp from '../../assets/signup.png'


function AddEmployee(){

    return(

        <>

        <Col style={{backgroundColor:'rgb(180, 180, 177)'}}>

         {/* navbar starts */}
         <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(32, 46, 46)', height:'7rem'}}>
            <Col>

                 <h1 style={{color: 'white'}}>ADD EMPLOYEE DATA </h1>
            
            </Col>
            <Col>
                <h2 style={{color: 'white'}}>Back</h2>
            
            </Col>
        </Row>
        {/* navbar ends */}
        <br/>
        <br/>

        <Row style={{display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
            <Col style={{height: 'auto', width:'20rem'}}>
            <Col>
               <label>Name:</label>
               <input type='text' className='form-control' placeholder='Enter Full Name'/>
            
            </Col>
            <Col>
               <label>Position:</label>
               <input type='text' className='form-control' placeholder='Enter Position'/>
             
            </Col>
            <Col>
               <label>Salary:</label>
               <input type='number' className='form-control' placeholder='Enter Salary'/>
             
            </Col>
            <Col>
               <label>Joining-Date:</label>
               <input type='date' className='form-control'/>
             
            </Col>
            <Col>
               <br/>
               <button className='btn btn-success'>ADD</button>
             
            </Col>
            </Col>

            <Col>

              <img src={Emp} height='400px'/>
            
            
            </Col>


        </Row>

        


        </Col>
        </>


    )


}

export default AddEmployee;