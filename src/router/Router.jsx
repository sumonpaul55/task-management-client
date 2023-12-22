import * as React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import Mainlayout from "../layOut/Mainlayout";
import Home from "../page/home/Home";
import Register from "../page/register/Register";
import Dashboard from "../layOut/Dashboard";
import Profile from "../page/dashboard/profile/Profile";
import MyTodos from "../page/dashboard/myTodos/MyTodos";
import AllUsers from "../page/dashboard/allUsers/AllUsers";
import AddTodos from "../page/dashboard/addTodos/AddTodos";
import Login from "../page/login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "register",
                element: <Register></Register>
            }
            ,
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "profile",
                element: <Profile></Profile>
            },
            {
                path: "mytodos",
                element: <MyTodos></MyTodos>
            },
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "addtodos",
                element: <AddTodos></AddTodos>
            }
        ]
    }
])


export default router;