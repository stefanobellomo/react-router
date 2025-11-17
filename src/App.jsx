import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import Errore from './pages/Errore'

import DefaultLayout from './layouts/DefaultLayout'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/chi-siamo' element={<ChiSiamo />}></Route>
            <Route path='/prodotti' element={<Prodotti />}></Route>
            <Route path='/errore' element={<Errore />}></Route>
            <Route path='/prodotti/:id' element={<Prodotto />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
