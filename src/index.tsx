import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./pages/error/ErrorPage";
import { MovieDetailsWrapper } from "./components/movie-details-wrapper/MovieDetailsWrapper";
import { SearchMovieSection } from "./components/search-movie-section/SearchMovieSection";
import { MoviesApiService } from "./services/movies-api.service";
import { AddEditMovieDialogWrapper } from "./components/add-edit-movie-dialog-wrapper/AddEditMovieDialogWrapper";
import { DeleteMovieDialogWrapper } from "./components/delete-movie-dialog-wrapper/DeleteMovieDialogWrapper";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SearchMovieSection />,
        children: [
          {
            path: "new",
            element: <AddEditMovieDialogWrapper />,
          },
        ],
      },
      {
        path: "/:movieId",
        element: <MovieDetailsWrapper />,
        loader: async ({ params }) => {
          const selectedMovieDetails = await MoviesApiService.getById(
            params.movieId!
          );

          return { selectedMovieDetails };
        },
        children: [
          {
            path: "edit",
            element: <AddEditMovieDialogWrapper />,
            loader: async ({ params }) => {
              const selectedMovieDetails = await MoviesApiService.getById(
                params.movieId!
              );

              return { selectedMovieDetails };
            },
          },
          {
            path: "delete",
            element: <DeleteMovieDialogWrapper />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
