import React, { useEffect } from 'react'

function GamesByGenresId({gameList, header}) {
    useEffect(()=>{
      console.log("GameList",gameList)
    },[])
  return (
    <div>
      <h2 className='font-bold text-xl sm:text-2xl md:text-3xl text-black dark:text-white mt-5 mb-4'>{header}</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6'>
      {gameList.map((item)=>(
        <div key={item.id} className='bg-gray-300 dark:bg-[#76a8f75e] p-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-300
        cursor-pointer overflow-hidden'>
          <img src={item.background_image} className='w-full h-[150px] sm:h-[180px] md:h-[200px] rounded-lg object-cover mb-3'/>
          <div className='space-y-2'>
            <h2 className='text-black dark:text-purple-500 text-sm sm:text-base font-bold line-clamp-2 flex items-center'>
              {item.name}
              {item.metacritic && (
                <span className='ml-2 px-2 py-1 rounded-sm text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-medium'>
                  {item.metacritic}
                </span>
              )}
            </h2>
            <div className='text-gray-700 dark:text-purple-500 text-xs sm:text-sm space-y-1'>
              <div>⭐ {item.rating}</div>
              <div>💭 {item.reviews_count}</div>
              <div>🔥 {item.suggestions_count}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default GamesByGenresId