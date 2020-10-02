import React from 'react';
import {Row , Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from '../../assets/student.png'
import Footer from '../../components/footer'
import Button from '../../components/button'
import { useHistory } from "react-router-dom";


function AddStudent(){

   const allCompanies= [{name: 'factualCode',type:'software',
    number: '03007044599',timing: '09:00 AM',actions: 'factual'},
    {name: 'Koder Labs',type:'software',
     number: '03007044599',timing: '09:00 AM',actions: 'factual'}

]

   const history= useHistory();

    return(

        <>

        <Col style={{backgroundColor:'rgb(180, 180, 177)'}}>

         {/* navbar starts */}
         <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(32, 46, 46)', height:'7rem'}}>
            <Col>

                 <h1 style={{color: 'white'}}>All Companies List </h1>
            
            </Col>
            <Col>
               <a href=''> <h2 style={{color: 'white'}}  onClick={()=> history.push('/dashboard')}>Back</h2> </a>
            
            </Col>
        </Row>
        {/* navbar ends */}
        <br/>
        <br/>

        <Row style={{display: 'flex', alignItems:'center'}}>

           <Col>

           <label>Type:</label>
           
           </Col>
           <Col>
 
            
             <select className='form-control'>
                <option>   Software    </option>
                <option>   Construction   </option>
                <option>   IT    </option>
                <option>   Pharma    </option>
                <option>   petroleum    </option>
             </select>
           
           </Col>
           <Col>

                    <Button  text='filter'/>

            </Col>

            <Col style={{marginLeft: '8rem', display: 'flex', alignItems: 'center'}}>
                 <input className='form-control' type='text'/>
                 <span style={{marginLeft: '2rem'}}>
                 <Button text='Search'/>
                 </span>
            </Col>
        </Row>

        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3rem'}}>

           <Col>

              <table  style={{height: '20rem', width: '60rem'}} >

                 <tr style={{border: '1px solid black'}}>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Number</th>
                    <th>Timings</th>
                    <th>Actions</th>
                 </tr>
                 {allCompanies.map(function(item){

                    return(
                     <tr style={{border: '1px solid black'}}>
                     <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.number}</td>
                    <td>{item.timing}</td>
                    <td>{item.actions}</td>
                     
                  </tr>
                    )


                 })}
                 

               






              </table>
           
           
           </Col>
        </Row> 

        <br/><br/><br/>

      
        </Col>

        <Footer/>
        </>


    )


}

export default AddStudent;