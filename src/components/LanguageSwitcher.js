import React from "react";
import { useLanguage } from "../context/LanguageContext";

const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "franco", label: "Franco" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <span style={{ fontSize: "0.95rem", opacity: 0.7 }}>
        {t("selectLanguage")}:
      </span>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          style={{
            background:
              language === lang.code
                ? "var(--accent-color)"
                : "var(--bg-tertiary)",
            color:
              language === lang.code
                ? "var(--bg-primary)"
                : "var(--text-primary)",
            border: "1px solid var(--border-color)",
            borderRadius: "8px",
            padding: "0.3rem 0.8rem",
            fontFamily: "inherit",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.95rem",
            transition: "all 0.2s",
            outline:
              language === lang.code ? "2px solid var(--accent-color)" : "none",
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
