import React from "react";
import CardItems from "../Pages/CardItems";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Cards from "../Pages/Cards";
import Login from "../Pages/Login";

export const Privateroute=[
    {path: "/about",component:<About/>},
    {path: "/cards", component:<Cards/>},
    {path: "/cards/:id", component:<CardItems/>},
    {path: "*", component:<Error/>}
]

export const Publicroute=[
    {path: "/loghin",component:<Login/>},
    {path: "*", component:<Login/>}
]