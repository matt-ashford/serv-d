import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import HomePage from "./mailClassComponents/HomePage/HomePage.jsx";
import "./index.css";
import "./App.css";

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFoundPage from "./mailClassComponents/NotFound/NotFound.jsx";
import AllMarketDominant from "./mailClassComponents/allMarketDominant/AllMarketDominant.jsx";
// import { MailClassPage } from "./MailClassPage/MailClassPage.jsx";

import MailClassPage from "./mailClassComponents/MailClassPage/MailClassPage.jsx";
import DrawerParent from "./Drawer/DrawerParent.jsx";

// const router = createBrowserRouter([
const router = createHashRouter([
  {
    path: "/service-performance/home",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/service-performance/all-md",
    element: <AllMarketDominant />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/service-performance/first-class",
    element: <MailClassPage mailClassName="First Class Mail" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/service-performance/marketing-mail",
    element: <MailClassPage mailClassName="Marketing Mail" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/service-performance/periodicals",
    element: <MailClassPage mailClassName="Periodicals" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/service-performance/package-services",
    element: <MailClassPage mailClassName="Package Services" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/service-performance/special-services",
    element: <MailClassPage mailClassName="Special Services" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "*",
    element: <Navigate to="/service-performance/home" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// const router = createBrowserRouter([
//   // const router = createHashRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/all-md",
//     element: <AllMarketDominant />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/first-class",
//     element: <MailClassPage mailClassName="First Class Mail" />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/marketing-mail",
//     element: <MailClassPage mailClassName="Marketing Mail" />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/periodicals",
//     element: <MailClassPage mailClassName="Periodicals" />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/package-services",
//     element: <MailClassPage mailClassName="Package Services" />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/special-services",
//     element: <MailClassPage mailClassName="Special Services" />,
//     errorElement: <NotFoundPage />,
//   },
// ]);
