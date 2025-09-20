import React, { useEffect, useState } from 'react'

function Banner({gameBanner}) {
  console.log(gameBanner.name)
    useEffect(()=>{

    },[])
  return (
    <div className='relative mb-6'>
      <div className='absolute bottom-0 p-4 sm:p-5 bg-gradient-to-t
      from-slate-900 to-transparent w-full rounded-b-lg'>
        <h2 className='text-lg sm:text-xl md:text-2xl text-orange-500 font-bold mb-2'>{gameBanner.name}</h2>
        <button className='bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors'>Get Now</button>
      </div>
        <img src={gameBanner.background_image}
        className='h-[200px] sm:h-[250px] md:h-[320px] w-full object-cover rounded-lg'/>
    </div>
  )
}

export default Banner