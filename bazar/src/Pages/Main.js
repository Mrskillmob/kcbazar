import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CSSProperties } from '../myStyles.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="grid grid-rows-main h-full w-full">
      <Navbar />
      

      <div className="main-page">
      <div className="main-page__content">
        <h1 className=''>KCBazar!</h1>
        <p>Od ľudí k ľuďom.</p>
        <Link to='/kcbazar/allItems'  className="main-page__btn" >Nakupuj teraz! </Link>
      </div>
    </div>
      

      
      <Footer />
    </div>
  )
}

export default Main