import React, {useState, useEffect} from 'react';
import '../index.css';
import {useNavigate} from "react-router-dom";

function Results() {

    const [results, setResults] = useState(
        { daily_calories: 0 , weekly_calories: 0, BMR: 0, activity:'', activity_cal: 0, BMI: 0, MMP: 0 });

    const navigator = useNavigate();

    function confirm() {
        navigator('/goals');
    }

    useEffect(() => {
        if ( results.daily_calories === 0 &&
            results.weekly_calories === 0 &&
            results.BMR === 0 &&
            results.activity === '' &&
            results.activity_cal === 0 &&
            results.BMI === 0 &&
            results.MMP === 0) setData()
    });

    function setData() {
        let user = JSON.parse(window.localStorage.getItem('user'));
        let cal_per_activity = 0
        if (user.activity === 'sedentary') cal_per_activity = 300
        if (user.activity === 'light') cal_per_activity = 600
        if (user.activity === 'moderate') cal_per_activity = 900
        if (user.activity === 'heavy') cal_per_activity = 1200
        if (user.activity === 'athlete') cal_per_activity = 1500
        setResults(results =>({
            ...results,
            daily_calories: 10*user.weight + 6.25*user.height - 5*user.age + 5,
            weekly_calories: ((10*user.weight + 6.25*user.height - 5*user.age + 5)+cal_per_activity) *7,
            BMR: 10*user.weight + 6.25*user.height - 5*user.age + 5,
            BMI: ((user.weight/user.height/user.height)*10000).toFixed(2),
            activity: user.activity,
            activity_cal: cal_per_activity,
            MMP: user.height
        }))
        console.log(results)
    }

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-primary-grey">

            <div className="w-1/5 h-3/4 flex flex-col rounded-2xl justify-center align-center bg-accent-blue mr-24 divide-y">
                <div className="flex flex-col justify-center items-center h-3/6">
                    <h3 className="text-6xl text-white font-bold">{results.daily_calories + results.activity_cal}</h3>
                    <h5 className="text-xl text-white font-light">Calories per day</h5>
                </div>

                <div className="flex flex-col justify-center items-center h-3/6">
                    <h3 className="text-6xl text-white font-bold">{results.weekly_calories}</h3>
                    <h5 className="text-xl text-white font-light">Calories per week</h5>
                </div>
            </div>

            <div className="w-2/4 h-3/4 flex flex-row rounded-2xl  justify-center align-center ">

                <div className="w-full flex flex-col rounded-2xl bg-white justify-center items-center divide-y divide-gray-300">

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">Basal Metabolic Rate</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">{results.BMR} calories per day</h3>
                    </div>

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">{results.activity.charAt(0).toUpperCase() + results.activity.slice(1)}</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">{results.BMR + results.activity_cal} calories per day</h3>
                    </div>

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">BMI Score</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">{results.BMI}</h3>
                    </div>

                    <div className="w-full flex flex-row ">
                        <h3 className="text-3xl mr-24 ml-8 my-5 w-3/6 font-semibold text-gray-600">Max Muscular Potential</h3>
                        <h3 className="text-3xl mr-24 my-5 w-3/6 text-gray-500">{results.MMP - 100} kg @ 5% or {results.MMP - 96}kg @ 10%</h3>
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
