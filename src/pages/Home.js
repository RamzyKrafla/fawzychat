import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Home.css";

const Home = () => {
  const { t } = useLanguage();
  return (
    <div className="home">
      <div className="hero">
        <h1>{t("homeTitle")}</h1>
        <p>{t("homeSubtitle")}</p>
        <a href="/chat" className="cta-button">
          {t("startChat")}
        </a>
      </div>

      {/* You can add more translated sections here if needed */}
    </div>
  );
};

export default Home;
