import { createBrowserRouter } from "react-router-dom";

// Import your Layout component
import Layout from "./components/Layout/Layout";

import AvailableAirlines from "./features/AvailableAirlines/AvailableAirlines";
import UnavailableAirlines from "./features/UnavailableAirlines/UnavailableAirlines";

import PageNotFound from "./components/PageNotFound/PageNotFound"; // Assuming you have a basic 404 page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This route uses your Layout component
    errorElement: <PageNotFound />, // Catch errors specifically for routes under this layout
    children: [
      // The "index: true" route renders when the parent path is matched exactly ('/')
      // This will be your default view when someone lands on your root URL.
      {
        index: true,
        element: <AvailableAirlines />, // Or you could redirect to /available-airlines
      },
      {
        path: "available-airlines", // This is a relative path to the parent '/', so it becomes /available-airlines
        element: <AvailableAirlines />,
      },
      {
        path: "unavailable-airlines", // This is a relative path to the parent '/', so it becomes /unavailable-airlines
        element: <UnavailableAirlines />,
      },
      // You can add other routes that should use the same Layout here
      // For example, if you had a FlightDetails page that uses the main layout:
      // {
      //   path: 'flight/:id',
      //   element: <FlightDetailsPage />,
      // },
    ],
  },
  // Routes outside the main layout (e.g., login, standalone pages)
  {
    path: "*", // Catch-all route for any path not defined above
    element: <PageNotFound />,
  },
]);

export default router;
