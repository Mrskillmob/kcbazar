import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex flex-row w-full p-2 bg-navbar items-center ">
      <em className="ml-2 text-lime-500 font-bold text-2xl text-purple hover:scale-105"> KC Bazár</em>
      <Link to="/kcbazar/" className="ml-2 text-white font-bold text-xl pl-10 hover:scale-105">Domov</Link>
      <Link to="/kcbazar/allItems" className="ml-2 text-white font-bold text-xl pl-10 hover:scale-105">Ponuka</Link>
      <Link to="/kcbazar/add" className="ml-2 text-white font-bold text-xl pl-10 hover:scale-105">Predaj</Link>
      <Link to="/kcbazar/about" className="ml-2 text-white font-bold text-xl pl-10 hover:scale-105">O nás</Link>
      <Link to="/kcbazar/login" className="ml-2 text-white font-bold text-xl pl-10 hover:scale-105">Prihlásenie</Link>
    </div>
  )
}
