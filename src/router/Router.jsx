import * as React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import Mainlayout from "../layOut/Mainlayout";
import Home from "../page/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
])


export default router;