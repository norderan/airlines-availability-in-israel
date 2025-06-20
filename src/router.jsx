import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import PageNotFound from "./components/PageNotFound/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
  },
]);

export default router;
