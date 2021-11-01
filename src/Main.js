import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

export default function Main() {
  const products = useSelector((state) => state.products);

  return (
    <ul>
      {products.map((product, index) => {
        return <ProductItem key={index} product={product} />;
      })}
    </ul>
  );
}
