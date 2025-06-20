import React from "react";
import styles from "./AboutPage.module.scss";
import { useLanguage } from "../../context/LanguageContext";
import { Github, Instagram, Mail } from "lucide-react";
const AboutPage = () => {
  const { language } = useLanguage();
  const text = {
    about: language === "english" ? "About" : "אודות",
    descpition:
      language === "english"
        ? "This is a general description for the section."
        : "",
  };
  return (
    <div className={styles.mainContainer}>
      {language === "english" ? (
        // English Content Block
        <div>
          <h1>About SkyTLV</h1>
          <p>Welcome to SkyTLV!</p>
          <p>
            <strong>
              Given the current situation in Israel and the ongoing uncertainty
              surrounding airline operations, planning flights has become
              particularly complex.
            </strong>{" "}
            This is why I established SkyTLV – to simplify this process for you,
            by providing{" "}
            <strong>
              up-to-date and accessible information regarding airlines operating
              at Ben Gurion Airport (TLV).
            </strong>
          </p>
          <p>
            <strong>The website's goal</strong> is to offer a clear, reliable,
            and user-friendly platform that will help you stay informed and make
            more informed decisions regarding your travel plans to and from
            Israel.
          </p>
          <p>
            <strong>
              The website is operated and funded entirely by me on a voluntary
              basis, and without any advertisements.
            </strong>{" "}
            I hope you find the service useful and continue to use it.
          </p>
          <p>Feel free to follow!</p>
        </div>
      ) : (
        // Hebrew Content Block
        <div>
          {" "}
          <h1>{text.about}</h1>
          <p>ברוכים הבאים ל- SkyTLV!</p>
          <p>
            <strong>
              על רקע המצב הנוכחי בישראל ואי הוודאות המתמשכת בפעילות חברות
              התעופה, תכנון טיסות הפך למורכב במיוחד.
            </strong>{" "}
            זו הסיבה שהקמתי את SkyTLV – כדי לפשט עבורכם את התהליך, באמצעות מתן{" "}
            <strong>מידע עדכני וזמין לגבי חברות התעופה הפועלות בנתב"ג.</strong>
          </p>
          <p>
            <strong>מטרת האתר</strong> היא להציע פלטפורמה ברורה, אמינה וידידותית
            למשתמש, שתסייע לכם להישאר מעודכנים ולקבל החלטות מושכלות יותר בנוגע
            לתוכניות הנסיעה שלכם מישראל ואליה.
          </p>
          <p>
            <strong>
              האתר מופעל וממומן על ידי בהתנדבות מלאה, וללא כל פרסומות.
            </strong>{" "}
            אני מקווה שתמצאו את השירות מועיל ותמשיכו להשתמש בו.
          </p>
          <p>מוזמנים לעקוב!</p>
        </div>
      )}
      {/* --- New Social Links Section --- */}
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/norderan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.instagram.com/yazanqueider/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <Instagram size={32} />
        </a>
        <a href="mailto:queider@proton.me" aria-label="Send us an email">
          <Mail size={32} />
        </a>
      </div>
      {/* ------------------------------------- */}
    </div>
  );
};

export default AboutPage;
