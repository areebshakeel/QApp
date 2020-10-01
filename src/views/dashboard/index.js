import React from 'react';
import * as firebase from 'firebase'
import {Row , Col } from 'antd';
import Footer from '../../components/footer'
import Button from '../../components/button'
import { useHistory } from "react-router-dom";




  
  

function DashboardCompany(){

    const history = useHistory()

        const signOutUser = function(){
            firebase.auth().signOut().then(function() {
                history.push('/')
              }).catch(function(error) {
                // An error happened.
              });
        }
        let userName = localStorage.getItem('name')

    return(
        <>
       {/* navbar starts */}
        <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(32, 46, 46)', height:'7rem'}}>
            <Col>

                 <h1 style={{color: 'white'}}>Dashboard Of <span style={{color: 'blue', fontFamily: 'sans-serif'}}>{userName} </span> </h1>
            
            </Col>
            <Col>
              <a href=''>  <h2 onClick={signOutUser} style={{color: 'white'}}>LogOut</h2> </a>
            
            </Col>
        </Row>
        {/* navbar ends */}


   <Row style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '6rem'}}>

           <Col>
                <Button onClick={()=> history.push('/addemployee')} text='Add Company'/>
                
           </Col>

           <Col> 
          
               <Button onClick={()=> history.push('/addstudent')} text='View Companies'/>
           </Col>

   </Row>

        



        


        <br/><br/><br/><br/><br/><br/><br/>

        
       <Footer/>
      
        </>

    )
}

export default DashboardCompany;