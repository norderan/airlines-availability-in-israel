import React from "react";
import styles from "./PageNotFound.module.css";
import { Rocket } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Rocket className={styles.icon} size={64} />
        <h1 className={styles.title}>404</h1>
        <p className={styles.subtitle}>Oops! Page Not Found</p>
        <p className={styles.message}>
          It looks like the page you are looking for has taken a trip to another
          galaxy.
        </p>
        <a href="/" className={styles.homeLink}>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
