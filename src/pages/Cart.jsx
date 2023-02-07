import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <div className="cartWrapper">
        <h3>Cart</h3>
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="prodimage" />
            <h4>{product.title}</h4>
            <h5>INR {product.price}</h5>
            <button onClick={() => handleRemove(product.id)} className="btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
