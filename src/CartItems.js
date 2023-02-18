import React from "react";
const CartItems = (props) => {
  const { qty, title, price } = props.product;
  const { product, onDecreaseQuantity, onInreaseQuantity, onDelete } = props;
  return (
    <>
      <h3>
        <button
          onClick={() => {
            onDecreaseQuantity(product);
          }}
        >
          -
        </button>
        {qty} {title} {price}
        <button
          onClick={() => {
            onInreaseQuantity(product);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            onDelete(product.id);
          }}
        >
          Delete
        </button>
      </h3>
    </>
  );
};
export default CartItems;
