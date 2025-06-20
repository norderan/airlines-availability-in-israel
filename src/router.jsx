import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AboutPage from "./components/AboutPage/AboutPage";
import AvailableAirlines from "./features/AvailableAirlines/AvailableAirlines";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <AvailableAirlines />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
