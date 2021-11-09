import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./Cart";
import { useHistory } from "react-router";
import UserForm from "./Form";

export default function CartContainer() {
  const [orderState, setOrederState] = React.useState("view-form");
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
  if (orderState === "view-form") {
    content = (
      <div>
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
                  setOrederState("edit-form");
                }}
              >
                Check out
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else if (orderState === "edit-form") {
    content = (
      <UserForm
        orderState={orderState}
        products={products}
        setOrederState={setOrederState}
      />
    );
  } else {
    content = <div className="UserStyle">Well done</div>;
  }

  return <div>{content}</div>;
}
