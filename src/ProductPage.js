import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.id === +id);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width="250" alt="products" />
      <h2>{product.description}</h2>
      <h3>Price: {product.price}</h3>
    </div>
  );
}
