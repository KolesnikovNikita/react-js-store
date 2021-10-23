import React from "react";
import { useSelector } from "react-redux";
import "./Main.css";
import { useDispatch } from "react-redux";
import { resetBasket } from "./actions";

export default function Basket() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  let sum = 0
  for (const key in products) {
    sum += products[key]
  }
  return (
    <div className="MainStyle">
      <h3>Cart Items</h3>
      <p>{sum}</p>
      <button className="buttonStyle" onClick={() => dispatch(resetBasket())}>Delete</button>
    </div>
  );
}
