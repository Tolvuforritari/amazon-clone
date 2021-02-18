import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";
import { useTranslation } from "react-i18next";

function CheckoutProduct({ id, title, image, price, rating }) {
  const element = <FontAwesomeIcon icon={faStar} />;
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const { t } = useTranslation();


  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>£</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>{element}</p>
            ))}
        </p>
        <button onClick={removeFromBasket}>{t("remove")}</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
