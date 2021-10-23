import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "./Main.css";

export default function Main() {
  const products = useSelector((state) => state.products);
  return (
    <div>
      {products.map((product, index) => {
        return <Cart key={index} product={product} />;
      })}
    </div>
  );
}
