import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
// import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="">
        <Main></Main></div>,
      children: [
        {
            path: '/'
            // element: ;
        }
      ]
    },
  ]);