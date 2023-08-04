import React from 'react'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'
import SingleCartProduct from './SingleCartProduct'
import NewProduct from './NewProduct';
import './App.css'
import { createContext , useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
export const globalstate = createContext({})

function App() {
    const [cart,setcart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <globalstate.Provider value={{cart,setcart}}>
            <Header/>
            <Routes>
              <Route path='/' element={<Products/>}></Route>
              <Route path='/Cart' element={<Cart/>}></Route>

              <Route path='/Product' element={<NewProduct/>}>
                  <Route index element={<Products/>}></Route>
                  <Route path=':id' element={<SingleCartProduct/>}></Route>
              </Route>

            </Routes>
        </globalstate.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
