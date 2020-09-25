import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/view/signup/'
import DashboardCompany from './views/dashboard'
import AddEmployee from './views/addemployee'
import AddStudent from './views/addstudent'

function App() {
  return (
    <div >
    <Signup></Signup>
    <br/><br/><br/>
    <DashboardCompany/>
    <br/><br/><br/>
    <AddEmployee/>
    <br/><br/><br/>
    <AddStudent/>
    </div>
  );
}

export default App;
