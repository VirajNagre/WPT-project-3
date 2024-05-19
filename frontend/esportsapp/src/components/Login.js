import React, { useState } from 'react'
import {Button, Container, Form, Row} from "react-bootstrap";
import { BASE_URL, USER_ENDPOINT } from '../Constants/constants';
import axios from "axios";

export const Login = () => {
    const [userData,setUserData]=useState({Username:"",Password:""})
    
    const handleFieldChange=(eventObj)=> {
        eventObj.preventDefault();
        setUserData({...userData,[eventObj.target.name]:eventObj.target.value});
    }

    const handleSubmit=async(eventObj)=>{
        eventObj.preventDefault();
        // console.log(userData);
        const response=await axios.post(`${BASE_URL}/${USER_ENDPOINT}/login`)
        console.log(response);
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