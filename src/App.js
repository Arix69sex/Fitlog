import './App.css';
import Nav from './components/Nav.js'
import Login from './view/Login'
import Signup from './view/Signup'
import FirstInputs from './view/FirstInputs'
import Results from './view/Results'
import Goals from './view/Goals'
import ProtectedRoutes from './view/ProtectedRoutes'
import {BrowserRouter as Router, Routes, Route, Redirect} from "react-router-dom";
import Dashboard from "./view/Dashboard";

function App() {
    let user = JSON.parse(window.localStorage.getItem('user'));
    console.log(user === null)
  return (
    <Router>
        <Nav />
        <div>
          <Routes>
              <Route element={<ProtectedRoutes state="false"/>}>
                  <Route path="*" element={<Login />} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
              </Route>
              <Route element={<ProtectedRoutes state="true"/>}>
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
