import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./actions";
import { deleteFromCard } from "./actions";
import "./Main.css";

export default function Cart({ product }) {
  const [value, setValue] = useState(0);
  const numValue = Number(value);
  const dispatch = useDispatch();

  function resetValue(id) {
    setValue(0);
    dispatch(deleteFromCard(id));
  }

  return (
    <div className="MainStyle">
      <ul>
        <li key={product.index}>{product.title}</li>
        <input
          type="number"
          min="0"
          max="100"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="buttonStyle"
          onClick={() => dispatch(addToCart(numValue, product.id))}
        >
          Save
        </button>
        <button className="buttonStyle" onClick={() => resetValue(product.id)}>
          Delete
        </button>
      </ul>
    </div>
  );
}
