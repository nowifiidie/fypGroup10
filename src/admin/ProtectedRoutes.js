/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '../firebase-config';
import db from "../firebase-config";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";




const ProtectedRoutes = (loginUser) => {

    const abc = loginUser;

    console.log(abc);

    let isAdmin = false;

    if (loginUser?.role == "admin") {
        isAdmin = true;
    }


    return loginUser ? <Outlet /> : <Navigate to="/singup" />;
};

export default ProtectedRoutes;