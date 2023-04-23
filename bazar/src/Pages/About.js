import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CSSProperties } from '../myStyles.css';
import Martinobr from '../images/martinko.jpg'
import Simonobr from '../images/simon.jpg'

function About() {
  return (
    <div className="grid grid-rows-main h-full w-full">
      <Navbar />
      

      
    <div className="about-page bg-dark-primary">
      <div className="about-page__container">
        <h1 className="about-page__heading">Niečo málo o nás!</h1>
        <div className="about-page__content">
          <div className="about-page__left">
          <img src={Martinobr} alt="Martin" className="about-page__photo" />
          </div>
          <div className="about-page__right">
            <h2 className='text-purple'>Martin</h2>
            <p className='text-white'>Developer</p>
            <p className='text-white'>Email: martin@kcbazar.com</p>
            <p className='text-white'>Telefón: +421 948425666</p>
            <p className='text-white'>Discord: Mrskillmob#2323</p>
          </div>
        </div>
        <div className="about-page__content">
          <div className="about-page__left">
            <img src={Simonobr} alt="Simon" className="about-page__photo" />
          </div>
          <div className="about-page__right">
            <h2 className='text-purple'>Simon</h2>
            <p className='text-white'>Developer</p>
            <p className='text-white' >Email: simon@kcbazar.com</p>
            <p className='text-white'>Telefón: +421 901702666</p>
            <p className='text-white'>Discord: Simon#5678</p>
          </div>
        </div>
      </div>
    </div>
  


      <Footer />
    </div>
  )
}

export default About