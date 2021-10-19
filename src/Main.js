import React from "react";
import { useSelector } from 'react-redux';
import Card from './Card';

export default function Main() {
  const products = useSelector((state) => state.products)
  return (
    <div className="Main">
      {products.map((product, index) => {
        return (
          <Card key={index} product={product} />
        )
      })}
    </div>
  )
}

