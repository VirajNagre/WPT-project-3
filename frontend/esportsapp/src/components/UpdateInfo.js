import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import React, { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { BASE_URL, USER_ENDPOINT } from '../Constants/Constants.js';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import { getToken } from '../Services/userServices.js';
import StateOptions from './StateOptions.js';
import { AuthContext } from './ContextAPI/authContext.js';

export const UpdateInfo = () => {
  const {setUserInfo,login} = useContext(AuthContext);
  

  const [userFormData, setUserFormData] = useState({
    FirstName: "",
    LastName: "",
    DateOfBirth: "",
    Email: "",
    Country: "",
    State: "",
    City: "",
    MobileNumber: "",
    Username: "",
    Password: "",
    ConfirmPassword: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${USER_ENDPOINT}/`, {
          headers: {
            'Authorization': `Bearer ${getToken()}`
          }
        });
        setUserFormData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleFieldChange = (eventObj) => {
    eventObj.preventDefault();
    setUserFormData({
      ...userFormData,
      [eventObj.target.name]: eventObj.target.value
    });
  }

  const handleFormSubmit = async (eventObj) => {
    eventObj.preventDefault();
    console.log(userFormData);

    if (userFormData.FirstName.trim() === "" || userFormData.LastName.trim() === "") {
      toast.error("First Name and Last Name are required.");
      return;
    }

    if (userFormData.DateOfBirth.trim() === "") {
      toast.error("Date Of Birth is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userFormData.Email)) {
      toast.error("Invalid Email.");
      return;
    }

    if (userFormData.Country.trim() === "") {
      toast.error("Country is required.");
      return;
    }
    if (userFormData.Username.trim() === "") {
      toast.error("Username is required.");
      return;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(userFormData.MobileNumber)) {
      toast.error("Invalid Mobile Number.");
      return;
    }


    const response = await axios.post(
      `${BASE_URL}/${USER_ENDPOINT}/update`, userFormData,
      {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      }
    );
    console.log(response);
    if (response.status === 200) {
      login(userFormData);
      toast.success(response.data.message || "Success");

    }
  };

  return (
    <Container>
      <h3>Personal Details</h3>
      <Toaster />
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col lg={4}>
            <strong><Form.Label>First Name</Form.Label></strong>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="FirstName"
              value={userFormData.FirstName}
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg={4}>
            <strong><Form.Label>Last Name</Form.Label></strong>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="LastName"
              value={userFormData.LastName}
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong><Form.Label>Date Of Birth</Form.Label></strong>
            <Form.Control
              type="date"
              placeholder="Enter birthdate"
              name="DateOfBirth"
              value={userFormData.DateOfBirth}
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg={4}>
            <strong><Form.Label>Email ID</Form.Label></strong>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="Email"
              value={userFormData.Email}
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong><Form.Label>Country</Form.Label></strong>
            <br />
            <Form.Select
              type="text"
              placeholder="Enter country"
              name="Country"
              value={userFormData.Country}
              onChange={handleFieldChange}
            >
              <option value="">Select Country</option>
              <option value="IN">India</option>
            </Form.Select>
          </Col>
          <Col lg={4}>
            <strong><Form.Label>State</Form.Label></strong>
            <br />
            <Form.Select
              id="country-state"
              size="lg"
              name="State"
              value={userFormData.State}
              onChange={handleFieldChange}
            >
              <StateOptions />
            </Form.Select>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong><Form.Label>City</Form.Label></strong>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="City"
              value={userFormData.City}
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg={4}>
            <strong><Form.Label>Mobile Number</Form.Label></strong>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              name="MobileNumber"
              value={userFormData.MobileNumber}
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong><Form.Label>Username/Alias</Form.Label></strong>
            <Form.Control
              type="text"
              placeholder="Enter your player name"
              name="Username"
              value={userFormData.Username}
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Button type="submit" className="btn btn-primary">
            Update
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
