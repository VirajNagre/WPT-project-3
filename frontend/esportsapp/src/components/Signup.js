import React, { useState } from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL,USER_ENDPOINT } from '../Constants/Constants.js';

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
        if (response.status === 201) {
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
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" name="InGameName" onChange={handleFieldChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>Country</Form.Label>
                            <br />
                            <Form.Select type="text" placeholder="Enter country" name="Country" onChange={handleFieldChange}>
                            <option value="">Select Country</option>
                                    <option value="IN">India</option>
                            </Form.Select>
                    </Col>

                    <Col lgg={4}>
                            <Form.Label>State</Form.Label>
                            <br />
                            {/* <Form.Control type="text" placeholder="Enter state" name="State" /> */}
                                <Form.Select id="country-state" size='lg' name="state" onChange={handleFieldChange} >
                                {/* <Form.Select size="sm"> */}
                                    <option value="">Select state</option>
                                    <option value="AN">Andaman and Nicobar Islands</option>
                                    <option value="AP">Andhra Pradesh</option>
                                    <option value="AR">Arunachal Pradesh</option>
                                    <option value="AS">Assam</option>
                                    <option value="BR">Bihar</option>
                                    <option value="CH">Chandigarh</option>
                                    <option value="CT">Chhattisgarh</option>
                                    <option value="DN">Dadra and Nagar Haveli</option>
                                    <option value="DD">Daman and Diu</option>
                                    <option value="DL">Delhi</option>
                                    <option value="GA">Goa</option>
                                    <option value="GJ">Gujarat</option>
                                    <option value="HR">Haryana</option>
                                    <option value="HP">Himachal Pradesh</option>
                                    <option value="JK">Jammu and Kashmir</option>
                                    <option value="JH">Jharkhand</option>
                                    <option value="KA">Karnataka</option>
                                    <option value="KL">Kerala</option>
                                    <option value="LA">Ladakh</option>
                                    <option value="LD">Lakshadweep</option>
                                    <option value="MP">Madhya Pradesh</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="MN">Manipur</option>
                                    <option value="ML">Meghalaya</option>
                                    <option value="MZ">Mizoram</option>
                                    <option value="NL">Nagaland</option>
                                    <option value="OR">Odisha</option>
                                    <option value="PY">Puducherry</option>
                                    <option value="PB">Punjab</option>
                                    <option value="RJ">Rajasthan</option>
                                    <option value="SK">Sikkim</option>
                                    <option value="TN">Tamil Nadu</option>
                                    <option value="TG">Telangana</option>
                                    <option value="TR">Tripura</option>
                                    <option value="UP">Uttar Pradesh</option>
                                    <option value="UT">Uttarakhand</option>
                                    <option value="WB">West Bengal</option>
                                </Form.Select>
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
                            <Form.Control type="text" placeholder="Enter mobile number" name="MobileNumber" onChange={handleFieldChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4} >
                            <Form.Label>Username/Alias</Form.Label>
                            <Form.Control type="text" placeholder="Enter your player name" name="Username" onChange={handleFieldChange} />
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