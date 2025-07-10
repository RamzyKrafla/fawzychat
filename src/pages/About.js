import React from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/About.css";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about">
      <div className="about-container">
        <h1>{t("aboutTitle")}</h1>

        <div className="about-description">
          <p>{t("aboutDescription")}</p>
        </div>

        <div className="mission-section">
          <h2>{t("missionTitle")}</h2>
          <p>{t("missionText")}</p>
        </div>

        <div className="team-section">
          <h2>{t("aboutTeam")}</h2>
          <div className="team-members">
            <div className="team-member">
              <div className="member-avatar">R</div>
              <div className="member-info">
                <h3>{t("ramzyName")}</h3>
                <p className="member-role">{t("ramzyRole")}</p>
                <p className="member-bio">
                  EPFL Student passionate about AI and technology for social
                  impact.
                </p>
              </div>
            </div>

            <div className="team-member">
              <div className="member-avatar">N</div>
              <div className="member-info">
                <h3>{t("naderName")}</h3>
                <p className="member-role">{t("naderRole")}</p>
                <p className="member-bio">
                  EPFL Student dedicated to leveraging technology for Egypt's
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>Contact</h2>
          <p>
            Get in touch with us to learn more about our mission and how we can
            help Egypt through AI technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
