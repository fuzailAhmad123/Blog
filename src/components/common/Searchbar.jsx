import React from 'react'

const Searchbar = () => {
  return (
    <div className='w-screen mt-[60px] flex justify-center'>
        <div className='md:w-[60%]  w-[80%]'>
            <form className='flex items-center gap-x-4'>
                <input type='text ' placeholder='Search Here' className='w-[80%] px-4 py-3 rounded-3xl border-2 border-slate-300'/>
                <button type='submit'  className='bg-blue-600 rounded-3xl py-3 px-6 text-white opacity-90 hover:scale-95 transition-all duration-200'>Search</button>
            </form>
        </div>
    </div>
  )
}

export default Searchbar