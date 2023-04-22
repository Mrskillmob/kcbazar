import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Register() {
  return (
            <div className="grid grid-rows-main h-full w-full">
                <Navbar />
                    <div className="w-full bg-dark-primary h-screen flex flex-row items-center justify-center ">

            

                    <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-purple">Vytvor si nový účet</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST"/>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="full-name" className="sr-only">Full name</label>
                    <input id="full-name" name="full-name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Full name" />
                    </div>
                    <div>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                    
                </div>
                <button type="button"  className="text-white text-3xl bg-red-600 p-3 rounder-xl font-bold group relative 
                    w-full flex justify-center py-2 px-4">REGISTER!</button>
                </div>




            
            
                    </div>
                <Footer />
            </div>
  )
}

export default Register