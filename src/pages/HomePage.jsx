import React from 'react'
import LatestPost from '../components/HomePage/LatestPost'
import SimilarPosts from '../components/HomePage/SimilarPosts'
import Footer from '../components/common/Footer'
import Contactcard from '../components/HomePage/Contactcard'
import MostPopularTags from '../components/HomePage/MostPopularTags'
const HomePage = () => {
  return (
    <div>
        <div className='w-screen h-fit min-h-screen flex justify-between relative'>
       
       <Contactcard/>

       <div className=' w-[80%] md:w-[55%] mx-auto'>
       <LatestPost/>
       <SimilarPosts/>
      
        </div>  

        <MostPopularTags/>
       
       
      </div>

      <Footer/>
    </div>
    
  )
}

export default HomePage