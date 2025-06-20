import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.scss";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Home, Info } from "lucide-react";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
function Layout() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "english" ? "hebrew" : "english"));
  };

  const text = {
    availableAirlines:
      language === "english" ? "Available Airlines" : "חברות תעופה זמינות",
    unavailableAirlines:
      language === "english" ? "Unavailable Airlines" : "חברות תעופה לא זמינות",
    about: language === "english" ? "About" : "אודות",
    home: language === "english" ? "Home" : "בית",
    title: "SkyTLV",
    copyright:
      language === "english"
        ? `© ${new Date().getFullYear()} Yazan Abu Queider. All rights reserved.`
        : `© ${new Date().getFullYear()} יזן אבו קוידר. כל הזכויות שמורות.`,
  };

  return (
    <div
      className={
        styles.container +
        (language === "hebrew" ? ` ${styles.hebrewText}` : "")
      }
    >
      <header>
        <h1>{text.title}</h1>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">
                <Home
                  className={styles.naveIcon}
                  size={32}
                  style={{ verticalAlign: "middle", marginRight: 4 }}
                />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <Info
                  className={styles.naveIcon}
                  size={32}
                  style={{ verticalAlign: "middle", marginRight: 4 }}
                />
              </Link>
            </li>
          </ul>
          <ThemeToggleButton />
          <button
            className={styles.toggleLanguageButton}
            onClick={toggleLanguage}
          >
            {language === "english" ? "עברית" : "English"}
          </button>
        </nav>
      </header>
      <main>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </main>
      <footer>
        <p>{text.copyright}</p>
      </footer>
    </div>
  );
}

export default Layout;
