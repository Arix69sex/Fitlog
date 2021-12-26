import React, {useState} from 'react';
import '../index.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { VscGraphLine, VscSearch, VscEdit  } from "react-icons/vsc";
import devpic from "../../public/pfpgood.png"

function Landing() {

     return (
        <body className="h-screen">
            {/* Intro with pics */}
            <div className="w-screen h-screen bg-gradient-to-b from-grad-start via-grad-mid to-grad-end flex flex-col justify-center">
                <div>
                    <h1 className="font-medium text-8xl text-white ml-56">TRACK.</h1>
                    <h1 className="font-medium text-8xl text-white ml-56">ANALYZE.</h1>
                    <h1 className="font-medium text-8xl text-white ml-56">PROGRESS.</h1>
                </div>
            </div>

            {/* App resume */}
            <div className="w-screen h-screen bg-gradient-to-b from-grad-end to-white flex flex-col justify-center">
                <h1 className="font-medium text-8xl text-white ml-56">Reach your fitness <br/> <span className="text-green-400">goals</span> with ease.</h1>
                <p className="font-light text-2xl text-white py-5 ml-56">Fitlog is a web application to help <span className="font-semibold">you</span> on your fitness journey.</p>
            </div>

            {/* Benefits */}
            <div className="w-screen h-screen bg-white flex flex-row justify-center items-center">
                <div className="w-1/6 h-2/5 py-10  rounded-md shadow-xl  flex flex-col justify-center items-center ml-48 border border-zinc-200">
                    <VscEdit style={{color: 'bg-highlight-blue', fontSize: '40px'}}/>
                    <h3 className="font-medium text-xl text-highlight-blue py-5">Track</h3>
                    <p className="pt-5 w-10/12 text-base font-light text-justify">Submit your daily weight and calories consumed to track your progress.</p>
                </div>

                <div className="w-1/6 h-2/5 py-4  rounded-md shadow-xl flex flex-col justify-center items-center ml-auto mr-auto border border-zinc-200">
                    <VscSearch style={{color: 'bg-highlight-blue', fontSize: '40px'}}/>
                    <h3 className="font-medium text-xl text-highlight-blue py-5">Analyze</h3>
                    <p className="pt-5 w-10/12 text-base font-light text-justify">Watch and analyze how you are currently doing and improve upon that.</p>
                </div>

                <div className="w-1/6 h-2/5 py-10  rounded-md shadow-xl flex flex-col justify-center items-center mr-48 border border-zinc-200">
                    <VscGraphLine style={{color: 'highlight-blue', fontSize: '40px'}}/>
                    <h3 className="font-medium text-xl text-highlight-blue py-5">Progress</h3>
                    <p className="pt-5 w-10/12 text-base font-light text-justify">Accomplish your weight lose/gain objectives easily.</p>
                </div>
            </div>

            {/* Credits */}
            <div className="w-screen h-3/5 bg-dark-gray flex flex-row items-center">
                <img className="rounded-full ml-56" src={devpic} alt="Dev pic"/>

                <div className="ml-20">
                    <h1 className="text-white text-5xl mb-5 font-regular">Made with ❤ by Aria Sharifi</h1>
                    <p className="w-3/5 ml-5 text-white text-xl font-light pb-5">I am a software engineering student that enjoys learning new technologies to improve my web development skills, specially frontend.</p>
                    <p className="ml-5 text-white text-xl font-light">You can find my Github here  <a className="text-blue-400" href={'https://github.com/Arix69sex'}>https://github.com/Arix69sex</a></p>
                </div>
            </div>

        </body>
    )
}

export default Landing;
