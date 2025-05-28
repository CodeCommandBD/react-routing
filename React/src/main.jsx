import { StrictMode } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import Home from './page/Home';
import App from './App';
import Contact from './page/Contact';
import About from './page/About';
import Product from './page/Product';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/product",
    element: <Product></Product>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);