import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";

export default function UserForm({ products, setOrederState, orderState }) {
  const dispatch = useDispatch();
  const infoProduct = products.reduce((acc, product) => {
    acc[product.id] = product.count;
    return acc;
  }, {});

  const required = (value) => (value ? undefined : "Required");

  function onSubmit(values) {
    dispatch({ type: "CLEAR_CART" });
    setOrederState("success");
    const info = [];
    info.push(values, infoProduct);
    console.log(info);
  }

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const productCount = products.reduce(
    (acc, product) => acc + product.count,
    0
  );

  const showProducts = products.map(
    (product) => `${product.title} count: ${product.count}, `
  );

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="firstName"
                placeholder="First Name"
                validate={required}
              >
                {({ input, meta }) => (
                  <div>
                    <label>First Name</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="First Name"
                      className={meta.error && meta.touched && "inputRequired"}
                    />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="secondName"
                placeholder="Second Name"
                validate={required}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Second Name</label>
                    <input
                      {...input}
                      type="text"
                      placeholder="Second Name"
                      className={meta.error && meta.touched && "inputRequired"}
                    />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="email" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Email</label>
                    <input
                      {...input}
                      type="email"
                      placeholder="Your email"
                      className={meta.error && meta.touched && "inputRequired"}
                    />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="phone" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Phone</label>
                    <input
                      className={meta.error && meta.touched && "inputRequired"}
                      type="text"
                      {...input}
                      placeholder="+3 8(099) 999 - 99 - 99"
                    />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="comments" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Comment</label>
                    <textarea
                      className={meta.error && meta.touched && "inputRequired"}
                      type="text"
                      {...input}
                      placeholder="Your comments"
                    />
                  </div>
                )}
              </Field>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
      <div>
        <p>Total Sum: {totalPrice}</p>
        <p>Total Count: {productCount}</p>
        <p>All names: {showProducts}</p>
      </div>
    </div>
  );
}
