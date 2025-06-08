import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


function Contact() {
    return (
        <div className='flex justify-center items-center pt-24 pb-48 min-h-screen gap-36'>
            <div className='flex justify-center items-center gap-28'>
                <div className='flex flex-col justify-center items-start gap-3 bg-gray-200 w-80 h-64 rounded-xl shadow-xl shadow-orange-500/30 pl-6 '>
                    <div className='flex flex-col items-start'>
                        <h1 className="text-4xl font-bold ">Get in Touch</h1>
                        <p className='text-2xl'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <a> <FontAwesomeIcon icon={faLocationDot} className="mr-3" />Loaction</a>
                        <a> <FontAwesomeIcon icon={faPhoneVolume} className="mr-3" />Phone Number</a>
                        <a><FontAwesomeIcon icon={faEnvelope} className="mr-3" /> Email Id</a>
                    </div>
                </div>

                <div >
                    <form className='flex flex-col  items-start gap-5'>
                        <input type='text' placeholder='Full Name' className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"></input>
                        <input type='email' placeholder='Email' className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"></input>
                        <input type='number' placeholder='Telephone' className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"></input>
                        <submit className='text-center rounded-xl bg-orange-500  h-10 w-32 shadow-xl shadow-black/30 focus:ring-2 hover:ring-orange-400 hover:bg-white hover:text-orange-500 pt-2 font-bold cursor-pointer'>Submit</submit>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
