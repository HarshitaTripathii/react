import React from 'react'

function Home() {
    return (
        <div className='flex justify-evenly items-center pt-24 pb-48 min-h-screen'>
            <img src='home.png'></img>
            <div className='flex flex-col text-right items-end gap-3'>
                <h1 className="text-4xl font-bold">Download Now</h1>
                <p className='text-2xl'>vniownfenb</p>
                <button className='rounded-xl bg-orange-500  h-10 w-32 shadow-xl shadow-black/30 focus:ring-2 hover:ring-orange-400 hover:bg-white hover:text-orange-500 '>Download Now</button>

            </div>

        </div>
    )
}

export default Home
