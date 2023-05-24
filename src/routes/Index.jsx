import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ProductDetailed from '../pages/ProductDetailed'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/productos/:idProducto", element: < ProductDetailed /> },
    ],
  },
 
]);