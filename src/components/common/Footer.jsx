import React from 'react'

const Footer = () => {
  return (
    <div  className='w-screen h-fit py-14 px-6  bg-slate-100 mt-[50px]'>

        <div className='flex md:flex-row flex-col items-center justify-between w-[90%] md:w-[80%] xl:w-[50%] mx-auto px-8'>
        <div className='h-full flex flex-col justify-between gap-y-3 md:gap-y-16'>
        <p className='text-3xl font-semibold text-blue-900'>BLOG<span className='font-normal text-blue-600'>ISTA</span></p>

        <p className='text-slate-500'>@copyright by Fuzail ahmad</p>
        </div>

        <div className='flex items-start gap-x-32 mt-8 md:mt-0'>
        <div>
            <ul className='text-slate-600 '>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>ContactUs</li>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>AboutUs</li>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>Catgeory</li>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>Resources</li>
            </ul>
        </div>

        <div>
            <ul className='text-slate-600 '>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>Category</li>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>Latest Blogs</li>
                <li className='mt-4 text-slate-800'>Contacts</li>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>dummyemail2.com</li>
                <li className='hover:text-blue-500 hover:underline cursor-pointer mt-1'>+12345-6789</li>
            </ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer