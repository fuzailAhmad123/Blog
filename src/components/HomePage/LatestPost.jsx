import React from 'react'
import { LatestPosts } from '../../data/LatestPosts'
const LatestPost = () => {
  return (
    <div className='w-full mx-auto mt-[50px]'>
        <p className='ml-4 text-xl  uppercase'>Most Popular</p>

        <div className='flex flex-col gap-10 sm:gap-6 mt-8 py-6 border-t border-t-slate-500 border-b border-b-slate-500'>
            {
                LatestPosts.map( (post) => (
                    <div key={post.id} className='md:flex md:flex-row md:gap-x-4  flex flex-col gap-y-4 '>
                         <div>
                            <img src={post.image} alt="" className='' />
                         </div>

                         <div>
                            <p className='text-md sm:text-lg font-semibold text-black '>{post.title}</p>
                            <div className='flex gap-x-2 mt-2 sm:mt-1'>
                               <span className='text-emerald-500'>{post.reads}</span>
                               <p className='text-slate-800 hover:text-blue-500 cursor-pointer text-sm sm:text-base '>{post.publisher + "/" + post.date}</p>
                             </div>

                             <p className='text-slate-600 text-xs sm:text-sm mt-4'>{post.description + "...Read more"}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LatestPost