import React, { useEffect, useState, useRef } from "react";
import '../index.css';
import {useNavigate} from "react-router-dom";

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

    const [checked, setChecked] = useState({ male: false, female: false });

    const changeRadio = (e) => {
        setChecked(() => {
            return {
                male: false,
                female: false,
                [e.target.value]: true
            };
        });
    };

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
                            placeholder="years"/>
                    </div>

                    <div className="w-3/4 flex flex-row">
                        <h3 className="text-3xl mr-24 w-1/3">Weight</h3>
                        <input
                            className="w-1/6 h-14 border-2 rounded-xl text-black text-xl mb-10 px-5 focus:ring-accent-blue"
                            placeholder="kg"/>
                    </div>

                    <div className="w-3/4 flex flex-row">
                        <h3 className="text-3xl mr-24 w-1/3">Height</h3>
                        <input
                            className="w-1/6 h-14 border-2 rounded-xl text-black text-xl mb-10 px-5 focus:ring-accent-blue"
                            placeholder="cm"/>
                    </div>

                    <div className="w-3/4 flex flex-row">
                        <p className="text-3xl mr-24 w-1/3">Activity</p>
                        <select name="type"
                                className="w-5/12 h-14 border-2 rounded-xl text-black text-xl mb-10 px-5 focus:ring-accent-blue"
                                placeholder="cm">
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
                        onClick={confirm}>
                        <b>Calculate</b>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FirstInputs;
