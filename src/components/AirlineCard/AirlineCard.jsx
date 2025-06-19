import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./AirlineCard.module.scss";
import processColors from "../../utils/colorProcessor.js";
import dateProcessor from "../../utils/dateProcessor.js";
const AirlineCard = ({ airline, isOpen, onClick }) => {
  // Langauge controller
  const { language } = useLanguage();
  const text = {
    name: airline.name[language] || airline.name.english,
    description: airline.description[language] || airline.description.english,
    unknownReturnDate: language === "hebrew" ? "לא ידוע" : "Unknown",
  };

  const { primaryColor, secondaryColor } = processColors(
    airline.primaryColor,
    airline.secondaryColor
  );

  const primaryColorByLanguage =
    language === "hebrew" ? secondaryColor : primaryColor;
  const secondaryColorByLanguage =
    language === "hebrew" ? primaryColor : secondaryColor;

  console.log(`url(../../assets/images/${airline.imageName})`);
  return (
    <div
      className={styles.expandableCard}
      style={{
        "--background-image-url": `url(/src/assets/images/${airline.imageName})`,
      }}
    >
      <div
        className={styles.cardOverlay}
        style={{
          "--gradient-start": primaryColorByLanguage || "#000",
          "--gradient-end": secondaryColorByLanguage || "#fff",
        }}
      >
        <div
          className={`${styles.cardHeader} ${isOpen ? styles.expanded : ""}`}
          onClick={onClick}
          // ARIA attributes for accessibility
          aria-expanded={isOpen}
          aria-controls={`description-${text.name.replace(/\s+/g, "-")}`}
          role="button"
          tabIndex={0}
        >
          <h3 className={styles.headerTitle}>{text.name}</h3>{" "}
          {airline.isAvailable === false && (
            <strong className={styles.returnDate}>
              {airline.returnDate === null
                ? text.unknownReturnDate
                : dateProcessor(airline.returnDate, language)}
            </strong>
          )}
          <span
            className={`${styles.toggleIcon} ${isOpen ? styles.expanded : ""}`}
          >
            {isOpen ? "▲" : "▼"}
          </span>
        </div>

        <div
          id={`description-${text.name.replace(/\s+/g, "-")}`}
          className={`${styles.descriptionWrapper} ${isOpen ? styles.expanded : ""}`}
          aria-hidden={!isOpen}
          role="region"
        >
          <div className={styles.cardDescription}>
            <p>{text.description}</p>
            {airline.website && (
              <a
                href={airline.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.websiteLink}
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineCard;
