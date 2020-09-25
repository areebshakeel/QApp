import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/view/signup/'
import DashboardCompany from './views/dashboard'

function App() {
  return (
    <div >
    <Signup></Signup>
    <br/><br/><br/>
    <DashboardCompany/>
    </div>
  );
}

export default App;
