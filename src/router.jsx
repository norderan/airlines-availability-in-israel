import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />, // Catch errors specifically for routes under this layout
  },
  // Routes outside the main layout (e.g., login, standalone pages)
  {
    path: "*", // Catch-all route for any path not defined above
    element: <PageNotFound />,
  },
]);

export default router;
