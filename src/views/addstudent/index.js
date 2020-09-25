import React from 'react';
import {Row , Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from '../../assets/student.png'
import Footer from '../../components/footer'
import Button from '../../components/button'


function AddStudent(){

    return(

        <>

        <Col style={{backgroundColor:'rgb(180, 180, 177)'}}>

         {/* navbar starts */}
         <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(32, 46, 46)', height:'7rem'}}>
            <Col>

                 <h1 style={{color: 'white'}}>ADD STUDENT DATA </h1>
            
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
               <label>Class:</label>
               <input type='text' className='form-control' placeholder='Enter Position'/>
             
            </Col>
            <Col>
               <label>Number:</label>
               <input type='number' className='form-control' placeholder='Enter Salary'/>
             
            </Col>
            <Col>
               <label>Age:</label>
               <input type='number' className='form-control' placeholder='Enter Age'/>
             
            </Col>
            <Col>
               <br/>
               {/* <button className='btn btn-primary'>ADD</button> */}
               <Button text='ADD'/>
             
            </Col>
            </Col>

            <Col>

              <img src={Student} height='400px'/>
            
            
            </Col>


        </Row>

        <br/><br/><br/> <br/> <br/>

        <Footer/>
        </Col>
        
        </>


    )


}

export default AddStudent;