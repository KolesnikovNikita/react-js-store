import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromFavorite } from "./actions";

export default function FavoriteProducts() {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((state) => state.favorite);
  const globalProducts = useSelector((state) => state.products);

  const products = favoriteProducts.map((favoriteProductId) => {
    const globalProduct = globalProducts.find(
      (globalProduct) => +globalProduct.id === +favoriteProductId
    );
    return globalProduct;
  });

  return (
    <ul>
      {products.map((product) => {
        return (
          <ul>
            <li key={+product.id}>
              <img src={product.image} alt="producst" width="50" height="50" />
              <b>{product.title}</b>
              <p>
                <i>{product.description}</i>
              </p>
              <button
                onClick={() => {
                  dispatch(deleteFromFavorite(product.id));
                }}
              >
                Delete from favorite
              </button>
            </li>
          </ul>
        );
      })}
    </ul>
  );
}
