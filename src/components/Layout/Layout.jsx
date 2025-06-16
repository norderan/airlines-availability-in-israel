import React from "react";
import { Outlet, Link } from "react-router-dom"; // Import Outlet and Link for navigation
import styles from "./Layout.module.css"; // Optional: for modular CSS for your layout

function Layout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link to="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/available-airlines" className={styles.navLink}>
                Available Airlines
              </Link>
            </li>
            <li>
              <Link to="/unavailable-airlines" className={styles.navLink}>
                Unavailable Airlines
              </Link>
            </li>
            {/* Add more common navigation links here */}
          </ul>
        </nav>
        <h1>Airlines Availability in Israel</h1>
      </header>

      <main className={styles.mainContent}>
        {/*
          The Outlet component renders the content of the currently matched child route.
          If the URL is /available-airlines, AvailableAirlinesPage will render here.
          If the URL is /unavailable-airlines, UnavailableAirlinesPage will render here.
        */}
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Norderan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
