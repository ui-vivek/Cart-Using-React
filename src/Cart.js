import React from "react";
import CartItems from "./CartItems";

const Cart = (props) => {
  const { products } = props;
  return (
    <div>
      <h1>List of Devices : </h1>
      {products.map((product) => {
        return (
          <CartItems
            product={product}
            key={product.id}
            onInreaseQuantity={props.onInreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};
export default Cart;
