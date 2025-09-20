import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenresId from '../Components/GamesByGenresId'

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres]= useState([]);
  const [header, setHeader] = useState("Popular Games") //save list header

  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(14);
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results)
    })
  }

  const getGameListByGenresId=(id)=>{
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
      console.log(resp)
      setGameListByGenres(resp.data.results)
     
    })

  }
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 px-2 sm:px-4 lg:px-6 xl:px-8 gap-4 lg:gap-6 w-full'>
      <div className='lg:col-span-1'>
        <div className='hidden lg:block'>
          <GenreList setHeader={setHeader} genreid={(id)=>getGameListByGenresId(id)} />
        </div>
        {/* Mobile Genre List - Horizontal Scroll */}
        <div className='lg:hidden mb-4'>
          <div className='flex overflow-x-auto space-x-2 pb-2'>
            <div className='flex-shrink-0'>
              <button 
                onClick={() => {setHeader("Popular Games"); getGameListByGenresId(14)}}
                className='px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium'
              >
                Popular
              </button>
            </div>
            <div className='flex-shrink-0'>
              <button 
                onClick={() => {setHeader("Action Games"); getGameListByGenresId(4)}}
                className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600'
              >
                Action
              </button>
            </div>
            <div className='flex-shrink-0'>
              <button 
                onClick={() => {setHeader("RPG Games"); getGameListByGenresId(5)}}
                className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600'
              >
                RPG
              </button>
            </div>
            <div className='flex-shrink-0'>
              <button 
                onClick={() => {setHeader("Strategy Games"); getGameListByGenresId(10)}}
                className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-full text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600'
              >
                Strategy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:col-span-3'>
        {allGameList?.length>0&& gameListByGenres.length>0? 
        <div>
          <Banner gameBanner={allGameList[0]} />
          <TrendingGames gameList = {allGameList} />
          <GamesByGenresId header={header} gameList={gameListByGenres} />
        </div>
          : null}
      </div>
    </div>
  )
}

export default Home