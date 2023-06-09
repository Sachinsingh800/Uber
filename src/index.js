import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Drive from './Component/Sections/Home/Drive';
import Ride from './Component/Sections/Home/Ride';
import Rent from './Component/Sections/Home/Rent';
import Language from './Component/Pages/Language/Language';
import LoginPage from './Component/Pages/LoginPage/LoginPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Drive",
    element: <Drive />
  },
  {
    path: "/Ride",
    element: <Ride />
  },
  {
    path: "/Rent",
    element: <Rent />
  },
  {
    path: "/Language",
    element: <Language />
  },
  {
    path: "/Login",
    element: <LoginPage />
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
