import React from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Header.css";

const Header = () => {
  const { t } = useLanguage();
  const currentPath = window.location.pathname;

  return (
    <header className="header">
      <h1>{t("appName")}</h1>
      <nav className="header-nav">
        <a href="/" className={currentPath === "/" ? "active" : ""}>
          {t("home")}
        </a>
        <a href="/chat" className={currentPath === "/chat" ? "active" : ""}>
          {t("chat")}
        </a>
        <a href="/about" className={currentPath === "/about" ? "active" : ""}>
          {t("about")}
        </a>
        <LanguageSwitcher />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
