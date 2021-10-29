import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { useHistory } from "react-router";

export default function CartContainer() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  let history = useHistory();

  const globalProducts = useSelector((state) => state.products);

  const products = Object.keys(cartProducts).map((cartProductId) => {
    const globalProduct = globalProducts.find(
      (globalProduct) => +globalProduct.id === +cartProductId
    );

    return { ...globalProduct, count: cartProducts[cartProductId] };
  });

  return (
    <>
      {products.map((product) => {
        return <Cart key={product.id} productProps={product} />;
      })}
      <button
        onClick={() => {
          history.push("/");
          dispatch({ type: "CLEAR_CART" });
        }}
      >
        Clear
      </button>
    </>
  );
}
