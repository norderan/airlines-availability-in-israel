import { Outlet, Link } from "react-router-dom";
import styles from "./Layout.module.scss";
import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Home, Info, Menu, X } from "lucide-react";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
import MessageAlert from "../MessageAlert/MessageAlert";
function Layout() {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "english" ? "hebrew" : "english"));
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const text = {
    availableAirlines:
      language === "english" ? "Available Airlines" : "חברות תעופה זמינות",
    unavailableAirlines:
      language === "english" ? "Unavailable Airlines" : "חברות תעופה לא זמינות",
    about: language === "english" ? "About" : "אודות",
    home: language === "english" ? "Home" : "בית",
    title: "SkyTLV",
    copyright:
      language === "english"
        ? `© ${new Date().getFullYear()} Yazan Abu Queider. All rights reserved.`
        : `© ${new Date().getFullYear()} יזן אבו קוידר. כל הזכויות שמורות.`,
  };

  return (
    <div
      className={
        styles.container +
        (language === "hebrew" ? ` ${styles.hebrewText}` : "")
      }
    >
      <button className={styles.mobileDarkmodeButton}>
        <ThemeToggleButton />
      </button>
      <header>
        <div className={styles.logoContainer}>
          <svg
            width="32.997814mm"
            height="33.146412mm"
            viewBox="0 0 32.997814 33.146412"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs id="defs1" />
            <g id="layer1" transform="translate(-30.03575,-138.37957)">
              <g id="g11" transform="translate(-3.6751875,-10.106766)">
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                  }}
                  d="m 33.710937,154.8457 3.31836,11.55664 c 0.338458,1.2075 1.44334,2.05804 2.697265,2.07422 h 0.0078 16.707031 0.002 c 1.264286,-0.004 2.383282,-0.85687 2.72461,-2.07422 l 0.445312,-1.58593 h -0.0059 l 2.863281,-9.97071 z m 3.31836,2.5 h 22.123047 l -2.410157,8.39844 c -0.04946,0.13633 -0.158229,0.232 -0.30664,0.23242 H 39.759766 c -0.156574,-0.002 -0.281957,-0.0973 -0.324219,-0.24804 l -0.002,-0.004 z"
                  id="path1"
                />
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                  }}
                  d="m 40.480469,167.22656 v 14.31055 h 2.5 v -14.31055 z"
                  id="path2"
                />
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                  }}
                  d="m 44.556641,155.91797 -2.472657,0.35351 1.589844,11.13086 2.474609,-0.35351 z"
                  id="path4"
                />
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                  }}
                  d="m 51.625,155.91797 -1.591797,11.13086 2.474609,0.35351 1.589844,-11.13086 z"
                  id="path5"
                />
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                  }}
                  d="m 46.841797,149.73437 v 6.36133 h 2.498047 v -6.36133 z"
                  id="path6"
                />
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                  }}
                  d="m 46.5,148.48633 v 2.49804 h 3.181641 v -2.49804 z"
                  id="path7"
                />
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                  }}
                  d="m 56.173828,166.19531 c -4.223852,0 -8.495777,2.36143 -10.388672,6.95117 l -0.0078,0.0195 -0.0078,0.0195 c -0.174168,0.4692 -0.174168,0.98587 0,1.45507 l 1.115235,-0.41406 -1.09961,0.45313 c 1.892895,4.58975 6.16482,6.95312 10.388672,6.95312 4.223852,0 8.495777,-2.36337 10.388672,-6.95312 l 0.0078,-0.0195 0.0078,-0.0195 c 0.174168,-0.4692 0.174168,-0.98587 0,-1.45507 l -0.0078,-0.0195 -0.0078,-0.0195 c -1.892895,-4.58974 -6.16482,-6.95117 -10.388672,-6.95117 z m 0,2.30469 c 3.343927,0 6.628081,1.77222 8.189453,5.41406 -1.561385,3.6418 -4.845549,5.41211 -8.189453,5.41211 -3.343889,0 -6.626106,-1.77035 -8.1875,-5.41211 1.56138,-3.64181 4.843587,-5.41406 8.1875,-5.41406 z"
                  id="path1-2"
                />
                <path
                  style={{
                    baselineShift: "baseline",
                    display: "inline",
                    overflow: "visible",
                    opacity: 1,
                    vectorEffect: "none",
                    strokeWidth: "0.922331",
                    enableBackground: "accumulate",
                    stopColor: "#000000",
                    stopOpacity: 1,
                    fill: "#c40048",
                  }}
                  d="m 56.1734,169.94644 c -2.177347,0 -3.966728,1.78939 -3.966728,3.96674 0,2.17733 1.789381,3.96672 3.966728,3.96672 2.177346,0 3.966728,-1.78939 3.966728,-3.96672 0,-2.17735 -1.789382,-3.96674 -3.966728,-3.96674 z m 0,2.30582 c 0.931185,0 1.660909,0.72973 1.660909,1.66092 0,0.93118 -0.729724,1.6609 -1.660909,1.6609 -0.931185,0 -1.66091,-0.72972 -1.66091,-1.6609 0,-0.93119 0.729725,-1.66092 1.66091,-1.66092 z"
                  id="circle1"
                />
              </g>
            </g>
          </svg>

          <h1>{text.title}</h1>
        </div>
        <button
          className={styles.hamburgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav
          className={`${styles.mainNav} ${isMenuOpen ? styles.navOpen : ""}`}
        >
          <ul id="main-navigation">
            <li>
              <Link to="/" onClick={handleLinkClick}>
                <Home
                  className={styles.naveIcon}
                  size={32}
                  style={{ verticalAlign: "middle", marginRight: 4 }}
                />
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>
                <Info className={styles.naveIcon} size={32} />
              </Link>
            </li>
            <li className={styles.themeToggleListItem}>
              <ThemeToggleButton />
            </li>
            <li>
              <button
                className={styles.toggleLanguageButton}
                onClick={() => {
                  toggleLanguage();
                  handleLinkClick();
                }} // Close menu on language toggle
              >
                {language === "english" ? "עברית" : "English"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className={styles.mainContent}>
          <MessageAlert />
          <Outlet />
        </div>
      </main>
      <footer>
        <p className={styles.copyright}>{text.copyright}</p>
      </footer>
    </div>
  );
}

export default Layout;
