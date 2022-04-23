/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import './Login.css';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import { login, useAuth, logout } from '../firebase-config';
import { useNavigate, useParams, useLocation, Navigate } from "react-router-dom";
import db from "../firebase-config";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";





// eslint-disable-next-line react/prop-types
function Login({ setIsAuth }) {

    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    let loginSuc = true;
    let from = location.state?.from?.pathname || "/";

 

    async function handleLogin() {
        setLoading(true);
        try {
            loginSuc = true;
            await login(emailRef.current.value, passwordRef.current.value);
            document.getElementById("loginLink").style.display = "none";
        } catch {
            alert("Error!");
            navigate("/login");
            loginSuc = false;
        }
        setLoading(false);



        if (loginSuc == true) {

            navigate(from, { replace: true });
            
        }
        
        

    }

    return (
        <div className="Login">
            <div id="main">


                <header className='Login-header'>
                    <Container>
                        <div className='parent-div'>
                            <div className='example-div'>
                                <Card className='card-style'>
                                    <h1 className='login-heading'>Login</h1>
                                    <Form style={{ margin: "30px" }}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className='label-text'>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className='label-text'>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                                            <Form.Text className="text-muted">
                                                Never share your password with anyone else.
                                            </Form.Text>
                                        </Form.Group>
                                        <a href='/#' className='forgot-link'>
                                            Forgot password?
                                        </a>
                                        <Button variant="primary" type="submit" className='login-button' disabled={loading || currentUser} onClick={handleLogin}>
                                            Login
                                        </Button>
                                        <a href='/signup' className='create-link'>
                                            Create an Account
                                        </a>
                                    </Form>
                                </Card>
                            </div>

                        </div>
                    </Container>
                </header>

            </div>
        </div>
    );
}

export default Login;