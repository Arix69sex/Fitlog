import React, {useState} from 'react';
import '../index.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [user, setUser] = useState(
        {
            email: '',
            password: '',
        });

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
        if (user.email.length < 6 &&
            user.password.length < 8)
        {
            console.log("Values missing or too short")
        }
        else {
            console.log(user.email);
            console.log(user.password);
            let reqUser = axios.post('http://localhost:5000/users/login', user)
                .then((reqUser) => {
                    if (reqUser.data.password === user.password){
                        const savedUser = {
                            email: reqUser.data.email,
                            username: reqUser.data.username,
                            gender: reqUser.data.gender,
                            age: reqUser.data.age,
                            height: reqUser.data.height,
                            weight: reqUser.data.weight,
                            activity: reqUser.data.activity,
                            goal: reqUser.data.goal,
                        }
                        window.localStorage.setItem('user', JSON.stringify(savedUser));
                        if (reqUser.data.gender !== '' && reqUser.data.goal !== '') navigator('/dashboard')
                        else {
                            if (reqUser.data.gender !== '' && reqUser.data.goal === '') navigator('/goals')
                            else navigator('/first');
                        }
                    }
                    else {
                        console.log(reqUser.data)
                        console.log('Wrong password.')
                    }
                });
        }
    }

    const navigator = useNavigate();

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-primary-grey">

                <div className="w-3/5 h-3/5 flex flex-row rounded-md justify-center align-center">

                    <div className="w-2/6 rounded-l-md bg-white flex justify-center items-center">
                        <h1 className="text-8xl px-10">
                            Login
                        </h1>
                    </div>

                    <div className="w-full flex flex-col rounded-r-md bg-gray-300 justify-center items-center">
                        <input className="w-3/5 h-14 border-none rounded-md text-black text-xl mb-10 px-5"
                               type="email"
                               placeholder="Email*"
                               onChange={onChangeEmail}/>
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

export default Login;
