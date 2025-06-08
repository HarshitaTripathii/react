import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Header() {
    return (
        <div className="w-screen h-24 bg-white flex justify-around items-center text-gray-700 font-bold gap-8 shadow-xl shadow-black/30 top-0 z-50 fixed text-xl">
            <img src='/myLogo.png' className='h-14'></img>
            <div className='flex justify-around items-center gap-8 cursor-pointer'>
                <NavLink to='/home' className={({isActive})=>`${isActive ? "text-orange-500" :"text-gray-700"} hover:text-orange-500`}>Home</NavLink>
                <NavLink to='/about' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500`}>About</NavLink>
                <NavLink to='/contact' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500`}>Contact</NavLink>
                <NavLink to='/github' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500`}>Github</NavLink>
                <NavLink to='/user/123' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500`}>User</NavLink>
            </div>
            <div className='flex justify-around items-center gap-8'>
                <a className='hover:text-orange-500 cursor-pointer'>LogIn</a>
                <button className='rounded-xl bg-orange-500 h-10 w-32 shadow-xl shadow-black/30 focus:ring-2 hover:ring-orange-400 hover:bg-white hover:text-orange-500'>Get Started</button>
            </div> 
        </div>
    )
}

export default Header
