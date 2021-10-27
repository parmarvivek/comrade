import React from "react";
import "./ChekedProduct.css";
import { useStateValue } from "./StateProvider";
function ChekedProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFrombasket}>Remove From basket</button>
      </div>
    </div>
  );
}

export default ChekedProduct;