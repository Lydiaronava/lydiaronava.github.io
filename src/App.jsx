import { useState } from 'react'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Body from './components/Body'

import './App.css'

function App() {

  return (
    <>
      {/* <h1>Lydia Rodriguez de la Nava</h1>
      <p>Website under construction... come back soon!</p> */}
      <Navigation />
      <Body />
      <Footer />
    </>
  )
}

export default App
