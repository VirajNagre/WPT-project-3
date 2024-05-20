import React, { useState } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL,USER_ENDPOINT } from '../Constants/constants.js';

export const Signup = () => {
    const [userFormData,setUserFormData]=useState({FirstName:"",LastName:"",DateOfBirth:"",InGameName:"",Country:"",State:"",City:"",MobileNumber:"",Username:"",Password:"",ConfirmPassword:""})

    const navigate=useNavigate();
    
    const handleFieldChange=(eventObj)=>{
        eventObj.preventDefault();
        setUserFormData({...userFormData,
            [eventObj.target.name]: eventObj.target.value});
        // console.log(userFormData)
    }

    const handleFormSubmit=async(eventObj)=>{
        eventObj.preventDefault();
        console.log(userFormData);

        const response=await axios.post(`${BASE_URL}/${USER_ENDPOINT}/register`,userFormData)
        console.log(response);
        if (response.status === 200) {
           navigate("/login");
        }

    }
    return (
        <Container>
            <h3>Personal Details</h3>
            <Form onSubmit={handleFormSubmit}>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" name="FirstName" onChange={handleFieldChange} />
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" name="LastName" onChange={handleFieldChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Enter birthdate" name="DateOfBirth" onChange={handleFieldChange} />
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>In GameName</Form.Label>
                            <Form.Control type="text" placeholder="Enter game name" name="InGameName" onChange={handleFieldChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter country" name="Country" onChange={handleFieldChange}/>
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter state" name="State" onChange={handleFieldChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" name="City" onChange={handleFieldChange}/>
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" name="mnuMobileNumber" onChange={handleFieldChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4} >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="Username" onChange={handleFieldChange} />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="Password" onChange={handleFieldChange}/>
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter confirm password" name="ConfirmPassword" onChange={handleFieldChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Button type="submit" className="btn btn-primary" >Register</Button>
                </Row>

            </Form>
        </Container>
    );
}

export default Signup;