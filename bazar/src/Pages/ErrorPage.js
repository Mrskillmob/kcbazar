import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ErrorPage() {
  return (
    <div className="grid grid-rows-main h-full w-full">
      <Navbar />
      <div className="w-full bg-dark-primary h-full flex flex-row items-center justify-center">
        <div className="w-64 h-32 flex items-center bg-navbar justify-center">
          <h1 className="text-xl text-white font-bold">404-ka :(</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage