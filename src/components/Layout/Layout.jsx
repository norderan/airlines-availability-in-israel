import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
// context

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
    title:
      language === "english"
        ? "Airlines Availability in Israel"
        : "זמינות חברות תעופה בישראל",
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button onClick={toggleLanguage}>
          {language === "english" ? "עברית" : "English"}
        </button>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/about" className={styles.navLink}>
                {text.about}
              </Link>
            </li>
            <li>
              <Link to="/available-airlines" className={styles.navLink}>
                {text.availableAirlines}
              </Link>
            </li>
            <li>
              <Link to="/unavailable-airlines" className={styles.navLink}>
                {text.unavailableAirlines}
              </Link>
            </li>
          </ul>
        </nav>
        <h1>{text.title}</h1>
      </header>

      <main className={styles.mainContent}>
        {/*
          The Outlet component renders the content of the currently matched child route.
          If the URL is /available-airlines, AvailableAirlinesPage will render here.
          If the URL is /unavailable-airlines, UnavailableAirlinesPage will render here.
        */}
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Norderan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
