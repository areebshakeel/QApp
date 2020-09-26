import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignUp from '../components/view/signup'
import Dashboard from '../views/dashboard'
import AddEmployee from '../views/addemployee'
import AddStudent from '../views/addstudent'

export default function MainRouter(){
    return (
        <Router>
          <div>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav> */}
    
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
            <Route path="/addstudent">
                <AddStudent/>
              </Route>
              <Route path="/addemployee">
                <AddEmployee/>
              </Route>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
              <Route path="/">
                <SignUp/>
              </Route>
            </Switch>
          </div>
        </Router>
      );
}