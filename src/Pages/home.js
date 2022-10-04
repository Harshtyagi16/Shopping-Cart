import React, { useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { products } from "../components/products";

const Home = () => {
  const [items, setItems] = useState(products);
  return (
    <div>
      <Navbar items={items} setItems={setItems} products={products} />
      <Main items={items} />
    </div>
  );
};

export default Home;
