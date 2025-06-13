import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Header() {
    return (
        <div className="w-full bg-white shadow-xl shadow-black/30 top-0 z-50 fixed">
            <div className="max-w-7xl mx-auto px-4">
                <div className="h-16 md:h-20 flex items-center justify-between">
                    <img src='/myLogo.png' className='h-10 md:h-12'></img>
                    
                    <div className='hidden md:flex items-center space-x-8'>
                        <NavLink to='/home' className={({isActive})=>`${isActive ? "text-orange-500" :"text-gray-700"} hover:text-orange-500 font-medium`}>Home</NavLink>
                        <NavLink to='/about' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 font-medium`}>About</NavLink>
                        <NavLink to='/contact' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 font-medium`}>Contact</NavLink>
                        <NavLink to='/github' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 font-medium`}>Github</NavLink>
                        <NavLink to='/user/123' className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-700"} hover:text-orange-500 font-medium`}>User</NavLink>
                    </div>

                    <div className='hidden md:flex items-center space-x-6'>
                        <a className='hover:text-orange-500 cursor-pointer font-medium'>LogIn</a>
                        <button className='rounded-lg bg-orange-500 h-9 px-4 text-white shadow-md hover:bg-orange-600 transition-colors duration-200'>Get Started</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
