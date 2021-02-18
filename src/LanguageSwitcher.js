import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import LanguageIcon from "@material-ui/icons/Language";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="language-select">
      <LanguageIcon />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="sv">Svenska</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
