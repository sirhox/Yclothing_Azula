import './App.css';
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import ItemListContainer from '../src/views/ItemListContainer';
import ItemDetailConatiner from '../src/views/ItemDetailContainer';
import Shop from '../src/views/Shop'
import CartContainer from '../src/views/CartContainer';
import { CartProvider } from "./contexts/CartContext";
import React from 'react';

function App() {
  return (
    <>
    <CartProvider>
    <Router>
      <NavBar 
      list={[{title: 'Invierno'}, {title: 'Verano'}, {title: 'Primavera'}, {title: 'Otoño'},]}
      brand="Yclothing"
     />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailConatiner />} />
          <Route path="/category/:title" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<Shop />} />
        </Routes>
    </Router>
    </CartProvider>
    </>
  );
}

export default App;
