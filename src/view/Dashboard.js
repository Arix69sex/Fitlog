import React from 'react';
import '../index.css';
import {useNavigate} from "react-router-dom";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";

function Dashboard() {

    let entries =  [
        { date: '12/12/2021', calories: 2200, weight: 72.5 },
        { date: '13/12/2021', calories: 2300, weight: 71.5 },
        { date: '14/12/2021', calories: 4300, weight: 75.5 },
        { date: '15/12/2021', calories: 2200, weight: 73.5 },
        { date: '16/12/2021', calories: 2200, weight: 74.5 },
        { date: '17/12/2021', calories: 2200, weight: 71.5 },
        { date: '18/12/2021' , calories: 2200, weight: 72.5 },
    ];

    let endWeightButton = function () {
        let endWeight = 0
        for (let i  = 0; i < entries.length; i++){
            endWeight += entries[i].weight
        }
        endWeight = (endWeight/entries.length).toFixed(1)

        return (
            <div className="w-2/5 h-auto py-2.5 flex flex-row bg-white rounded-md mr-14 ml-auto mb-10">
                <h3 className="text-blue-700 text-2xl ml-5 mr-auto">End Weight</h3>
                <h3 className="text-2xl mr-5 text-green-400">{endWeight} kg</h3>
            </div>
        )
    }

    let listEntries = entries.map(function(entry) {
        return (
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                        <h3 className="text-sm text-black">
                            {entry.date}
                        </h3>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                        <h3 className="text-sm text-black">
                            {entry.calories}
                        </h3>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                        <h3 className="text-sm text-black">
                            {entry.weight} kg
                        </h3>
                    </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <FaTimes style={{color: 'darkblue', fontSize: '20px'}}/>
                </td>
            </tr>
        );
    });

    const navigator = useNavigate();

    function confirm() {
        navigator('/goals');
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-primary-grey">
            <div className="w-full h-1/4 flex flex-row items-center mt-18">
                <div className="w-2/4 flex justify-center ml-5">
                    <h1 className="mr-18 text-white text-5xl font-bold">Progress</h1>
                </div>

                <div className="w-2/4">
                    <h3 className="text-white text-3xl">Week 1</h3>
                </div>
            </div>
            <div className="w-full h-3/4 flex flex-row">
                <div className="w-10 h-3/4 flex flex-col justify-center items-center ml-10 transform transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-2.5 duration-300">
                    <FaChevronLeft style={{color: 'white', fontSize: '50px'}}/>
                </div>
                <div className="w-2/4 h-full flex flex-col items-center overflow-hidden">

                    <div className="w-2/4 h-auto py-2.5 flex flex-row bg-white rounded-md mb-10 mt-5">
                        <h3 className="text-blue-700 text-2xl ml-5 mr-auto">Starting Weight</h3>
                        <h3 className="text-blue-700 text-2xl mr-5">71.75 kg</h3>
                    </div>

                    <div className="w-2/4 h-auto py-2.5 flex flex-row mb-10">
                        <h3 className="text-white text-2xl mr-auto">Add Weight</h3>

                        <input
                            className="w-2/6 h-auto border-2 rounded-xl text-black py-2.5 px-5 text-xl focus:ring-blue-500"
                            placeholder="kg"/>
                    </div>

                    <button
                        className="w-36 text-2xl text-white rounded-md bg-primary-blue h-12  transition-all duration-500 ease-linear xl:hover:bg-accent-blue">
                        Add
                    </button>
                </div>

                <div className="w-2/4 h-full">
                    <div className="w-full overflow-x-auto -my-2 sm:-mx-6 lg:-mx-8 mt-5 mb-10">
                        <div className="w-full align-middle inline-block sm:px-6 lg:px-8">
                            <div className="w-full shadow overflow-hidden border-b border-hard-black sm:rounded-lg">
                                <table className="w-full divide-y divide-hard-black">
                                    <thead className="bg-accent-blue">
                                        <tr  className="bg-accent-blue">
                                            <th scope="col"
                                                className="px-6 py-5 text-center text-lg font-light text-white tracking-wider">
                                                Day
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 text-center text-lg font-light text-white tracking-wider">
                                                Calories Consumed
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 text-center text-lg font-light text-white tracking-wider ">
                                                Weight
                                            </th>
                                            <th scope="col"
                                                className="px-6 py-3 text-center text-lg font-light text-white tracking-wider">

                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {listEntries}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {endWeightButton()}
                </div>

                <div className="w-10 h-3/4 flex flex-col justify-center items-center mr-10">
                    <FaChevronRight className="transform transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-2.5 duration-300"  style={{color: 'white', fontSize: '50px'}}/>
                </div>
            </div>
        </div>
)
}

export default Dashboard;
