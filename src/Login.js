import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "firebase";
import { useTranslation } from "react-i18next";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t } = useTranslation();

  const login = (event) => {
    event.preventDefault();
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/"); 
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>{t("signIn")}</h1>
        <form>
          <h5>{t("email")}</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>{t("password")}</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
          {t("signIn")}
          </button>
        </form>
        <p>
        {t("logInTerms")}
        </p>
        <button onClick={register} className="login__registerButton">
        {t("createAccount")}
        </button>
      </div>
    </div>
  );
}

export default Login;


