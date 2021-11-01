import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { useHistory } from "react-router";

export default function CartContainer() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart);
  let history = useHistory();

  function clearCart() {
    history.push("/");
    dispatch({ type: "CLEAR_CART" });
  }

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
      {Object.keys(cartProducts).length > 0 && (
        <button onClick={() => clearCart()}>Clear</button>
      )}
    </>
  );
}
