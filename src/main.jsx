import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider } from 'react-router-dom'
import { router } from "./routes/Index.jsx";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
