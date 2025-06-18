import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./AirlineCard.module.scss";
import elalImage from "../../assets/images/elal.avif";
import processColors from "../../utils/colorProcessor.js";
const AirlineCard = ({ airline, isOpen, onClick }) => {
  // Langauge controller
  const { language } = useLanguage();
  const name = airline.name[language] || airline.name.english;
  const description =
    airline.description[language] || airline.description.english;

  const { primaryColor, secondaryColor } = processColors(
    airline.primaryColor,
    airline.secondaryColor
  );

  return (
    <div
      className={styles.expandableCard}
      style={{ "--background-image-url": `url(${elalImage})` }}
    >
      <div
        className={styles.cardOverlay}
        style={{
          "--gradient-start": primaryColor || "#000",
          "--gradient-end": secondaryColor || "#fff",
        }}
      >
        <div
          className={`${styles.cardHeader} ${isOpen ? styles.expanded : ""}`}
          onClick={onClick}
          // ARIA attributes for accessibility
          aria-expanded={isOpen}
          aria-controls={`description-${name.replace(/\s+/g, "-")}`}
          role="button"
          tabIndex={0}
        >
          <h3 className={styles.headerTitle}>{name}</h3>{" "}
          {airline.isAvailable === false && (
            <strong className={styles.returnDate}>
              Estimated Return Date: {airline.returnDate}
            </strong>
          )}
          <span
            className={`${styles.toggleIcon} ${isOpen ? styles.expanded : ""}`}
          >
            {isOpen ? "▲" : "▼"}
          </span>
        </div>

        <div
          id={`description-${name.replace(/\s+/g, "-")}`}
          className={`${styles.descriptionWrapper} ${isOpen ? styles.expanded : ""}`}
          aria-hidden={!isOpen}
          role="region"
        >
          <div className={styles.cardDescription}>
            <p>{description}</p>
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
