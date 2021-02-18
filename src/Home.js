import React from "react";
import "./Home.css";
import Product from "./Product";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YWYwNTUzODQt/YWYwNTUzODQt-YzRjZTFjZWUt-w1500._CB409524754_.jpg"
        alt="home"
      />
        <div className="home__row">
          <Product
            id="123456"
            title={t("title1")}
            price={11.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
          />
          <Product
            id="234567"
            title={t("title2")}
            price={9.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/81NBxWhYSgL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="345678"
            title={t("title3")}
            price={13.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81IC5+bWDgL._AC_UL320_.jpg"
          />
          <Product
            id="456789"
            title={t("title4")}
            price={33.95}
            rating={5}
            image="https://m.media-amazon.com/images/I/71q-QpZdqqL._AC_UL320_.jpg"
          />
          <Product
            id="567890"
            title={t("title5")}
            price={34.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71JHDQfKgUL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title={t("title6")}
            price={134.07}
            rating={4}
            image="https://m.media-amazon.com/images/I/91tcoLK-VcL._AC_UL320_.jpg"
          />
        </div>
    </div>
  );
}

export default Home;
