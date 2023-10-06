import { createBrowserRouter } from "react-router-dom";
import { LandingPage, ErrorPage } from "../pages";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />,
    },
  ]);