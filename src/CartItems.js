import React from "react";
import "./CartItems.css";

const CartItems = (props) => {
  const { qty, title, price, img } = props.product;
  const { product, onDecreaseQuantity, onInreaseQuantity, onDelete } = props;
  return (
    <div className="details flex items-center container mx-auto my-4">
      <div className="image ml-1">
        <img src={img} alt={title} />
      </div>
      <div className="m-2 p-2">
        <div style={{ display:'inline-block'}} >
          <p>
            <span className=" font-medium">Product :</span> {title}
          </p>
          <p>
            <span className=" font-medium">Price :</span> {price}
          </p>
        </div>

        <div
          
          className="flex flex-col  "
        >
          <div className="flex flex-row justify-center p-6 ">
            <button
              onClick={() => {
                onDecreaseQuantity(product);
              }}
              className="btn btn-active btn-ghost btn-sm "
            >
              <box-icon color="#698269" name="minus"></box-icon>
            </button>
            <div className="px-8">{qty}</div>
            <button
              onClick={() => {
                onInreaseQuantity(product);
              }}
              className="btn btn-active btn-ghost btn-sm"
            >
              <box-icon color="#698269" name="plus"></box-icon>
            </button>
          </div>

          <button
            onClick={() => {
              onDelete(product.id);
            }}
            className="btn btn-active  btn-ghost "
          >
            <box-icon color="#AA5656" name="trash-alt"></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItems;
