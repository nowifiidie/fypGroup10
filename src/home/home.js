/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAuth } from '../firebase-config';
import db from "../firebase-config";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";


function Home() {

    const [users, setUsers] = useState([]);

    const currentUser = useAuth();

    const loginUser =  users.find(user => (user.email == currentUser?.email))

    useEffect(
        () =>
            onSnapshot(collection(db, "users"), (snapshot) =>
                setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            ),
        []
    );


    return (
        <div className="home">
           <div>Currently logged in as: {loginUser?.name}</div>
        </div>
    );

}

export default Home;