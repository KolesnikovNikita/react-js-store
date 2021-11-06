import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { useHistory } from "react-router";
import UserForm from "./Form";

export default function CartContainer() {
  const [buttonState, setbuttonState] = React.useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
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

  let content;
  if (isFormSubmitted) {
    content = <div className="UserStyle">Well done!</div>;
  } else if (buttonState) {
    content = (
      <UserForm products={products} setIsFormSubmitted={setIsFormSubmitted} />
    );
  } else {
    content = (
      <div>
        <div>
          {products.map((product) => {
            return <Cart key={product.id} productProps={product} />;
          })}
        </div>
        <div className="UserStyle">
          {Object.keys(cartProducts).length > 0 && (
            <button onClick={() => clearCart()}>Clear</button>
          )}
          {Object.keys(cartProducts).length > 0 && (
            <button
              onClick={() => {
                setbuttonState(true);
              }}
            >
              Check out
            </button>
          )}
        </div>
      </div>
    );
  }

  return <div>{content}</div>;
}
