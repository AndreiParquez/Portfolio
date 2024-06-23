import React, { useState } from 'react';
import p1 from '../assets/p1.png';
import p2 from '../assets/k.png';
import p3 from '../assets/h1.png';
import p4 from '../assets/tagpuan.png';
import p5 from '../assets/eGrocery.png';
import p6 from '../assets/animetambayan.png';
import p from '../assets/g1.jpg';
import p7 from '../assets/ev.png';
import { FiGithub, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiPython,
    DiCss3,
    DiDjango
} from 'react-icons/di';

const Projects = () => {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            img: p7,
            title: "Torneo: Esport Webapp",
            description: "A school navigation mobile game, using Unity Game Engine",
            tech: [<SiCsharp className='text-green-400' />],
            github: "https://github.com/AndreiParquez/Games/tree/main/Cvsu%20Go",
            view: "https://animetambayan.netlify.app/"
        },
        {
            img: p,
            title: "CvsuGo",
            description: "A school navigation mobile game, using Unity Game Engine",
            tech: [<SiCsharp className='text-green-400' />],
            github: "https://github.com/AndreiParquez/Games/tree/main/Cvsu%20Go",
            view: "https://animetambayan.netlify.app/"
        },
        {
            img: p6,
            title: "AnimeTambayan",
            description: "Anime streaming website using AnimeDex api.",
            tech: [<DiHtml5 className='text-orange-500' />, <DiCss3 className='text-blue-500' />, <DiJavascript1 className='text-yellow-500' />],
            github: "https://github.com/AndreiParquez/Anime-Tambayan",
            view: "https://animetambayan.netlify.app/"
        },
        {
            img: p5,
            title: "eGrocery",
            description: "A fullstack ecommerce web app using nodeJs, Javascript, Express, Mysql.",
            tech: [<DiHtml5 className='text-orange-500' />, <DiCss3 className='text-blue-500' />, <DiJavascript1 className='text-yellow-500' />, <DiNodejsSmall className='text-green-500' />, <SiMysql className='text-blue-500' />, <SiExpress className='text-green-400' />],
            github: "https://github.com/AndreiParquez/eGrocery",
            view: ""
        },
        {
            img: p2,
            title: "Kalawakan",
            description: "An interactive E learning website about space with stunning ui, made using nodeJs, Javascript, Express, Mysql.",
            tech: [<DiHtml5 className='text-orange-500' />, <DiCss3 className='text-blue-500' />, <DiJavascript1 className='text-yellow-500' />, <DiNodejsSmall className='text-green-500' />, <SiMysql className='text-blue-500' />, <SiExpress className='text-green-400' />],
            github: "https://github.com/AndreiParquez/Kalawakan-E-Learning",
            view: ""
        },
        {
            img: p3,
            title: "Hotel Management System",
            description: "Integrated POS and Inventory System for hotel,Crud and Modern Ui",
            tech: [<SiCsharp className='text-green-400' />, <SiMysql className='text-blue-500' />, <SiExpress className='text-green-400' />],
            github: "https://github.com/AndreiParquez/Hotel-Management",
            view: ""
        },
        {
            img: p4,
            title: "Tagpuan",
            description: "Fullstack food ordering website using django and mysql",
            tech: [<DiDjango className='text-green-500' />, <DiPython className='text-yellow-400' />, <SiMysql className='text-blue-500' />],
            github: "https://github.com/AndreiParquez/Restaurant-Ordering-Webapp",
            view: ""
        },
        {
            img: p1,
            title: "PudsFanda",
            description: "A simple fastfood ordering app using html css and js",
            tech: [<DiHtml5 className='text-orange-500' />, <DiJavascript1 className='text-yellow-500' />, <DiCss3 className='text-blue-500' />],
            github: "https://github.com/AndreiParquez/PudsPaanda",
            view: ""
        }
    ];

    const projectsToShow = showAll ? projects : projects.slice(0, 4);

    return (
        <>
            <div className='font-bold rounded-lg p-6 flex flex-wrap gap-4 text-green-500 text-4xl justify-center'>
                <h2>Featured Projects</h2>
            </div>
            <div className='max-w-[1000px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-item-center' id="about">
                {projectsToShow.map((project, index) => (
                    <div key={index}>
                        <div className='relative group'>
                            <div className='relative w-full p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                                <img src={project.img} alt={`project ${index + 1}`} className='rounded-lg' />
                            </div>
                        </div>
                        <div className='p-1 mb-20 drop-shadow-xl'>
                            <h2 className='text-green-500 text-2xl font-bold mb-2'>{project.title} <TbWorldWww className='text-zinc-700' /></h2>
                            <p className='text-gray-300 mb-1 text-lg m-0'>{project.description}</p>
                            <div className='md:flex flex-wrap gap-4 text-2xl flex'>
                                <p className='text-green-500 font-bold text-sm'>Tech:</p>
                                {project.tech}
                            </div>
                            <div className='md:flex flex-wrap gap-4 text-1xl flex justify-center md:justify-start'>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-indigo-950 hover:text-indigo-50 z-10 cursor-pointer font-bold text-zinc-800 w-24 h-9 mt-6 p-2 bg-white rounded-full'>
                                        <TbBrandGithubFilled className='text-2xl font-bold mr-2' />Github
                                    </button>
                                </a>
                                <a href={project.view} target="_blank" rel="noopener noreferrer">
                                    <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-24 h-9 mt-6 p-2 bg-zinc-800 rounded-full'>
                                        <FaEye className='text-2xl font-bold mr-2' />View
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <button onClick={() => setShowAll(!showAll)} className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-36 h-12 mt-6 p-2 bg-green-500 rounded-full'>
                    {showAll ? 'Show Less' : 'Show All Projects'}
                </button>
            </div>
        </>
    );
};

export default Projects;
