import React from 'react';
import {Row , Col } from 'antd';
import Footer from '../../components/footer'
import Button from '../../components/button'




  
  

function DashboardCompany(){

   


    return(
        <>
       {/* navbar starts */}
        <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(32, 46, 46)', height:'7rem'}}>
            <Col>

                 <h1 style={{color: 'white'}}>Dashboard Of Company </h1>
            
            </Col>
            <Col>
              <a href=''>  <h2 style={{color: 'white'}}>LogOut</h2> </a>
            
            </Col>
        </Row>
        {/* navbar ends */}


        <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '6rem'}}>

            {/* first table starts */}
            <Col>

               <h1>Employees Data</h1>

                <table style={{height: '20rem', width:'30rem'}} border='1'>
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
                    <tr>
                        <td>Hammad</td>
                        <td>Software Engineer</td>
                        <td>100000</td>
                        <td>25-02-2019</td>
                    </tr>
                    <tr>
                        <td>Hammad</td>
                        <td>Software Engineer</td>
                        <td>100000</td>
                        <td>25-02-2019</td>
                    </tr>


                </table>
                <br/>

                {/* <button 

                style={{

                    backgroundColor: 'rgb(32, 46, 46)',
                    color: 'white',
                    borderRadius: '10px',
                    width:'8rem'


                }}
                
                >Add Employee</button> */}
                <Button text='Add Employee'/>
            
            </Col>
            {/* first table ends */}
            

            {/* second table starts */}
            <Col>
              <h1>Students Data</h1>           
 
               <table style={{height: '20rem', width:'30rem'}} border='1'>
                  <tr>
                      <th>Name</th>
                      <th>Class</th>
                       <th>Number</th>
                      <th>Age</th>
        
                 </tr>
                 <tr>
                     <td>Saad</td>
                     <td>FC-MS 01</td>
                     <td>03127865655</td>
                     <td>22</td>
                </tr>
                <tr>
                     <td>Saad</td>
                     <td>FC-MS 01</td>
                     <td>03127865655</td>
                     <td>22</td>
                </tr>
                <tr>
                     <td>Saad</td>
                     <td>FC-MS 01</td>
                     <td>03127865655</td>
                     <td>22</td>
                </tr>
               


              </table>
              <br/>
              {/* <button 

style={{

    backgroundColor: 'rgb(32, 46, 46)',
    color: 'white',
    borderRadius: '10px',
    width:'8rem'


}}

>Add Student</button> */}
<Button text='Add Student'/>

          </Col>
          {/* second table ends */}



        </Row>


        <br/><br/>

        
       <Footer/>
      
        </>

    )
}

export default DashboardCompany;