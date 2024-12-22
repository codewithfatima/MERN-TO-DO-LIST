import React from 'react'
import {Route, Routes }  from 'react-router-dom';
import SideBar from './components/SideBar';
import HomePage from './pages/HomePage';
import FavoritesPages from './pages/FavoritesPages'
import './App.css'

function App() {

  return (
    <>
    <div className='flex'>
      <SideBar />
      <Routes>
       <Route path='/' element={<HomePage />} />
       <Route path='/favorites' element={<FavoritesPages />} />
      </Routes>
    </div>
    </>
  )
}

export default App
