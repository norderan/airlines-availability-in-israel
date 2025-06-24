import React, { useState, useMemo } from "react";
import styles from "./AvailableAirlines.module.scss";
import airlinesData from "../../data/airlinesAvailabilityInIsrael.json";
import { useLanguage } from "../../context/LanguageContext";
import AirlineCard from "../../components/AirlineCard/AirlineCard";
import parseDateString from "../../utils/parseDateString";
function AvailableAirlines() {
  const [showAvailableAirlines, setShowAvailableAirlines] = useState(true);
  const [sortBy, setSortBy] = useState("israeli");

  const filteredAndSortedAirlines = useMemo(() => {
    // 1. First, filter the data
    const filtered = airlinesData.filter(
      (airline) => Boolean(airline.isAvailable) === showAvailableAirlines
    );

    return sortAirlines(sortBy, filtered);
  }, [showAvailableAirlines, sortBy]);

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
      returnDateLabel: "Return",

      // Sorting
      sort: "Sort by: ",
      sortByName: "Alphabetical",
      israeli: "Israeli",
    },
    hebrew: {
      availableAirlines: "חברות תעופה זמינות",
      unavailableAirlines: "חברות תעופה שאינן זמינות",
      buttonLabelUnavailable: "הצג חברות תעופה זמינות",
      buttonLabelAvailable: "הצג חברות תעופה שאינן זמינות",
      noAirlines: "אין חברות תעופה זמינות כרגע.",
      availableStatus: "זמינה",
      unavailableStatus: "לא זמינה",
      returnDateLabel: "חזרה",

      //Sorting
      sort: "סנן לפי: ",
      sortByName: "א' ב'",
      israeli: " ישראליות",
    },
  };

  const currentTranslations = text[language] || text.english; // Fallback to English
  // Accordion logic
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Handle sorting
  const handleSortName = () => {
    setSortBy((prev) =>
      prev === "AlphabeticalAtoZ" ? "AlphabeticalZtoA" : "AlphabeticalAtoZ"
    );
  };
  const handleSortReturnDate = () => {
    setSortBy((prev) => (prev === "closerDate" ? "distantDate" : "closerDate"));
  };

  const handleSortByIsraeli = () => {
    setSortBy("israeli");
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
        <h3>{currentTranslations.sort}</h3>

        {showAvailableAirlines !== true && (
          <button onClick={handleSortReturnDate}>
            {sortBy === "closerDate"
              ? currentTranslations.returnDateLabel + "↓"
              : sortBy === "distantDate"
                ? currentTranslations.returnDateLabel + "↑"
                : currentTranslations.returnDateLabel}
          </button>
        )}
        <button onClick={handleSortName}>
          {sortBy === "AlphabeticalAtoZ"
            ? currentTranslations.sortByName + "↓"
            : sortBy === "AlphabeticalZtoA"
              ? currentTranslations.sortByName + "↑"
              : currentTranslations.sortByName}
        </button>
        <button onClick={handleSortByIsraeli}>
          {sortBy === "israeli"
            ? currentTranslations.israeli + "↑"
            : currentTranslations.israeli}
        </button>
      </div>
      {filteredAndSortedAirlines.length === 0 ? (
        <p>{currentTranslations.noAirlines}</p>
      ) : (
        <div className={styles.accordionBody}>
          {filteredAndSortedAirlines.map((airline) => (
            <AirlineCard
              key={airline}
              airline={airline}
              isOpen={airline === activeIndex}
              onClick={() => handleItemClick(airline)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Sorts an array of airline objects based on the specified criterion.
 *
 * @param {'AlphabeticalAtoZ' | 'AlphabeticalZtoA' | 'closerDate' | 'distantDate' | 'israeli'} sortBy - The sorting criterion.
 * @param {Airline[]} airlines - The array of airline objects to sort.
 * @returns {Airline[]} A new array of sorted airline objects.
 */
function sortAirlines(sortBy, airlines) {
  // Create a shallow copy of the array to avoid mutating the original
  const sortedAirlines = [...airlines];

  sortedAirlines.sort((a, b) => {
    switch (sortBy) {
      case "AlphabeticalAtoZ":
        // Sort by English name A-Z (case-insensitive)
        const nameA_az = a.name.english.toLowerCase();
        const nameB_az = b.name.english.toLowerCase();
        if (nameA_az < nameB_az) return -1;
        if (nameA_az > nameB_az) return 1;
        return 0;

      case "AlphabeticalZtoA":
        // Sort by English name Z-A (case-insensitive)
        const nameA_za = a.name.english.toLowerCase();
        const nameB_za = b.name.english.toLowerCase();
        if (nameA_za > nameB_za) return -1;
        if (nameA_za < nameB_za) return 1;
        return 0;

      case "closerDate":
        // Sort by returnDate, closer dates first. Null dates come last.
        const dateA_closer = parseDateString(a.returnDate);
        const dateB_closer = parseDateString(b.returnDate);

        // Handle null dates: null dates are considered "further"
        if (dateA_closer === null && dateB_closer === null) return 0;
        if (dateA_closer === null) return 1; // a is null, b is not -> a comes after b
        if (dateB_closer === null) return -1; // b is null, a is not -> a comes before b

        return dateA_closer.getTime() - dateB_closer.getTime();

      case "distantDate":
        // Sort by returnDate, distant dates first. Null dates come first.
        const dateA_distant = parseDateString(a.returnDate);
        const dateB_distant = parseDateString(b.returnDate);

        // Handle null dates: null dates are considered "closer" (for this sort order)
        if (dateA_distant === null && dateB_distant === null) return 0;
        if (dateA_distant === null) return -1; // a is null, b is not -> a comes before b
        if (dateB_distant === null) return 1; // b is null, a is not -> a comes after b

        return dateB_distant.getTime() - dateA_distant.getTime(); // Reversed for distant dates

      case "israeli":
        // Sort by isIsraeli: true first, then false/undefined
        const isIsraeliA = a.isIsraeli === true;
        const isIsraeliB = b.isIsraeli === true;

        if (isIsraeliA && !isIsraeliB) return -1; // A is Israeli, B is not -> A comes first
        if (!isIsraeliA && isIsraeliB) return 1; // B is Israeli, A is not -> B comes first
        return 0; // Both are Israeli, both are not, or isIsraeli is undefined for both

      default:
        // If an unknown sortBy value is provided, return unsorted (original order)
        console.warn(
          `Unknown sortBy criterion: ${sortBy}. No sorting applied.`
        );
        return 0;
    }
  });

  return sortedAirlines;
}
export default AvailableAirlines;
