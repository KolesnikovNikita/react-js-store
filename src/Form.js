import React from "react";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";

export default function UserForm({ products, setIsFormSubmitted }) {
  const dispatch = useDispatch();
  const infoProduct = products.reduce((acc, product) => {
    acc[product.id] = product.count;
    return acc;
  }, {});

  function onSubmit(e) {
    dispatch({ type: "CLEAR_CART" });
    setIsFormSubmitted(true);
    const info = [];
    info.push(e, infoProduct);
    console.log(info);
  }

  function required(value) {
    return value ? undefined : "Required";
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
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                placeholder="First Name"
                validate={required}
              />
            </div>
            <div>
              <label>Second Name</label>
              <Field
                name="secondName"
                component="input"
                placeholder="Second Name"
                validate={required}
              />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" component="input" placeholder="Email" />
            </div>
            <div>
              <label>Phone number</label>
              <Field name="phone" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Phone</label>
                    <input
                      type="text"
                      {...input}
                      placeholder="+3(099) 999 - 99 - 99"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field
                name="comments"
                component="textarea"
                placeholder="Type your comment here"
                validate={required}
              />
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

/*
// import InputMask from "react-input-mask";
<InputMask
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="+3\(099) 999-9999"
            maskChar=" "
          /> */
// const [phone, setPhone] = React.useState("");

// const infoProduct = products.reduce((acc, product) => {
//   acc[product.id] = product.count;
//   return acc;
// }, {});

// function clearCart() {
//   dispatch({ type: "CLEAR_CART" });
//   setbuttonState(!buttonState);
// }
