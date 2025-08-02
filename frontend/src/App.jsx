import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AllCategory from "./pages/AllCategory";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";

function App() {
  return (
    <div>
      <Offer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<AllCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order/:id" element={<Orders />} />
        <Route path="/placeOrder/:id" element={<PlaceOrder />} />
        <Route path="/collection/:type" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
