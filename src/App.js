import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Cart from "./Pages/cart";
import Thankyou from "./components/thankyou";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/thankYou" element={<Thankyou />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
