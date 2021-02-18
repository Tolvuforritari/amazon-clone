import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useTranslation } from "react-i18next";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const { t } = useTranslation();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {t("subtotal")} ({basket.length} {t("items")}): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> {t("gift")}
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"£"}
      />
      <button>{t("checkout")}</button>
    </div>
  );
}

export default Subtotal;
