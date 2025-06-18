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

  const translations = {
    english: {
      title: "Airlines Currently Available to Israel",
      noAirlines: "No airlines are currently available.",
      descriptionLabel: "Description",
      availableStatus: "Available",
      unavailableStatus: "Not Available",
      returnDateLabel: "Estimated Return:",
    },
    hebrew: {
      title: "חברות תעופה זמינות כרגע לישראל",
      noAirlines: "אין חברות תעופה זמינות כרגע.",
      descriptionLabel: "תיאור",
      availableStatus: "זמינה",
      unavailableStatus: "לא זמינה",
      returnDateLabel: "חזרה משוערת:",
    },
  };

  const currentTranslations = translations[language] || translations.english; // Fallback to English
  // Accordion logic
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div>
      <button className={styles.toggleButton} onClick={toggleAvailableAirlines}>
        Toogle airline
      </button>
      <h1>{currentTranslations.title}</h1>
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
