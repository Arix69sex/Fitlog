import React from 'react';
import '../index.css';
import {useNavigate} from "react-router-dom";

function Results() {

    const navigator = useNavigate();

    function confirm() {
        navigator('/goals');
    }

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-primary-grey">

            <div className="w-1/5 h-3/4 flex flex-col rounded-2xl justify-center align-center bg-accent-blue mr-24 divide-y">
                <div className="flex flex-col justify-center items-center h-3/6">
                    <h3 className="text-7xl text-white font-bold">2200</h3>
                    <h5 className="text-xl text-white font-light">Calories per day</h5>
                </div>

                <div className="flex flex-col justify-center items-center h-3/6">
                    <h3 className="text-7xl text-white font-bold">15400</h3>
                    <h5 className="text-xl text-white font-light">Calories per week</h5>
                </div>
            </div>

            <div className="w-2/4 h-3/4 flex flex-row rounded-2xl  justify-center align-center ">

                <div className="w-full flex flex-col rounded-2xl 	 bg-white justify-center items-center divide-y divide-gray-300">

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">Basal Metabolic Rate</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">1700 calories per day</h3>
                    </div>

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">Sedentary</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">2200 calories per day</h3>
                    </div>

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">Basal Metabolic Rate</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">1700 calories per day</h3>
                    </div>

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">BMI Score</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">22.4</h3>
                    </div>

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">Max Muscular Potential</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">75 kg @ 5% or 80kg @ 10%</h3>
                    </div>

                    <button className="w-60 h-14 mx-1 text-2xl text-white mt-5 mb-2.5 rounded-xl bg-primary-blue h-10 pl-5 pr-5 transition-all duration-500 ease-linear xl:hover:bg-accent-blu font-light"
                            onClick={confirm}>
                        <b>Continue</b>
                    </button>
                    <h3 className="text-gray-600 text-xs">Your information has been saved on your profile</h3>
                </div>
            </div>
        </div>
    )
}

export default Results;
