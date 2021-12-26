import React, {useState, useEffect} from 'react';
import '../index.css';
import {useNavigate} from "react-router-dom";
import { FaBars, FaUserAlt, FaChartBar, FaThLarge, FaSignOutAlt } from "react-icons/fa";

function Nav(props) {
    const [showDrawer, setShowDrawer] = React.useState(false)
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [username, setUsername] = React.useState('')

    const navigator = useNavigate();

    function navigateToLogin() {
        navigator('/login');
    }

    function navigateToSignup() {
        navigator('/signup');
    }

    function navigateToDashboard() {
        navigator('/dashboard');
    }

    function logout(){
        window.localStorage.removeItem('user')
        navigator('/login');
        setLoggedIn(false)
        setShowDrawer(false)
    }

    useEffect(() => {
        let user = JSON.parse(window.localStorage.getItem('user'));
        if (user !== null) {
            setLoggedIn(true)
            setUsername(user.username)
        }
        else setLoggedIn(false)
    });

    function handleDrawer() {
        if (showDrawer === false) setShowDrawer(true)
        else setShowDrawer(false)
    }

    let navDrawer = function()  {
        return (
            <div className="flex flex-col absolute z-10 w-screen xl:w-1/6 h-screen l-0 t-0 bg-deep-blue text-white rounded-r-md">
                <div className="flex flex-row ml-10 mr-auto text-2xl text-white my-2.5">
                    <FaBars className="my-1 cursor-pointer" style={{color: 'white', fontSize: '30px'}} onClick={handleDrawer}/>
                    <h3 className="ml-5 mr-auto text-3xl text-white font-regular">
                        FitLog
                    </h3>
                </div>

                <div className="flex flex-col ml-5 w-4/5 mt-20 mb-auto">
                    <div className="flex flex-row w-full text-white hover:bg-highlight-blue rounded-md mb-10 mt-14 justify-center xl:justify-start  pl-5 py-2.5" onClick={navigateToDashboard}>
                        <FaThLarge style={{color: 'white', fontSize: '30px'}}/>
                        <h3 className="text-xl ml-5">Dashboard</h3>
                    </div>

                    <div className="flex flex-row w-full text-white hover:bg-highlight-blue rounded-md mb-10 pl-5 py-2.5 justify-center xl:justify-start">
                        <FaUserAlt style={{color: 'white', fontSize: '30px'}}/>
                        <h3 className="text-xl ml-5">Profile</h3>
                    </div>

                    <div className="flex flex-row w-full text-white hover:bg-highlight-blue rounded-md mb-10  pl-5 py-2.5 justify-center xl:justify-start">
                        <FaChartBar style={{color: 'white', fontSize: '30px'}}/>
                        <h3 className="text-xl ml-5">Analytics</h3>
                    </div>
                </div>

                <div className="flex flex-row w-4/5 text-white hover:bg-highlight-blue rounded-md mb-10 pl-5 py-2.5 ml-5 justify-center xl:justify-start" onClick={logout}>
                    <FaSignOutAlt style={{color: 'white', fontSize: '30px'}}/>
                    <h3 className="text-2xl ml-5">Logout</h3>
                </div>

            </div>
        )
    }

    let showLogo = function () {
        if (loggedIn) {
            return (
                <div className="flex flex-row ml-10 mr-auto text-2xl text-white my-2.5">
                    <FaBars className="my-1" style={{color: 'white', fontSize: '30px'}} onClick={handleDrawer}/>
                    <h3 className="ml-5 mr-auto text-3xl text-white ">
                        FitLog
                    </h3>
                </div>
                );

        }else {
            return (
                <div className="ml-10 mr-auto">
                    <h3 className="text-3xl text-white my-2.5">
                        FitLog
                    </h3>
                </div>
            );
        }
    }

    if (props.type === "transparent") return (
        <nav className="w-full h-auto flex flex-row z-20 absolute top-0 bg-transparent">
            {showDrawer ? navDrawer(): null}
            {showLogo()}
            <div className="flex flex-row">
                {!loggedIn ?
                    <button className="mx-1 text-xl text-highlight-blue my-2.5 rounded-md bg-white h-10 pl-5 pr-5 transition-all duration-500 ease-linear xl:hover:bg-highlight-blue xl:hover:text-white" onClick={navigateToLogin}>
                    <b>Login</b>
                </button>: null}
                {!loggedIn ?
                    <button className="mx-1 text-xl text-highlight-blue my-2.5 ml-1.5 mr-5 rounded-md bg-white h-10 pl-5 pr-5 transition-all duration-500 ease-linear xl:hover:bg-highlight-blue xl:hover:text-white" onClick={navigateToSignup}>
                    <b>Sign Up</b>
                </button>: null}
            </div>
        </nav>
    )
    else return (
        <nav className="w-full h-auto flex flex-row z-20 absolute top-0 bg-primary-grey">
            {showDrawer ? navDrawer(): null}
            {showLogo()}
            <div className="flex flex-row">
                {!loggedIn ?
                    <button className="mx-1 text-xl text-white my-2.5 rounded-md bg-primary-blue h-10 pl-5 pr-5 transition-all duration-500 ease-linear xl:hover:bg-accent-blue" onClick={navigateToLogin}>
                        <b>Login</b>
                    </button>: null}
                {!loggedIn ?
                    <button className="mx-1 text-xl text-white my-2.5 ml-1.5 mr-5 rounded-md bg-primary-blue h-10 pl-5 pr-5 transition-all duration-500 ease-linear xl:hover:bg-accent-blue" onClick={navigateToSignup}>
                        <b>Sign Up</b>
                    </button>: null}
            </div>
        </nav>
    )
}

export default Nav;
