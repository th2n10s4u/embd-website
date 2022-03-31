import React from 'react'
import Navbar from './assets/components/Navbar'
import Main from './assets/components/Main.js'
import {MainCarousel} from './assets/components/Carousel';
import './App.css';

function App() {
  return (
    <div className="container">
        <Navbar />
        {/* <Main /> */}
        <MainCarousel />
    </div>
  )
}

export default App;
