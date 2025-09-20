import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import { ThemeContext } from './Context/ThemeContext'

function App() {
  const [count,setCount] = useState(0)
  const [theme,setTheme] = useState('dark')
  useEffect(()=> {
    const savedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
    setTheme(savedTheme)
    // Apply theme class to document body
    document.body.className = savedTheme
  },[])
  return (  
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : 'bg-white'} min-h-screen w-full`}>
        <Header/>
        <Home/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
