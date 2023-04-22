import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import Item from './Pages/Item'
import About from './Pages/About'
import Add from './Pages/Add'
import Success from './Pages/Success'
import Main from './Pages/Main'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return ( 
    <div className='h-full'>
    <Router>     
      <Routes>
        <Route  path="/kcbazar" element={<Main />} />
        <Route  path="/kcbazar/allItems" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/kcbazar/item/:id" element={<Item />} />
        <Route path="/kcbazar/about" element={<About />}/>
        <Route path="/kcbazar/add" element={<Add/>}/>
        <Route path="/kcbazar/success" element={<Success/>}/>
        <Route path="/kcbazar/main" element={<Main/>} />
        <Route path="/kcbazar/login" element={<Login/>} />
        <Route path="/kcbazar/register" element={<Register/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
