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
        <Route  path="/" element={<Main />} />
        <Route  path="/allItems" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/about" element={<About />}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/main" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
