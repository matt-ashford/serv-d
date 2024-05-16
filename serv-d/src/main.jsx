import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import HomePage from "./mailClassComponents/HomePage/HomePage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./mailClassComponents/NotFound/NotFound.jsx";
import AllMarketDominant from "./mailClassComponents/allMarketDominant/AllMarketDominant.jsx";
import { MailClassPage } from "./MailClassPage/MailClassPage.jsx";
import DrawerParent from "./Drawer/Drawer.jsx";
// import Drawer02 from "./Drawer/Drawer02.jsx";
// import Drawer02 from "./Drawer/Drawer02.jsx";

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
  {
    path: "/first-class",
    element: <MailClassPage mailClassName="First Class Mail" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/marketing-mail",
    element: <MailClassPage mailClassName="Marketing Mail" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/periodicals",
    element: <MailClassPage mailClassName="Periodicals" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/package-services",
    element: <MailClassPage mailClassName="Package Services" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/special-services",
    element: <MailClassPage mailClassName="Special Services" />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
