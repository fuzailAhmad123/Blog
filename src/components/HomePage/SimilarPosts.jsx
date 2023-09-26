import React from 'react'
import { useState } from 'react';
import { HomePageSimilarPost } from '../../data/HomePageSimilarPost';
import CurrentCard from './CurrentCard';
const tabsName = [
    "Recent",
    "Tags",
    "Most Popular",
    "Author",
    
];

const SimilarPosts = () => {
    const [currentTab , setCurrentTab] = useState(tabsName[0]);
    const [courses ,setCourses] = useState(HomePageSimilarPost[0].posts);

    const setmyCards = (value) => {

        setCurrentTab(value);
        const result = HomePageSimilarPost.filter((course) => course.tag === value);
        setCourses(result[0].posts);
    }
  return (
    <div className='w-full mx-auto mt-[40px]'>
        <p className='ml-4 text-xl  uppercase'> Similar Posts</p>

        <div className=' mt-4 flex gap-x-4 pl-4'>
            {tabsName.map((tab , index) => (
                <p className={`${currentTab  === tab ? "text-blue-500 border-b-2 border-b-blue-500" :
                "text-slate-700"} font-semibold py-2 cursor-pointer`} 
                key={index}
                onClick={() => setmyCards(tab)}
                >{tab}</p>
            ))}
        </div>

        <div className='flex items-center gap-x-3 mt-4 lg:w-[115%] md:w-[120%] sm:w-[90%] w-[100%] flex-wrap md:flex-nowrap '>
              {
                courses.map((element ,index) => {
                    return(
                       <CurrentCard 
                       key={index}
                       cardData={element} 
                       />
                    )
                })
              }
        </div>
    </div>
  )
}

export default SimilarPosts
