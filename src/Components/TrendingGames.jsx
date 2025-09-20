import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
  useEffect(()=>{
    console.log(gameList)
  },[])
  return (
    <div className='mt-5 mb-6'>
      <h2 className='font-bold text-xl sm:text-2xl md:text-3xl text-black dark:text-purple-500 mb-4'>Trending Games</h2>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4'>
      {gameList.map((item,index)=>index <4 &&(
        <div key={item.id} className='bg-gray-100 dark:bg-[#76a8f75e] rounded-lg group hover:scale-105 
        transition-all duration-300 ease-in-out cursor-pointer overflow-hidden'>
          <img src={item.background_image} className='h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-full object-cover'/>
          <div className='p-2 sm:p-3'>
            <h2 className='text-black dark:text-purple-500 text-sm sm:text-base font-bold line-clamp-2'>{item.name}</h2>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TrendingGames