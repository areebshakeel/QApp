import React from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CSS from '../../../src/App.css'

function Button(props) {

    return(
        <div>
                <button className="btn btn-primary btn-lg" {...props}
                style={{paddingLeft:"40px", paddingRight:"40px", paddingTop:"10px",paddingBottom:"10px", background:"darkslategray"}}>
                    Signup</button>
        </div>
    )
    
}

export default Button  