import React, { useEffect, useState } from "react";
import Homeheader from "../components/Homeheader";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import { products } from "../components/products";

const Home = () => {
  const [items, setItems] = useState(products);
  useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify([]))
  },[])
  return (
    <div>
      <Navbar items={items} setItems={setItems} products={products} />
      {/* <Homeheader/> */}
      <Main items={items} />
    </div>
  );
};

export default Home;
