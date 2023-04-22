import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex flex-row w-full p-2 bg-navbar items-center">
      <em className="ml-2 text-lime-500 font-bold text-2xl text-purple"> KC Bazár</em>
      <Link to="/" className="ml-2 text-white font-bold text-l pl-10">Domov</Link>
      <Link to="/allItems" className="ml-1 text-white font-bold text-l pl-10  ">Ponuka</Link>
      <Link to="/add" className="ml-2 text-white font-bold text-l pl-10">Predaj</Link>
      <Link to="/about" className="ml-2 text-white font-bold text-l pl-10">O nás</Link>
      <Link to="/login" className="ml-2 text-white font-bold text-l pl-10">Prihlásenie</Link>
    </div>
  )
}
