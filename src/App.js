import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AoDai from "./pages/AoDai";
import Mens from "./pages/Mens";
import Fabrics from "./pages/Fabrics";
import Kids from "./pages/Kids";
import Products from "./pages/Products";
import Social from "./pages/Social";
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="aodai" element={<AoDai />} />
          <Route path="mens" element={<Mens />} />
          <Route path="fabrics" element={<Fabrics />} />
          <Route path="kids" element={<Kids />} />
          <Route path="products" element={<Products />} />
          <Route path="social" element={<Social />} />
          <Route path=":section/:id" element={<OrderForm />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
