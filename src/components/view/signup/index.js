import React, { useState } from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSS from '../../../App.css'
import Button from '../../../components/button/index'
import SignupImage from '../../../assets/signup.png'
import Logo from '../../../assets/logo.png'

function Signup(){

    const [firstName,setFirstName]=useState()
    const [lastName,setLastName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [confirmPassword,setConfirmPassword]=useState()

    const allInputs={

        firstName,
        lastName,
        email,
        password,
        confirmPassword
    }
    
    const sendData=function(){

        console.log(allInputs)
        // setFirstName('')
        // setLastName('')
        // setEmail('')
        // setPassword('')
        // setConfirmPassword('')

    }

   

    return(
        <div style={{display:"flex", justifyContent:'space-between', overflowX:"hidden", overflowY:"hidden"}} className="row">

            

                <div className="col-7 signupLeft">
                    <div className="row">
                        <div className="col-12">
                            <img className="logo" src={Logo} />
                        </div>

                    </div>
                    <div className="row" style={{display:"flex", justifyContent:"center"}}>
                        <div className="col-8">
                            <h1 className="heading">Welcome to the factualCode</h1>
                            <p className="text">We provide the best services in building up your Web and Mobile Application</p>
                            <div height="20px" className="row" >
                                <div className="col-8">
                                    <img className="mainImage" src={SignupImage}/>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div className="col-5 signupRight">

                    <div className="row inputDiv" style={{display:"flex", justifyContent:"center"}} >
                       <div className="col-8">

                           <h3 className="smallHeading">Register yourself Now to get conected with us</h3>

                       </div>
                        <div className="col-8">
                            <input onChange={(e)=> setFirstName(e.target.value)}  placeholder="First Name" className="form-control" style={{marginBottom:"2rem"}} />
                            <input onChange={(e)=> setLastName(e.target.value)}  placeholder="Last Name" className="form-control" style={{marginBottom:"2rem"}}/>
                            <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" className="form-control" style={{marginBottom:"2rem"}}/>
                            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" className="form-control" style={{marginBottom:"2rem"}}/>
                            <input onChange={(e)=> setConfirmPassword(e.target.value) } type="password" placeholder="Confirm Password" className="form-control" style={{marginTop:"2rem"}}/>

                            <div className="row" style={{display:"inline-list-item"}}>
                                <div className="col-12">
                                    <input type="checkbox"/>
                                </div>
                                <div className="col-8" >
                                    <Button onClick={sendData} >Signup</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           
        </div>
    )
}

export default Signup