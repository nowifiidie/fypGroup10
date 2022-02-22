/* eslint-disable no-unused-vars */
import './Signup.css';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef,useState } from 'react';
import { signup , useAuth } from '../firebase-config';
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

function SingUpUi() {

    const [ loading, setLoading ] = useState(false);
    const currentUser = useAuth();
    let navigate = useNavigate();
    
    const emailRef = useRef();
    const passwordRef = useRef();
  
    async function handleSignup() {
        setLoading(true);
        // try {
          await signup(emailRef.current.value, passwordRef.current.value);
        // } catch {
          // alert("Error!");
        // }
        setLoading(false);
        navigate("/");
      }
  


    /* const login = async () => {
         try {
             const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
             console.log(user);
         } catch (error) {
             console.log(error.messsage);
         }
 
     };
 
     const logout = async () => {
 
 
     };
 */
    return (
        <div className="Login">
            <header className='Login-header'>
                <Container>
                    <div className='parent-div'>
                        <div className='example-div'>
                            <Card className='card-style'>
                                <h1 className='login-heading'>Sign Up</h1>
                                <Form style={{ margin: "30px" }}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className='label-text'>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" ref={emailRef}  />

                                    </Form.Group>
                                    
                                  
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label className='label-text'>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className='login-button'  onClick={handleSignup}>
                                        Create Account
                                    </Button>

                                   
                                

                                </Form>
                            </Card>
                        </div>

                    </div>
                </Container>
            </header>
        </div>
    );
}

export default SingUpUi;