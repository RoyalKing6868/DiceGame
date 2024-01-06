import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './components/LandingPage'
import GamePlay from './components/gamePlay'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => (!prev))
  };
  return (
    <>
      {isGameStarted ? <GamePlay/> : <LandingPage toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
