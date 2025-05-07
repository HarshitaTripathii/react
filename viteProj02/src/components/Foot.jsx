import React from 'react'

function Foot({setColor}) {
  return (
    // <div className='fixed bottom-10 flex justify-center items-center'>
        <div className="flex  items-center justify-evenly w-full h-20 bg-transparent rounded-xl  shadow-xl">
            <button onClick={()=>setColor("blue")} className="bg-blue-500 w-20 h-14 flex rounded-xl  items-center justify-center ">Blue</button>
            <button onClick={()=>setColor("red")} className="bg-red-600 w-20 h-14 flex rounded-xl  items-center justify-center ">Red</button>
            <button onClick={()=>setColor("yellow")} className="bg-yellow-400 w-20 h-14 flex rounded-xl  items-center justify-center">Yellow</button>
            <button onClick={()=>setColor("orange")} className="bg-orange-500 400 w-20 h-14 flex  rounded-xl items-center justify-center">Orange </button>
            <button onClick={()=>setColor("pink")} className="bg-pink-400 w-20 h-14 flex rounded-xl  items-center justify-center">Pink</button>
            <button onClick={()=>setColor("green")} className="bg-green-400 w-20 h-14 flex rounded-xl  items-center justify-center ">Green</button>
            <button onClick={()=>setColor("black")} className="bg-black w-20 h-14 flex rounded-xl  items-center justify-center text-white">Black</button>
        </div>
      
    // </div>
  )
}

export default Foot
