import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Login() {
  return (
            <div className="grid grid-rows-main h-full w-full">
            <Navbar />
            <div className="w-full bg-dark-primary h-screen flex flex-row items-center justify-center ">

            

            
            <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-purple">Prihlásenie</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST"/>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">Emailová adresa</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Emailová adresa" />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">Heslo</label>
                    <input id="password" name="heslo" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Heslo" />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
                        Zapamätaj si ma
                    </label>
                    </div>

                    <div className="text-sm">
                    <Link to="/kcbazar/register" className="font-medium text-white hover:text-indigo-500">
                        Ešte nemáte účet?
                    </Link>
                    </div>
                </div>

                <button type="button"  className="text-white text-3xl bg-red-600 p-3 rounder-xl font-bold group relative 
                    w-full flex justify-center py-2 px-4">Prihlásiť!</button>
                
                    
                    
            

            </div>
            </div>
            <Footer />
            </div>
  )
}

export default Login