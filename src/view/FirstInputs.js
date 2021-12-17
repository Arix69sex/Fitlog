import React, { useEffect, useState, useRef } from "react";
import '../index.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function FirstInputs() {

    const navigator = useNavigate();

    const maleRadio = useRef(null);
    const femaleRadio = useRef(null);

    function confirm() {
        navigator('/results');
    }

    function handleRadio(gender) {
        if (gender === "male") {

        } else {

        }
    }

    const [checked, setChecked] = useState(
        { male: false, female: false });
    const [inputs, setInputs] = useState(
        { gender: '' ,age: 0, weight: 0, height: 0, activity: '' });

    const changeRadio = (e) => {
        setChecked(() => {
            return {
                male: false,
                female: false,
                [e.target.value]: true,
        }
     })
        setInputs(inputs =>({
            ...inputs,
            gender: e.target.value
        }))
        console.log(inputs.gender)
    };

    function onChangeAge(e) {
        console.log(e.target.value)
        setInputs(inputs =>({
            ...inputs,
            age: Number(e.target.value)
        }))
        console.log(inputs)
    }

    function onChangeHeight(e) {
        console.log(e.target.value)
        setInputs(inputs =>({
            ...inputs,
            height: Number(e.target.value)
        }))
        console.log(inputs)
    }

    function onChangeWeight(e) {
        console.log(e.target.value)
        setInputs(inputs =>({
            ...inputs,
            weight: Number(e.target.value)
    }))
        console.log(inputs)
    }

    function onChangeActivity(e) {
        setInputs(inputs =>({
            ...inputs,
            activity: e.target.value
        }))
        console.log(inputs)
    }

    function onSubmit(e) {
        if (inputs.gender === '' &&
            inputs.age < 1 &&
            inputs.weight < 1 &&
            inputs.height < 1 &&
            (inputs.activity < '' || inputs.activity < 'select'))
        {
            console.log("Values missing or too short")
        }
        else {
            let user = JSON.parse(window.localStorage.getItem('user'));
            user.gender = inputs.gender
            user.age = Number(inputs.age)
            user.weight = Number(inputs.weight)
            user.height = Number(inputs.height)
            user.activity = inputs.activity
            console.log(user)
            window.localStorage.setItem('user', JSON.stringify(user));

            axios.put('http://localhost:5000/users/update/' + user.email, user)
                .then(() => navigator('/results'));
        }
    }

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-primary-grey">

            <div className="w-3/5 h-3/4 flex flex-row rounded-md justify-center align-center ">

                <div className="w-full flex flex-col rounded-md	 bg-white justify-center items-center">

                    <div className="w-3/4 flex flex-row mb-10">
                        <h3 className="text-3xl w-1/3 mr-24">
                            Gender
                        </h3>
                        <div>
                            <input id="male-radio"  checked={checked.male} className="rounded-md" value="male" type="radio" ref={maleRadio}
                                   onClick={changeRadio}/>
                            <label className="text-xl  ml-2.5 mr-10" htmlFor="male-radio"> Male</label>
                            <input id="female-radio" checked={checked.female} className="rounded-full" value="female" type="radio" ref={femaleRadio}
                                   onClick={changeRadio}/>
                            <label className="text-xl ml-2.5" htmlFor="female-radio">Female</label>
                        </div>
                    </div>

                    <div className="w-3/4 flex flex-row ">
                        <h3 className="text-3xl mr-24 w-1/3">Age</h3>
                        <input
                            className="w-1/6 h-14 border-2 rounded-xl text-black text-xl mb-10 px-5 focus:ring-accent-blue"
                            placeholder="years"
                            type="Number"
                            onChange={onChangeAge}/>
                    </div>

                    <div className="w-3/4 flex flex-row">
                        <h3 className="text-3xl mr-24 w-1/3">Weight</h3>
                        <input
                            className="w-1/6 h-14 border-2 rounded-xl text-black text-xl mb-10 px-5 focus:ring-accent-blue"
                            placeholder="kg"
                            type="Number"
                            onChange={onChangeWeight}/>
                    </div>

                    <div className="w-3/4 flex flex-row">
                        <h3 className="text-3xl mr-24 w-1/3">Height</h3>
                        <input
                            className="w-1/6 h-14 border-2 rounded-xl text-black text-xl mb-10 px-5 focus:ring-accent-blue"
                            placeholder="cm"
                            type="Number"
                            onChange={onChangeHeight}/>
                    </div>

                    <div className="w-3/4 flex flex-row">
                        <p className="text-3xl mr-24 w-1/3">Activity</p>
                        <select name="type"
                                className="w-5/12 h-14 border-2 rounded-xl text-black text-xl mb-10 px-5 focus:ring-accent-blue"
                                placeholder="cm"
                                onChange={onChangeActivity}>
                            <option className="text-gray-300">Select</option>
                            <option value="sedentary">Sedentary (Office Job)</option>
                            <option value="light">Light Exercise (1-2 days/week)</option>
                            <option value="moderate">Moderate Exercise (3-5 days/week)</option>
                            <option value="heavy">Heavy Exercise (6-7 days/week)</option>
                            <option value="athlete">Athlete (2x per day)</option>
                        </select>
                    </div>

                    <button
                        className="w-48 h-14 mx-1 text-xl text-white my-2.5 rounded-xl bg-primary-blue h-10 pl-5 pr-5 transition-all duration-500 ease-linear xl:hover:bg-accent-blue"
                        onClick={onSubmit}>
                        <b>Calculate</b>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FirstInputs;
