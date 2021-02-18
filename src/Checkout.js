import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";
import { useTranslation } from "react-i18next";

function Checkout() {
  const [{ basket }] = useStateValue();

  const { t } = useTranslation();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>{t("basketEmptyHeader")}</h2>
            <p>
            {t("basketEmptyMessage")}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">{t("yourBasket")}</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}

          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
