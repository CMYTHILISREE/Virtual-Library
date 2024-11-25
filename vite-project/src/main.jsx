import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css"
import LandingPage from "./Components/LandingPage";
import PageNotFound from "./Components/PageNotFound";
import BrowseBooks from "./Components/BrowseBooks";
import AddBookForm from "./Components/AddBookForm";
import BookDetails from "./Components/BookDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    errorElement: <PageNotFound />, 
    children: [
      {
        path:"/",
        element: <LandingPage />, 
      },
      {
        path: "browse-books",
        element: <BrowseBooks />,
      },
      {
        path: "add-book",
        element: <AddBookForm />,
      },
      {
        path: "book/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);

