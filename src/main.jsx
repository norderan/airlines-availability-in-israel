import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
