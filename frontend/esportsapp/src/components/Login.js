import React, { useState,useContext } from 'react'
import {Button, Container, Form, Row} from "react-bootstrap";
import { BASE_URL, USER_ENDPOINT } from '../constants/Constants';
import { USER_TOKEN_STORAGE_KEY } from '../constants/authConstants';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { AuthContext } from './ContextAPI/authContext';

export const Login = () => {
    const [userData,setUserData]=useState({Username:"",Password:""})
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleFieldChange=(eventObj)=> {
        eventObj.preventDefault();
        setUserData({...userData,[eventObj.target.name]:eventObj.target.value});
    }

    const handleSubmit=async(eventObj)=>{
        eventObj.preventDefault();
        console.log(userData);
        
        const response=await axios.post(`${BASE_URL}/${USER_ENDPOINT}/login`,userData)
        console.log(response);
        if (response.status === 200) {
            // storeToken(response.data.token);
            localStorage.setItem(USER_TOKEN_STORAGE_KEY,response.data.token);
            login();
            navigate("/home");
        }
    }
    return (
        <Container >
            <Form className='w-50 mt-4' onSubmit={handleSubmit}>
                <Row>
                    <Form.Label>UserName : </Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" name="Username" onChange={handleFieldChange}></Form.Control>
                </Row>
                <br></br>

                <Row>
                    <Form.Label>Password : </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="Password" onChange={handleFieldChange}></Form.Control>
                </Row>
                <br></br>

                <Row>
                    <Button type="submit" className="btn btn-primary">Login</Button>
                </Row>
            </Form>
        </Container>
        
    )
}

export default Login;