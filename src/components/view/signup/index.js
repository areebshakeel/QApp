import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSS from '../../../App.css'
// import SignupImage from '../../../assets/signup.png'

function Signup(){

    return(
        <div className="row">

            

                <div className="col-4 signupLeft">

                    <div>
                        <h1>Welcome to the factualCode</h1>
                        <p>We provide the best services in building up your Web and Mobile Application</p>
                        <img src={'../../../assets/signup.png'}/>
                    </div>
    
                </div>
                <div className="col-8 signupRight">

                    <div className="row" style={{justifyContent:"center"}} >
                        <div className="col-5" style={{border:"solid green", marginRight:"4rem"}} >
                            <input className="form-control" id="inputs"/>
                            <input className="form-control"/>
                            <input className="form-control"/>
                            <input className="form-control"/>
                            <input className="form-control"/>
                            <div className="row">
                                <div className="col-4">
                                <input type="checkbox"/>
                                </div>
                                <div className="col-8">
                                <button className="btn btn-primary btn-lg">Signup</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           
        </div>
    )
}

export default Signup