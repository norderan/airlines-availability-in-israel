import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.css";
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import AvailableAirlines from "../../features/AvailableAirlines/AvailableAirlines";

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
              <Link to="/" className={styles.navLink}>
                {text.home}
              </Link>
            </li>
          </ul>
        </nav>
        <h1>{text.title}</h1>
      </header>

      <main className={styles.mainContent}>
        <AvailableAirlines />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Norderan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
