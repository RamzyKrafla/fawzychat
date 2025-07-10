import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    appName: "FawzyChat",
    homeTitle: "FawzyChat",
    homeSubtitle:
      "Your assistant for writing, translating, and learning between Egyptian Arabic, Franco Egyptian, and English.",
    startChat: "Start Chatting",
    selectLanguage: "Language",
    chat: "Chat",
    home: "Home",
    about: "About",
    aboutTitle: "About FawzyChat",
    aboutDescription:
      "We are two EPFL students passionate about leveraging AI advancements to help Egypt and its people.",
    aboutTeam: "Meet the Team",
    ramzyName: "Ramzy Rafla",
    naderName: "Nader Rizk",
    ramzyRole: "Co-founder & Developer",
    naderRole: "Co-founder & Developer",
    missionTitle: "Our Mission",
    missionText:
      "We believe in the power of AI to bridge language barriers and create opportunities for Egyptian communities. Our goal is to make technology accessible and beneficial for everyone in Egypt.",
    // Add more keys as needed
  },
  ar: {
    appName: "فوزي شات",
    homeTitle: "فوزي شات",
    homeSubtitle:
      "مساعدك للكتابة والترجمة والتعلم بين العربي المصري، الفرنكو، والإنجليزي.",
    startChat: "ابدأ الدردشة",
    selectLanguage: "اللغة",
    chat: "دردشة",
    home: "الرئيسية",
    about: "عن التطبيق",
    aboutTitle: "عن فوزي شات",
    aboutDescription:
      "نحن طالبان في EPFL شغوفان باستخدام تطورات الذكاء الاصطناعي لمساعدة مصر وشعبها.",
    aboutTeam: "تعرف على الفريق",
    ramzyName: "رمزى رفلة",
    naderName: "نادر رزق",
    ramzyRole: "مؤسس مشارك ومطور",
    naderRole: "مؤسس مشارك ومطور",
    missionTitle: "مهمتنا",
    missionText:
      "نؤمن بقوة الذكاء الاصطناعي في ربط الحواجز اللغوية وإنشاء فرص للمجتمعات المصرية. هدفنا هو جعل التكنولوجيا متاحة ومفيدة للجميع في مصر.",
    // Add more keys as needed
  },
  franco: {
    appName: "FawzyChat",
    homeTitle: "FawzyChat",
    homeSubtitle:
      "Mosa3dak lel ketaba wel taragma we el ta3alom ben el 3araby el masry, el franco, wel englizy.",
    startChat: "Ebd2 el dardasha",
    selectLanguage: "El logha",
    chat: "Dardasha",
    home: "El ra2iseya",
    about: "3an el app",
    aboutTitle: "3an FawzyChat",
    aboutDescription:
      "E7na talabten fe EPFL moshthaggen bel estekhdam el takamul el AI le mosa3adet masr wel sha3b.",
    aboutTeam: "Ta3ref 3ala el team",
    ramzyName: "Ramzy Rafla",
    naderName: "Nader Rizk",
    ramzyRole: "Mo2ess mosha3ek we motawer",
    naderRole: "Mo2ess mosha3ek we motawer",
    missionTitle: "Mashro3na",
    missionText:
      "Bene2men be quwet el AI fe rabt el 7awagiz el loghawiya we ensha2 foras lel mogtama3at el masreya. Hadafna howa 3amel el teknologia mawgoda we mofeeda le kol wa7ed fe masr.",
    // Add more keys as needed
  },
};

const getInitialLanguage = () => {
  const saved = localStorage.getItem("language");
  if (saved && ["en", "ar", "franco"].includes(saved)) return saved;
  return "en";
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage());

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
