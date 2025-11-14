// import { useState } from 'react'
// import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import DefaultLayout from './layouts/DefaultLayout'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/ChiSiamo' element={<ChiSiamo />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
