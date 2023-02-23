import React from "react";
import './CartItems.css'

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
              <p>Product : {title} </p>
            </div>
            <div>
              <h4>Price : {price}</h4>
            </div>

            <div class="flex flex-col  w-48">
              <div class="flex flex-row justify-center p-6 ">
                <button style={{ boarder: "1px solid red" }} onClick={() => {
                  onDecreaseQuantity(product);
                }} class="btn btn-active btn-ghost btn-sm "><box-icon color='#EDDBC7' name='minus'></box-icon></button>
                <div class="px-8">{qty}</div>
                <button onClick={() => {
                  onInreaseQuantity(product);
                }} class="btn btn-active btn-ghost btn-sm"><box-icon color='#EDDBC7' name='plus'></box-icon></button>
              </div>

              <button onClick={() => {
                onDelete(product.id);
              }} class="btn btn-active btn-ghost "><box-icon color='#EDDBC7' name='trash-alt'></box-icon></button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
export default CartItems;
