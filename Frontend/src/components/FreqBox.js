import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'


const FreqBox = () => {
    
     //   states
     const [freq, setFreq] = useState(false)


     const show_freq = () => {
         setFreq(!freq)
     }

    return (
        <div>
            <div onClick={show_freq} className=' px-4 rounded-lg text-[1.125rem] text-black border py-2 mx-auto w-[40%] bg-white'>
                <div  className="flex items-center justify-between">
                    <p>What is Maqure ? </p>
                    <RiArrowDropDownLine  className={`cursor-pointer  ${freq && ' rotate-180'} `} size={40} />
                </div>
                <p className={`text-base text-gray-500 ${!freq && 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo vero dolore deleniti rerum suscipit distinctio saepe optio recusandae vitae.</p>
            </div>
        </div>
    )
}

export default FreqBox