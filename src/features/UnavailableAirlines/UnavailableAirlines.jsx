import React from "react";
import styles from "../AirlineAvailabilityPages.module.css"; // Optional: shared styles
import airlinesData from "../../data/airlinesAvailabilityInIsrael.json";

function UnavailableAirlines({ language = "english" }) {
  // Filter for unavailable airlines
  const unavailableAirlines = airlinesData.filter(
    (airline) => !airline.isAvailable
  );

  // Define dynamic text based on the selected language
  const translations = {
    english: {
      title: "Airlines Currently Unavailable to Israel",
      noAirlines:
        "All airlines are currently available, or data is incomplete.",
      descriptionLabel: "Description",
      returnDateLabel: "Estimated Return Date: ",
      unknownReturnDate: "Unknown",
    },
    hebrew: {
      title: "חברות תעופה שאינן זמינות כרגע לישראל",
      noAirlines: "כל חברות התעופה זמינות כרגע, או שהנתונים אינם מלאים.",
      descriptionLabel: "תיאור",
      returnDateLabel: "תאריך חזרה משוער: ",
      unknownReturnDate: "לא ידוע",
    },
  };

  const currentTranslations = translations[language] || translations.english; // Fallback to English

  return (
    <div>
      {" "}
      {/* Removed all classNames */}
      <h2>{currentTranslations.title}</h2>
      {unavailableAirlines.length === 0 ? (
        <p>{currentTranslations.noAirlines}</p>
      ) : (
        <div>
          {unavailableAirlines.map((airline) => (
            <div key={airline.name.english}>
              <h3>{airline.name[language]}</h3>
              <p>
                <span>{currentTranslations.descriptionLabel}:</span>{" "}
                {airline.description[language]}
              </p>
              <p>
                <span>{currentTranslations.returnDateLabel}</span>
                {airline.returnDate || currentTranslations.unknownReturnDate}
              </p>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UnavailableAirlines;
