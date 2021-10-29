import React from "react";
import { useDispatch } from "react-redux";

export default function Cart({ productProps }) {
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li key={productProps.id}><img src={productProps.image} alt="products" width="50" height="50" />
          <b>{productProps.title}</b><p><i>{productProps.description}</i></p><p>Count: {productProps.count}</p>
          <button className="buttonStyle" onClick={() => {
            dispatch({
              type: "REMOVE_FROM_CART",
              id: productProps.id
            })
          }}>Delete</button></li>
      </ul>
    </div>
  );
}