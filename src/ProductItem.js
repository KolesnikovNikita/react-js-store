import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./actions";
import { addToFavorite } from "./actions";
import { deleteFromFavorite } from "./actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const [value, setValue] = useState(1);
  const numValue = Number(value);
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorite);
  const isProductFavorite = favoriteProducts.includes(product.id);

  return (
    <li>
      <Link to={`product/${product.id}`}>
        <img src={product.image} alt="products" width="50" height="50" />
      </Link>
      <Link to={`product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>
        <i>{product.description}</i>
      </p>
      <p>
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
          Add to cart
        </button>
        {isProductFavorite ? (
          <button
            onClick={() => {
              dispatch(deleteFromFavorite(product.id));
            }}
          >
            Delete from favorite
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(addToFavorite(numValue, product.id));
            }}
          >
            Add to favorite
          </button>
        )}
      </p>
    </li>
  );
}
