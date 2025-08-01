import { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import NavBar from '../src/ui/NavBar';
import Game from './Game';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Game/>
    </>
  )
}

export default App
