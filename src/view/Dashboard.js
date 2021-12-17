import React, {useEffect, useState} from 'react';
import '../index.css';
import {useNavigate} from "react-router-dom";
import { FaChevronRight, FaChevronLeft, FaTimes } from "react-icons/fa";
import axios from "axios";

function Dashboard() {
    const [loadedData, setloadedData] = useState(false);
    const [entry, setEntry] = useState(
        {
            date: '',
            calories: 0,
            weight: 0
        });
    const [entries, setEntries] = useState([]);
    const [week, setWeek] = useState(0);
    //let entries = []

    useEffect(() => {
        if (loadedData === false){
           fetchEntriesData()
        }
    });

    function onChangeWeight(e) {
        console.log(e.target.value)
        setEntry(data =>({
            ...data,
            weight: Number(e.target.value)
        }))
        console.log(entry)
    }

    function onChangeCalories(e) {
        console.log(e.target.value)
        setEntry(data =>({
            ...data,
            calories: Number(e.target.value)
        }))
        console.log(entry)
    }

    function fetchEntriesData() {
        let user = JSON.parse(window.localStorage.getItem('user'));
        axios.get('http://localhost:5000/entries/' + user.email)
            .then((reqEntries) => {
                if (reqEntries !== null){
                    setEntries(reqEntries.data)
                    setloadedData(true)
                }
                else {
                    console.log('No entries for that email.')
                }
            })
    }

    let weekChanger = function () {
        return (
            <div className="w-2/4 h-auto py-2.5 flex flex-row mb-10 mr-auto">
                <input
                    className="w-2/6 h-auto border-2 rounded-xl text-black py-2.5 px-5 text-xl focus:ring-blue-500"
                    type="number"
                    placeholder="Week"
                    onChange={(evt) => { console.log(evt.target.value); }}/>
            </div>
        )
    }

    let endWeightButton = function () {
        let endWeight = 0
        console.log(entries)
        console.log(week*7)
        console.log(entries.length - (entries.length - 7*(week+1)))
        if (entries.length !== 0) {
            for (let i  = week*7; i < entries.length - (entries.length - 7*(week+1)); i++){
                if (entries[i] != null || entries[i] != undefined) endWeight += entries[i].weight
            }
            endWeight = (endWeight/entries.length).toFixed(1)
        }else endWeight = 0

        return (
            <div className="w-2/5 h-auto bg-white rounded-md mr-14 ml-auto mb-10 flex flex-row justify-center items-center">
                <h3 className="text-blue-700 text-2xl ml-5 mr-auto">End Weight</h3>
                <h3 className="text-2xl mr-5 text-green-400">{endWeight} kg</h3>
            </div>
        )
    }

    function add() {
        const current = new Date();
        const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
        if (entry.weight > 0 && entry.calories > 0){
            let user = JSON.parse(window.localStorage.getItem('user'));
            const newEntry = {
                day: date,
                weight: Number(entry.weight),
                calories: Number(entry.calories)
            }
            console.log(newEntry)
            axios.post('http://localhost:5000/entries/' + user.email + '/add', newEntry)
                .then(() => {
                    fetchEntriesData()
                });
        }
        else console.log("weight or calories empty/invalid.")
    }

    function del(_id){
        console.log(_id)
        let user = JSON.parse(window.localStorage.getItem('user'));
        axios.delete('http://localhost:5000/entries/' + user.email + '/delete/' + _id)
            .then(() => {
                fetchEntriesData()
            });
    }

    function changeWeek(week){
        if (week > -1 && week < entries.length/7 ) {
            setWeek(week)
            fetchEntriesData()
        }
    }

    let listEntries = entries.slice(week*7,entries.length - (entries.length - 7*(week+1))).map(function(entry) {
        return (
            <tr key={entry._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center">
                        <h3 className="text-sm text-black">
                            {entry.day.substring(0,10)}
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

                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium" onClick={() => {del(entry._id)}}>
                    <FaTimes style={{color: 'darkblue', fontSize: '20px'}}/>
                </td>
            </tr>
        );
    });

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-primary-grey">
            <div className="w-full h-1/4 flex flex-row items-center mt-18">
                <div className="w-2/4 flex justify-center ml-5">
                    <h1 className="mr-18 text-white text-5xl font-bold">Progress</h1>
                </div>

                <div className="w-2/4">
                    <h3 className="text-white text-3xl">Week {week+1}</h3>
                </div>
            </div>
            <div className="w-full h-3/4 flex flex-row">
                <div className="w-10 h-3/4 flex flex-col justify-center items-center ml-10 transform transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-2.5 duration-300 cursor-pointer"
                     onClick={() => {changeWeek(week-1)}}>
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
                            placeholder="kg"
                            onChange={onChangeWeight}/>
                    </div>

                    <div className="w-2/4 h-auto py-2.5 flex flex-row mb-10">
                        <h3 className="text-white text-2xl mr-auto">Add Calories</h3>

                        <input
                            className="w-2/6 h-auto border-2 rounded-xl text-black py-2.5 px-5 text-xl focus:ring-blue-500"
                            placeholder="calories"
                            onChange={onChangeCalories}/>
                    </div>

                    <button
                        className="w-36 text-2xl text-white rounded-md bg-primary-blue h-12  transition-all duration-500 ease-linear xl:hover:bg-accent-blue"
                         onClick={add}>
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
                    <div className="flex flex-row h-auto">
                        {weekChanger()}
                        {endWeightButton()}
                    </div>
                </div>

                <div className="w-10 h-3/4 flex flex-col justify-center items-center mr-10"  onClick={() => {changeWeek(week+1)}}>
                    <FaChevronRight className="transform transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-2.5 duration-300 cursor-pointer"  style={{color: 'white', fontSize: '50px'}}/>
                </div>
            </div>
        </div>
)
}

export default Dashboard;
