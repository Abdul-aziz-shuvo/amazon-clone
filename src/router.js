import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import Header from "./header/header";
import Checkout from './checkout/Checkout'
import Home from "./home/Home";
function Router() {
  return  (
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;
