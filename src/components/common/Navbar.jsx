import React from 'react'
import {AiOutlineDown} from "react-icons/ai"
import CategoryList from '../Navbar/CategoryList'
import ResourcesList from '../Navbar/ResourcesList'
import {GiHamburgerMenu} from "react-icons/gi"
const Navbar = () => {
  return (
    <div className='w-screen h-fit min-h-[80px] px-8  md:px-16 py-6 flex items-center justify-between shadow-lg'>

        <div className=''>
            <p className='text-3xl font-semibold text-blue-900'>BLOG<span className='font-normal text-blue-600'>ISTA</span></p>
        </div>


         <div className=' hidden md:flex items-center gap-x-14 '>
         <div>
            <ul className='flex items-center gap-5'>
                <li className='flex items-baseline gap-x-1 relative opacity-80 hover:opacity-100 cursor-pointer group'>
                    <p className=''>Categories</p>
                    <AiOutlineDown  className='text-xs'/>
                    <CategoryList/>
                </li>

                <li className='flex items-baseline gap-x-1 relative opacity-80 hover:opacity-100 cursor-pointer group'>
                    <p>Resources</p>
                     <AiOutlineDown className='text-xs'/>
                     <ResourcesList/>
                </li>
            </ul>
        </div>


        <div className='flex items-center gap-4'>
          <button className='border-2 border-blue-600 rounded-3xl py-2 px-4 opacity-90 hover:scale-x-95 transition-all duration-200 '>Subscribe</button>
          <button className='bg-blue-600 rounded-3xl py-2 px-6 text-white opacity-90 hover:scale-x-95 transition-all duration-200' >Signup</button>
        </div>
         </div>
        
        <div className='block md:hidden'>
                   <GiHamburgerMenu className='text-[30px] text-slate-700'/>
        </div>
    </div>
  )
}

export default Navbar