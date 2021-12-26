import React, {useState} from 'react';
import '../index.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Signup() {
    const [user, setUser] = useState(
        {
            email: '',
            username: '',
            password: '',
        });
    const navigator = useNavigate();

    function confirm() {
        navigator('/first');
    }

    function onChangeUsername(e) {
        console.log(e.target.value)
        setUser(users =>({
            ...users,
            username: e.target.value
        }))
        console.log(user)
    }

    function onChangeEmail(e) {
        console.log(e.target.value)
        setUser(users =>({
            ...users,
            email: e.target.value
        }))
        console.log(user)
    }

    function onChangePassword(e) {
        console.log(e.target.value)
        setUser(users =>({
            ...users,
            password: e.target.value
        }))
        console.log(user)
    }

    function onSubmit(e) {
       if (user.username.length < 4 &&
           user.email.length < 6 &&
           user.password.length < 8)
       {
           console.log("Values missing or too short")
       }
       else {
           axios.post('http://localhost:5000/users/signup', user)
               .then(() => {
                   const savedUser = {
                       email: user.email,
                       username: user.username,
                       gender: '',
                       age: 0,
                       height: 0,
                       weight:0,
                       activity: '',
                       goal: '',
                   }
                   window.localStorage.setItem('user', JSON.stringify(savedUser));
                   navigator('/first');
               });
       }
    }

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-primary-grey">

            <div className="w-4/5 md:w-3/5 h-full md:h-3/5 flex flex-col md:flex-row rounded-md justify-center align-center">

                <div className="rounded-t-md md:w-2/6 md:rounded-l-md md:rounded-r-none bg-white flex justify-center items-center">
                    <h1 className="text-6xl py-10 2xl:px-10">
                        Signup
                    </h1>
                </div>

                <div className="w-full flex flex-col rounded-b-md md:rounded-r-md md:rounded-l-none bg-gray-300 justify-center items-center py-14">
                    <input className="w-3/5 h-14 border-none rounded-md text-black text-xl mb-10 px-5 "
                           type="email"
                           placeholder="Email*"
                           onChange={onChangeEmail}/>
                    <input className="w-3/5 h-14 border-none rounded-md text-black text-xl mb-10 px-5 "
                           placeholder="Username*"
                           onChange={onChangeUsername}/>
                    <input className="w-3/5 h-14 border-none rounded-md text-black text-xl mb-10 px-5"
                           type="password"
                           placeholder="Password*"
                           onChange={onChangePassword}/>
                    <button className="w-48 mx-1 text-xl text-white my-2.5 rounded-md bg-primary-blue h-10 pl-5 pr-5 transition-all duration-500 ease-linear xl:hover:bg-accent-blue" onClick={onSubmit}><b>Confirm</b></button>
                    <h3 className="text-gray-600 text-sm">Forgot password?</h3>
                </div>
            </div>
        </div>
    )
}

export default Signup;
