import React from "react";
import styles from "../AirlineAvailabilityPages.module.css"; // Optional: shared styles

function UnavailableAirlines() {
  return (
    <div className={styles.pageContainer}>
      <h2>Unavailable Airlines</h2>
      <p>
        This page will show airlines that are currently unavailable or have
        issues.
      </p>
      {/* Implement your unavailability listing component here */}
    </div>
  );
}

export default UnavailableAirlines;
