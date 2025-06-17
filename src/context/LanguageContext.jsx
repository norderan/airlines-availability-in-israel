// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  // For now, let's make language fixed at the provider level
  // You can change 'english' to 'hebrew' here directly for testing
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "english" ? "hebrew" : "english"));
  };

  const value = { language, setLanguage }; // Only provide language and its setter

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
