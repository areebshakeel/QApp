import React, {useState} from 'react';
import Button from '../../../components/button/index'
import SignupImage from '../../../assets/signup.png'
import Logo from '../../../assets/logo.png'
import { useHistory } from "react-router-dom";
import {loginUser} from '../../../config/firebase';




function LogIn(){

    const history = useHistory();

    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')


    const onLogin = async function(){

        try{
            await loginUser(email,password)
            alert('User Successfully Logged In!')
            history.replace('/dashboard')
        }catch(error){
            alert(error.message)
        }


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

                   <h3 className="smallHeading">Log In yourself Now to get conected with us</h3>

               </div>
                <div className="col-8">
                   
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" className="form-control" style={{marginBottom:"2rem"}}/>
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" className="form-control" style={{marginBottom:"2rem"}}/>
                   

                    <div className="row" style={{display:"inline-list-item"}}>
                        <div className="col-12">
                            <input type="checkbox"/>
                        </div>
                        <div className="col-8" >
                            <Button onClick={onLogin} text='Log In' ></Button>
                            <a href=''><span onClick={()=>history.push('/signup')}>Don't have an Account</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   
</div>
    )
}
// import { formatCountdown } from 'antd/lib/statistic/utils';

export default LogIn;