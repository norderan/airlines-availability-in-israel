import React from "react";
import styles from "../AirlineAvailabilityPages.module.css"; // Optional: shared styles

function AvailableAirlines() {
  return (
    <div className={styles.pageContainer}>
      <h2>Available Airlines</h2>
      <p>
        This page will display a list of airlines that are currently available
        for booking.
      </p>
      {/* Implement your availability listing component here */}
    </div>
  );
}

export default AvailableAirlines;
