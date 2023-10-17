import React from "react";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";

const Nav = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const { logout } = useLogout();
  const { t } = useTranslation();
  const handleLanguageClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">{t("HEADERS.Products")}</Link>
        </li>
        <li>
          <Link to="/add">{t("HEADERS.translated-AddProducts")}</Link>
        </li>
        <li>
          <Link to="/update">{t("HEADERS.translated-UpdateProducts")}</Link>
        </li>
        <li>
          <Link to="/profile">{t("HEADERS.Profile")}</Link>
        </li>
        <li onClick={logout}>
          <Link to="/login">{t("HEADERS.Logout")}</Link>
        </li>

        <li>
          <div>
            <select onChange={(e) => handleLanguageClick(e)}>
              <option>Select Language</option>
              <option value={"en"}>English</option>
              <option value={"hi"}>Hindi</option>
            </select>
          </div>
        </li>

        <li>
          <div id="google_translate_element"></div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
