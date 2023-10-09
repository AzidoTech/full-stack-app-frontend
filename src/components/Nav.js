import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Nav = () => {
  const { t } = useTranslation();
  const handleLanguageClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">{t("Products")}</Link>
        </li>
        <li>
          <Link to="/add">
            {t("Add")} {t("Products")}
          </Link>
        </li>
        <li>
          <Link to="/update">
            {t("Update")} {t("Products")}
          </Link>
        </li>
        <li>
          <Link to="/logout">{t("Logout")}</Link>
        </li>
        <li>
          <Link to="/profile">{t("Profile")}</Link>
        </li>
        <li>
          <Link to="/signup">{t("SignUp")}</Link>
        </li>
        <li>
          <Link to="/login">{t("LogIn")}</Link>
          {/* <Link to="/login">{t("translated-paragraph")}</Link> */}
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
      </ul>
    </div>
  );
};

export default Nav;
