import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import CareerPage from "../Pages/CareerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "career", element: <CareerPage /> },
    ],
  },
]);

export default router;