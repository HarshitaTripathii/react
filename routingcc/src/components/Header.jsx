import React from 'react'

function Header() {
    return (

        <div className="w-screen h-24 bg-white flex justify-around items-center text-black font-bold gap-8 shadow-xl shadow-black/30 top-0 z-50 fixed text-xl">
            <img src='myLogo.png' className='h-14'></img>
            <div class="links" className='flex justify-around items-center gap-8  cursor-pointer'><a className='hover:text-orange-500'>Home</a>
                <a className='hover:text-orange-500'>About</a>
                <a className='hover:text-orange-500'>Contact</a>
                <a className='hover:text-orange-500'>Github</a>
            </div>
            <div class="buttons" className='flex justify-around items-center gap-8'>
                <a className='hover:text-orange-500 cursor-pointer' >LogIn</a>
                <button className='rounded-xl bg-orange-500  h-10 w-32 shadow-xl shadow-black/30 focus:ring-2 hover:ring-orange-400 hover:bg-white hover:text-orange-500 '>Get Started</button>
            </div>
        </div>


    )
}

export default Header
