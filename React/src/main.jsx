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
import Error from './page/Error';
import './index.css'
import SignIn from './page/SignIn';
import ProductDetails from './page/ProductDetails';
import UserProfile from './Components/Users/UserProfile';
import UserOrder from './Components/Users/UserOrder';
import ProtectedRoute from './Routes/ProtectedRoute';
import AdminRoute from './Routes/AdminRoute';
import AdminProfile from './Components/Admin/AdminProfile';
import AdminProducts from './Components/Admin/AdminProducts';
import AdminCategories from './Components/Admin/AdminCategories';
import AdminManageUser from './Components/Admin/AdminManageUser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Product></Product>,
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
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/dashboard/user",
        element: <ProtectedRoute></ProtectedRoute>,
        children:[
          {
            path:'profile',
            element: <UserProfile></UserProfile>
          },
          {
            path:'order',
            element: <UserOrder></UserOrder>
          }
        ]
      },
      {
        path: "/dashboard/admin",
        element: <AdminRoute></AdminRoute>,
        children:[
          {
            path:'profile',
            element: <AdminProfile></AdminProfile>
          },
          {
            path:'products',
            element: <AdminProducts></AdminProducts>
          },
          {
            path:'category',
            element: <AdminCategories></AdminCategories>
          },
          {
            path:'users',
            element: <AdminManageUser></AdminManageUser>
          },
        ]
      },
      
      
    ]
  },

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);