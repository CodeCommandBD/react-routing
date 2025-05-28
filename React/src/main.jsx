import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import Home from './page/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);