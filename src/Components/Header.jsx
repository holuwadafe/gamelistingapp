import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiMiniMoon, HiMiniMagnifyingGlass, HiSun} from "react-icons/hi2";
import { ThemeContext } from '../Context/ThemeContext';
function Header() {
    const [toggle,setToggle]=useState(true);
    const {theme,setTheme} = useContext(ThemeContext)

    useEffect(()=> {
        console.log("Theme",theme)
    },[])
  return (
    <div className='flex flex-col sm:flex-row items-center p-3 gap-3 sm:gap-0 w-full'>
        <img src ={logo} width={60} height={60} className='flex-shrink-0'/>
        <div className='flex bg-slate-200 dark:bg-slate-700 p-2 w-full sm:mx-5 rounded-full items-center'>
            <HiMiniMagnifyingGlass className='text-gray-500 dark:text-gray-300 ml-2'/>
            <input
              type='text' 
              placeholder="Search Games"
              className='px-2 bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-300 w-full'
              />
        </div>
        <div className='flex-shrink-0'>
           {theme=='light'? (
            <HiMiniMoon
             className='text-[35px] bg-slate-200
             text-black p-1 rounded-full cursor-pointer hover:bg-slate-300 transition-colors'
             onClick={() => {setTheme('dark'); localStorage.setItem('theme','dark'); document.body.className = 'dark'}}
           />
        ): ( <HiSun
            onClick={() => {setTheme('light'); localStorage.setItem('theme','light'); document.body.className = 'light'}}
            className='text-[35px] bg-slate-200
            text-black p-1 rounded-full cursor-pointer hover:bg-slate-300 transition-colors'
            />
        )} 
            
        </div>
    </div>
  )
}

export default Header