import React, {useState} from 'react';
import '../index.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Goals() {
    const navigator = useNavigate();

    const [inputs, setInputs] = useState(
        { goal: '' });

    function confirm() {
        navigator('/dashboard');
    }

    function setGoal(goalString) {
        console.log(goalString)
        setInputs(() =>({
            goal: goalString
        }))
        console.log(inputs)
        let user = JSON.parse(window.localStorage.getItem('user'));
        user.goal = goalString
        window.localStorage.setItem('user', JSON.stringify(user));

        if (user.goal !== ''){
            axios.put('http://localhost:5000/users/update/' + user.email, user)
                .then(() => navigator('/dashboard'));
            confirm()
        }
    }

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-primary-grey">

            <div className="transform w-1/5 h-3/5 flex flex-col rounded-2xl justify-center align-center bg-dark-blue mr-24 opacity-75 transition ease-in-out delay-150 hover:scale-110 hover:bg-accent-blue hover:opacity-100 hover:-translate-y-14 duration-300" onClick={() => {setGoal("lose")}}>
                <div className="flex flex-col justify-center items-center h-full" >
                    <h1 className="text-6xl text-white font-bold">Lose</h1>
                    <h3 className="text-7xl text-white font-bold mt-5 mb-2.5">-500</h3>
                    <h5 className="text-xl text-white font-light">Calories per day</h5>
                </div>
            </div>

            <div className="transform w-1/5 h-3/5 flex flex-col rounded-2xl justify-center align-center bg-dark-blue mr-24 opacity-75 transition ease-in-out delay-150 hover:scale-110 hover:bg-accent-blue hover:opacity-100 hover:-translate-y-14 duration-300" onClick={() => {setGoal("maintain")}}>
                <div className="flex flex-col justify-center items-center h-3/6" >
                    <h1 className="text-6xl text-white font-bold">Maintain</h1>
                    <h3 className="text-7xl text-white font-bold mt-5 mb-2.5">+0</h3>
                    <h5 className="text-xl text-white font-light">Calories per day</h5>
                </div>

            </div>

            <div className="transform w-1/5 h-3/5 flex flex-col rounded-2xl justify-center align-center bg-dark-blue mr-24 opacity-75 transition ease-in-out delay-150 hover:scale-110 hover:bg-accent-blue hover:opacity-100 hover:-translate-y-14 duration-300" onClick={() => {setGoal("gain")}}>
                <div className="flex flex-col justify-center items-center h-3/6" >
                    <h1 className="text-6xl text-white font-bold">Gain</h1>
                    <h3 className="text-7xl text-white font-bold mt-5 mb-2.5">+500</h3>
                    <h5 className="text-xl text-white font-light">Calories per day</h5>
                </div>

            </div>

        </div>
    )
}

export default Goals;
