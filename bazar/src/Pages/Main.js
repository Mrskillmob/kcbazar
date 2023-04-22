import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CSSProperties } from '../myStyles.css';

function Main() {
  return (
    <div className="grid grid-rows-main h-full w-full">
      <Navbar />
      

      <div className="main-page">
      <div className="main-page__content">
        <h1 className=''>Vitaj na KCBazar!</h1>
        <p>Od ľudí k ľuďom.</p>
        <a href='/allItems' ><button className="main-page__btn" >Nakupuj teraz!</button> </a>
      </div>
    </div>
      

      
      <Footer />
    </div>
  )
}

export default Main