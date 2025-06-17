import React from "react";
import styles from "../AirlineAvailabilityPages.module.css";
import airlinesData from "../../data/airlinesAvailabilityInIsrael.json";
import { useLanguage } from "../../context/LanguageContext";

function AvailableAirlines() {
  const { language } = useLanguage();

  const availableAirlines = airlinesData.filter(
    (airline) => airline.isAvailable
  );

  // Define dynamic text based on the selected language
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

  return (
    <div>
      <h1>{currentTranslations.title}</h1>
      {availableAirlines.length === 0 ? (
        <p>{currentTranslations.noAirlines}</p>
      ) : (
        <div>
          {availableAirlines.map((airline) => (
            <div key={airline.name.english}>
              <h2>{airline.name[language]}</h2>
              <p>
                <span>{currentTranslations.descriptionLabel}:</span>{" "}
                {airline.description[language]}
                {airline.website && (
                  <>
                    {" "}
                    <a
                      href={airline.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {airline.website}
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AvailableAirlines;
