import React from 'react'
import {BsFacebook , BsTwitter , BsLinkedin , BsLink45Deg} from "react-icons/bs"

const Contactcard = () => {
  return (
    <div className='md:flex flex-col gap-6 text-[30px] text-slate-800 absolute top-[0] translate-y-[20vh] translate-x-20 hidden '>
            <BsFacebook className='hover:text-blue-500 hover:scale-105 transition-all duration-200 cursor-pointer'/>
            <BsTwitter className='hover:text-blue-500 hover:scale-105 transition-all duration-200 cursor-pointer'/>
            <BsLinkedin className='hover:text-blue-500 hover:scale-105 transition-all duration-200 cursor-pointer'/>
            <BsLink45Deg className='hover:text-blue-500 hover:scale-105 transition-all duration-200 cursor-pointer'/>
    </div>
  )
}

export default Contactcard