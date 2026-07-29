import { useState } from 'react'
import './App.css'
// import Header from './components/Header/Header.jsx';
import RandomHero from './components/RandomHero/RandomHero.jsx'

// Need to add "BrowserRouter" or something similar for <Link> to work
function App() {
  return (
    <>
      {/* <h2>MAIN aka random hero</h2> */}
      <RandomHero></RandomHero>
    </>
  )
}

export default App
