import React from 'react'

const PopularTags = [
    "Development",
    "Stock Market",
    " Marketing",
    "Software ",
    "Drugs",
    "Covid",
    "Share Price",
    "Industrial"
]
const MostPopularTags = () => {
  return (
    <div className='max-w-[300px] absolute right-2 translate-y-[70%] hidden xl:block'>
        <p className='text-lg text-slate-800 font-semibold'>Most Popular Tags</p>
          <div className='grid grid-cols-3 gap-4 mt-6'>
         {
            PopularTags.map((tag) => (
                <span className='text-xs text-slate-600 bg-slate-100 rounded-md flex justify-center items-center px-2 py-2 hover:text-blue-500 hover:underline cursor-pointer'>{tag}</span>
            ))
         }
    </div>
    </div>
   
  )
}

export default MostPopularTags