import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Earrings from "./pages/Earrings";
import Necklaces from "./pages/Necklaces";
import ShopAll from "./pages/ShopAll";
import Rings from "./pages/Rings";
import Sale from "./pages/Sale";

function App() {
  return (
    <div>
      <Offer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/rings" element={<Rings/>}/>
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/necklaces" element={<Necklaces />} />
        <Route path="/order/:id" element={<Orders />} />
        <Route path="/placeOrder/:id" element={<PlaceOrder />} />
        <Route path="/all" element={<ShopAll/>} />
        <Route path="/sale" element={<Sale/>} />
      </Routes>
    </div>
  );
}

export default App;
