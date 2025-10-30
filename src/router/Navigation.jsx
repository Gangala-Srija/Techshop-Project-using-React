import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Container from '../pages/home/Container'
import ProductDetails from '../components/productDetails/ProductDetails'
import Allproducts from '../pages/allproducts/Allproducts'
import Cart from '../pages/cart/Cart'

export default function Navigation({setsearch}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Container setsearch={setsearch}/>}></Route>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/allproduct" element={<Allproducts setsearch={setsearch}/>}/>
        <Route path="/cart" element={<Cart setsearch={setsearch}/>}/>
      </Routes>
    </div>
  )
}
