import React from "react";
import styles from "./AvailableAirlines.module.scss";
import airlinesData from "../../data/airlinesAvailabilityInIsrael.json";
import { useLanguage } from "../../context/LanguageContext";
import AirlineCard from "../../components/AirlineCard/AirlineCard";
import { useState } from "react";
function AvailableAirlines() {
  const [showAvailableAirlines, setShowAvailableAirlines] = useState(true);

  const availableAirlines = airlinesData.filter(
    (airline) => Boolean(airline.isAvailable) === showAvailableAirlines
  );

  const toggleAvailableAirlines = () => {
    setShowAvailableAirlines(!showAvailableAirlines);
  };
  // Language controller
  const { language } = useLanguage();

  const text = {
    english: {
      availableAirlines: "Available Airlines",
      unavailableAirlines: "Unavailable Airlines",
      buttonLabelUnavailable: "Show Available Airlines",
      buttonLabelAvailable: "Show Unavailable Airlines",
      title: "Airlines Currently Available to Israel",
      noAirlines: "No airlines are currently available.",
      availableStatus: "Available",
      unavailableStatus: "Not Available",
      returnDateLabel: "Estimated Return",
      airlineName: "Airline",
    },
    hebrew: {
      availableAirlines: "חברות תעופה זמינות",
      unavailableAirlines: "חברות תעופה שאינן זמינות",
      buttonLabelUnavailable: "הצג חברות תעופה זמינות",
      buttonLabelAvailable: "הצג חברות תעופה שאינן זמינות",
      noAirlines: "אין חברות תעופה זמינות כרגע.",
      availableStatus: "זמינה",
      unavailableStatus: "לא זמינה",
      returnDateLabel: "חזרה משוערת",
      airlineName: "חברת התעופה",
    },
  };

  const currentTranslations = text[language] || text.english; // Fallback to English
  // Accordion logic
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className={language === "hebrew" ? styles.hebrewText : ""}>
      <div className={styles.accordionHeader}>
        <h1>
          {showAvailableAirlines === true
            ? currentTranslations.availableAirlines
            : currentTranslations.unavailableAirlines}
        </h1>
        <button
          className={styles.toggleButton}
          onClick={toggleAvailableAirlines}
        >
          {showAvailableAirlines === true
            ? currentTranslations.buttonLabelAvailable
            : currentTranslations.buttonLabelUnavailable}
          {currentTranslations.buttonLabel}
        </button>
      </div>

      <div className={styles.accordionSubHeader}>
        <h3>{currentTranslations.airlineName}</h3>
        <h3>
          {showAvailableAirlines !== true &&
            currentTranslations.returnDateLabel}
        </h3>
      </div>
      {availableAirlines.length === 0 ? (
        <p>{currentTranslations.noAirlines}</p>
      ) : (
        <div className={styles.accordionBody}>
          {availableAirlines.map((airline, index) => (
            <AirlineCard
              key={index}
              airline={airline}
              isOpen={index === activeIndex}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AvailableAirlines;
