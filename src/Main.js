import React from "react";
import { useSelector } from "react-redux";
import ProductPage from "./ProductPage";

export default function Main() {
  const products = useSelector((state) => state.products);

  return (
    <ul>
      {products.map((product, index) => {
        return <ProductPage key={index} product={product} />;
      })}
    </ul>
  );
}
