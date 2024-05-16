import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import HomePage from "./mailClassComponents/HomePage/HomePage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./mailClassComponents/NotFound/NotFound.jsx";
import AllMarketDominant from "./mailClassComponents/allMarketDominant/AllMarketDominant.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/all-md",
    element: <AllMarketDominant />,
    errorElement: <NotFoundPage />,
  },
  // { path: "/profile", element: <Profile />, errorElement: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
