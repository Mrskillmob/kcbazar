import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex flex-row w-full p-2 bg-navbar items-center border-b-8 border-white border-solid">
      <em className="ml-2 text-lime-500 font-bold text-2xl text-purple"> KC Bazár</em>
      <Link to="/kcbazar/" className="ml-2 text-white font-bold text-xl pl-10">Domov</Link>
      <Link to="/kcbazar/allItems" className="ml-2 text-white font-bold text-xl pl-10">Ponuka</Link>
      <Link to="/kcbazar/add" className="ml-2 text-white font-bold text-xl pl-10">Predaj</Link>
      <Link to="/kcbazar/about" className="ml-2 text-white font-bold text-xl pl-10">O nás</Link>
      <Link to="/kcbazar/login" className="ml-2 text-white font-bold text-xl pl-10">Prihlásenie</Link>
    </div>
  )
}
