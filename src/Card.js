import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Card({ product }) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
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
        onClick={() =>
          dispatch({
            type: "ADD_TO_CARD",
            newProduct: {
              id: product.id,
              count: Number(value),
            },
          })
        }
      >
        Save
      </button>
      <button
        className="buttonStyle"
        onClick={() =>
          dispatch({
            type: "DELETE_FROM_CARD",
            id: product.id,
          })
        }
      >
        Delete
      </button>
    </ul>
  );
}
