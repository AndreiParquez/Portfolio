import React from 'react'
import p1 from '../assets/p1.png'
import p2 from '../assets/k.png'
import p3 from '../assets/h1.png'
import p4 from '../assets/tagpuan.png'
import p5 from '../assets/eGrocery.png'
import p6 from '../assets/animetambayan.png'
import { FiGithub, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


import{
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiPython,
    DiCss3,
    DiDjango
} from 'react-icons/di'

const Projects =() => {
    return(

<>
        <div className=' font-bold rounded-lg p-6 flex flex-wrap gap-4 text-green-500 text-4xl justify-center' >
           <h2>featured projects</h2>
            </div>
        <div className='max-w-[1000px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-item-center ' id="about">
            


        <div className='relative group'>
                <div className='relative w-full  p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={p6} alt="project 1" className='rounded-lg '/>
                </div>
            </div>

           <div className='p-1 mb-20 drop-shadow-xl  '>
                <h2 className='text-green-500 text-2xl font-bold mb-2'>AnimeTambayan <TbWorldWww className='text-zinc-700'/></h2>
                <p className='text-gray-300 mb-1 text-lg m-0'>
                  Anime streaming website using AnimeDex api.
                </p>
                <div className='md:flex flex-wrap gap-4 text-2xl  flex '>
                <p className='text-green-500 font-bold text-sm'>Tech:</p>
                    <DiHtml5 className='text-orange-500'/>
                    <DiCss3 className='text-blue-500'/>
                    <DiJavascript1 className='text-yellow-500'/>
                </div>
                <div className='md:flex flex-wrap gap-4 text-1xl flex justify-center md:justify-start'>
                <a href="https://github.com/AndreiParquez/Anime-Tambayan" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-indigo-950 hover:text-indigo-50 z-10 cursor-pointer font-bold  text-zinc-800 w-24 h-9 mt-6 p-2 bg-white rounded-full'>
                <TbBrandGithubFilled className='text-2xl font-bold mr-2'/>Github</button></a>
                <a href="https://animetambayan.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-24 h-9 mt-6 p-2 bg-zinc-800 rounded-full'>
                <FaEye className='text-2xl font-bold mr-2'/>view</button></a>
                
                </div>
            </div>


        
             <div className='relative group'>
                <div className='relative w-full  p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={p5} alt="project 1" className='rounded-lg '/>
                </div>
            </div>

           <div className='p-1 mb-20 drop-shadow-xl  '>
                <h2 className='text-green-500 text-2xl font-bold mb-2'>eGrocery <TbWorldWww className='text-zinc-700'/></h2>
                <p className='text-gray-300 mb-1 text-lg m-0'>
                  An fullstack ecommerce web app using nodeJs, Javascript, Express, Mysql.
                </p>
                <div className='md:flex flex-wrap gap-4 text-2xl  flex '>
                <p className='text-green-500 font-bold text-sm'>Tech:</p>
                    <DiHtml5 className='text-orange-500'/>
                    <DiCss3 className='text-blue-500'/>
                    <DiJavascript1 className='text-yellow-500'/>
                    <DiNodejsSmall className='text-green-500'/>
                    <SiMysql className='text-blue-500'/>
                    <SiExpress className='text-green-400'/>  
                </div>
                <div className='md:flex flex-wrap gap-4 text-1xl flex justify-center md:justify-start'>
                <a href="https://github.com/AndreiParquez/eGrocery" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-indigo-950 hover:text-indigo-50 z-10 cursor-pointer font-bold  text-zinc-800 w-24 h-9 mt-6 p-2 bg-white rounded-full'>
                <TbBrandGithubFilled className='text-2xl font-bold mr-2'/>Github</button></a>
                <a href="" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-24 h-9 mt-6 p-2 bg-zinc-800 rounded-full'>
                <FaEye className='text-2xl font-bold mr-2'/>view</button></a>
                
                </div>
            </div>
           


            



            <div className='relative group'>
                <div className='relative w-full  p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={p2} alt="project 1" className='rounded-lg '/>
                </div>
            </div>

           <div className='p-1 mb-20'>
                <h2 className='text-green-500 text-2xl font-bold mb-2'>Kalawakan <TbWorldWww className='text-zinc-700'/></h2>
                <p className='text-gray-300 mb-1 text-lg m-0'>
                  An interactive E learning website about space with stunning ui, made using nodeJs, Javascript, Express, Mysql. 
                </p>
                <div className='md:flex flex-wrap gap-4 text-2xl  flex '>
                <p className='text-green-500 font-bold text-sm'>Tech:</p>
                    <DiHtml5 className='text-orange-500'/>
                    <DiCss3 className='text-blue-500'/>
                    
                    <DiJavascript1 className='text-yellow-500'/>
                    <DiNodejsSmall className='text-green-500'/>
                    <SiMysql className='text-blue-500'/>
                    <SiExpress className='text-green-400'/>
                    
                   
                    
                </div>
                <div className='md:flex flex-wrap gap-4 text-1xl flex justify-center md:justify-start'>
                <a href="https://github.com/AndreiParquez/Kalawakan-E-Learning" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-indigo-950 hover:text-indigo-50 z-10 cursor-pointer font-bold  text-zinc-800 w-24 h-9 mt-6 p-2 bg-white rounded-full'>
                <TbBrandGithubFilled className='text-2xl font-bold mr-2'/>Github</button></a>
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-24 h-9 mt-6 p-2 bg-zinc-800 rounded-full'>
                <FaEye className='text-2xl font-bold mr-2'/>view</button>
                
                </div>
            </div>



            <div className='relative group'>
                <div className='relative w-full  p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={p3} alt="project 1" className='rounded-lg '/>
                </div>
            </div>

           <div className='p-1 mb-20'>
                <h2 className='text-green-500 text-2xl font-bold mb-2'>Hotel Management System <FaWindows className='text-zinc-700'/></h2>
                <p className='text-gray-300 mb-1 text-lg m-0'>
                  Integrated POS and Inventory System for hotel,Crud and Modern Ui 
                </p>
                <div className='md:flex flex-wrap gap-4 text-2xl  flex '>
                <p className='text-green-500 font-bold text-sm'>Tech:</p>
                <SiCsharp className='text-green-400'/>
                    <SiMysql className='text-blue-500'/>
                    <SiExpress className='text-green-400'/>
                   

                   
                    
                </div>
                <div className='md:flex flex-wrap gap-4 text-1xl flex justify-center md:justify-start'>
                <a href="https://github.com/AndreiParquez/Hotel-Management" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-indigo-950 hover:text-indigo-50 z-10 cursor-pointer font-bold  text-zinc-800 w-24 h-9 mt-6 p-2 bg-white rounded-full'>
                <TbBrandGithubFilled className='text-2xl font-bold mr-2'/>Github</button></a>
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-24 h-9 mt-6 p-2 bg-zinc-800 rounded-full'>
                <FaEye className='text-2xl font-bold mr-2'/>view</button>
                
                </div>
            </div>




            <div className='relative group'>
                <div className='relative w-full  p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={p4} alt="project 1" className='rounded-lg'/>
                </div>
            </div>

           <div className='p-1 mb-20'>
                <h2 className='text-green-500 text-2xl font-bold mb-2'>Tagpuan <TbWorldWww className='text-zinc-700'/></h2>
                <p className='text-gray-300 mb-1 text-lg m-0'>
                  Fullstack food ordering website using django and mysql
                </p>
                <div className='md:flex flex-wrap gap-4 text-2xl  flex '>
                <p className='text-green-500 font-bold text-sm'>Tech:</p>
                <DiDjango className='text-green-500'/>
                <DiPython className='text-yellow-400'/>
                    <SiMysql className='text-blue-500'/>
                    
                   

                   
                    
                </div>
                <div className='md:flex flex-wrap gap-4 text-1xl flex justify-center md:justify-start'>
                <a href="https://github.com/AndreiParquez/Restaurant-Ordering-Webapp" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-indigo-950 hover:text-indigo-50 z-10 cursor-pointer font-bold  text-zinc-800 w-24 h-9 mt-6 p-2 bg-white rounded-full'>
                <TbBrandGithubFilled className='text-2xl font-bold mr-2'/>Github</button></a>
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-24 h-9 mt-6 p-2 bg-zinc-800 rounded-full'>
                <FaEye className='text-2xl font-bold mr-2'/>view</button>
                
                </div>
            </div>


            <div className='relative group'>
                <div className='relative w-full  p-2 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
                    <img src={p1} alt="project 1" className='rounded-lg'/>
                </div>
            </div>

           <div className='p-1 mb-20'>
                <h2 className='text-green-500 text-2xl font-bold mb-2'>PudsFanda<TbWorldWww className='text-zinc-700'/></h2>
                <p className='text-gray-300 mb-1 text-lg m-0'>
                   A simple fastfood ordering app using html css and js
                </p>
                <div className='md:flex flex-wrap gap-4 text-2xl  flex '>
                    <p className='text-green-500 font-bold text-sm'>Tech:</p>
                    <DiHtml5 className='text-orange-500'/>
                    
                    <DiJavascript1 className='text-yellow-500'/>
                   
                    <DiCss3 className='text-blue-500'/>
                </div>
                <div className='md:flex flex-wrap gap-4 text-1xl flex justify-center md:justify-start'>
                <a href="https://github.com/AndreiParquez/PudsPaanda" target="_blank" rel="noopener noreferrer">
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg hover:bg-indigo-950 hover:text-indigo-50 z-10 cursor-pointer font-bold  text-zinc-800 w-24 h-9 mt-6 p-2 bg-white rounded-full'>
                <TbBrandGithubFilled className='text-2xl font-bold mr-2'/>Github</button></a>
                <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-white w-24 h-9 mt-6 p-2 bg-zinc-800 rounded-full'>
                <FaEye className='text-2xl font-bold mr-2'/>view</button>
                
                </div>
            </div>


           

           



            

           

            
        
        
        
        
        
        
        </div>
        </>
    )
}

export default Projects