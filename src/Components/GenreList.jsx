import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'


function GenreList({genreid, setHeader }) {

    const [GenreList, setGenreList]=useState([]) 
    const [activeIndex, setActiveIndex]=useState(0)
    
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList =()=> {
      GlobalApi.getGenreList.then((resp) => {
        console.log(resp.data.results);
        setGenreList(resp.data.results);
      })
    }

  return (
    <div className='px-2 sm:px-4 lg:px-6 w-full'>
      <h2 className='text-xl sm:text-2xl font-bold text-black dark:text-purple-500 mb-4'>Genres</h2>
      <div className='space-y-2 max-h-[600px] overflow-y-auto'>
        {GenreList.map((item,index)=>(
            <div
            key={item.id}
            onClick={()=>{
              setActiveIndex(index); 
              setHeader(item.name); //save the name clicked
              genreid(item.id);
            }}
            className={`flex gap-3 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600
              p-3 group rounded-lg transition-all duration-200
              ${activeIndex==index? "bg-gray-200 dark:bg-gray-600":""}`}>
              <img src={item.image_background}
              className={`w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg group-hover:scale-105
              transition-all ease-out duration-300
              ${activeIndex==index? "scale-105":""}`} />
              <h3 className={`text-black dark:text-purple-500 text-sm sm:text-base group-hover:font-bold
               transition-all ease-out duration-300 flex-1
               ${activeIndex==index? "font-bold":""}`}>{item.name}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default GenreList