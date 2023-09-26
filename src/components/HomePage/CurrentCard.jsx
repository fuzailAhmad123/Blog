import React from 'react'

const CurrentCard = ({cardData}) => {
  return (
    <div className='flex flex-col items-center gap-x-4 px-3 py-4 shadow-lg '>
        <div>
            <img src={cardData.image} alt="" />
        </div>
        <div>
            <p className='text-lg font-semibold'>{cardData.heading}</p>
            <p className='text-slate-700 text-xs sm:text-sm mt-1'>{cardData.description}</p>

            <p className='text-slate-800 text-xs sm:text-sm font-semibold mt-1'>
                {cardData.publisher + "/" + cardData.date}
            </p>
        </div>
    </div>
  )
}

export default CurrentCard