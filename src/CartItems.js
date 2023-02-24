import React from "react";
import "./CartItems.css";

const CartItems = (props) => {
  const { qty, title, price, img } = props.product;
  const { product, onDecreaseQuantity, onInreaseQuantity, onDelete } = props;
  return (
    <>
      <div class=" p-6 ">
        <div className="details" class="flex">
          <img src={img} alt={title} />
          <div class=" mx-8 my-3">
            <div>
              <p>
                <span className=" font-medium">Product :</span> {title}
              </p>
            </div>
            <div>
            <p>
                <span className=" font-medium">Price :</span> {price}
              </p>
            </div>

            <div class="flex flex-col  w-48">
              <div class="flex flex-row justify-center p-6 ">
                <button
                  onClick={() => {
                    onDecreaseQuantity(product);
                  }}
                  class="btn btn-active btn-ghost btn-sm "
                >
                  <box-icon color="#698269" name="minus"></box-icon>
                </button>
                <div class="px-8">{qty}</div>
                <button
                  onClick={() => {
                    onInreaseQuantity(product);
                  }}
                  class="btn btn-active btn-ghost btn-sm"
                >
                  <box-icon color="#698269" name="plus"></box-icon>
                </button>
              </div>

              <button
                onClick={() => {
                  onDelete(product.id);
                }}
                class="btn btn-active btn-ghost "
              >
                <box-icon color="#AA5656" name="trash-alt"></box-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItems;
