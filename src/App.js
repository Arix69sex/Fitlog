import './App.css';
import React, {useEffect, useState} from 'react';
import Nav from './components/Nav.js'
import Login from './view/Login'
import Signup from './view/Signup'
import FirstInputs from './view/FirstInputs'
import Results from './view/Results'
import Goals from './view/Goals'
import Landing from './view/Landing'
import ProtectedRoutes from './view/ProtectedRoutes'
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import Dashboard from "./view/Dashboard";

function App() {
    const [navState, setNavState] = useState("transparent");

    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('user'));
        if (user !== null){
           setNavState("normal")
        }
        else setNavState("transparent")
    });

    let user = JSON.parse(window.localStorage.getItem('user'));

  return (
    <Router>
        <Nav type={"transparent"} />
        <div>
          <Routes>
              <Route path="landing" element={<Landing />} />
              <Route element={<ProtectedRoutes state="false"/>}>
                  <Route path="*" element={<Landing />} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
              </Route>
              <Route element={<ProtectedRoutes state="true"/>}>
                  <Route path="*" element={<Dashboard />} />
                  <Route path="/first" element={<FirstInputs/>} />
                  <Route path="/results" element={<Results/>} />
                  <Route path="/goals" element={<Goals/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
              </Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
