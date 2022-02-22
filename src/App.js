/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Login from './login/Login';
import SingUpUi from "./signup/Signup";
import ErrorPageUi from './errorPage/error';
import Home from './home/home';
import React from "react";
import { useState, useEffect } from "react";
import { logout, useAuth } from "./firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import db from "./firebase-config";


function App() {

  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  let logoutSuc = true;


  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
    navigate("/login");
  }



  function isLogin() {
    console.log(111);
    if (logoutSuc == true) {
      document.getElementById("loginLink").style.display = "block";
      console.log(222);
    }
    else {
      document.getElementById("loginLink").style.display = "none";
      console.log(333);
    }
  }

  const [users, setUsers] = useState([]);

  const loginUser =  users.find(user => (user.email == currentUser?.email))

  useEffect(
      () =>
          onSnapshot(collection(db, "users"), (snapshot) =>
              setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
          ),
      []
  );


  return (

    <div >
      <nav>

        <Link to="/"> Home </Link>
        <Link id="loginLink" to="/login">Login </Link>

        <button disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SingUpUi />} />
        <Route path="*" element={<ErrorPageUi />} />
      </Routes>
    </div>

  );


}

export default App;