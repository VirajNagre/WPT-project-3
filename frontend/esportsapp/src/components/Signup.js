import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL, USER_ENDPOINT } from "../Constants/Constants.js";
import toast, { Toaster } from "react-hot-toast";

export const Signup = () => {
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
    ConfirmPassword: "",
  });

  const navigate = useNavigate();

  const handleFieldChange = (eventObj) => {
    eventObj.preventDefault();
    setUserFormData({
      ...userFormData,
      [eventObj.target.name]: eventObj.target.value,
    });
  };

  const handleFormSubmit = async (eventObj) => {
    eventObj.preventDefault();
    console.log(userFormData);

    if (
      userFormData.FirstName.trim() === "" ||
      userFormData.LastName.trim() === ""
    ) {
      toast.error("First Name and Last Name are required.");
      return;
    }

    if (userFormData.DateOfBirth.trim() === "") {
      toast.error("Date Of Birth is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("userFormData.email", userFormData);
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

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(userFormData.Password)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }

    if (userFormData.Password !== userFormData.ConfirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const response = await axios.post(
      `${BASE_URL}/${USER_ENDPOINT}/register`,
      userFormData
    );
    console.log(response);
    if (response.status === 201) {
      navigate("/login");
    }
  };
  return (
    <Container>
      <h3>Personal Details</h3>
      <Toaster />
      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col lg={4}>
            <strong>
              <Form.Label>First Name</Form.Label>
            </strong>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="FirstName"
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg={4}>
            <strong>
              <Form.Label>Last Name</Form.Label>
            </strong>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="LastName"
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong>
              <Form.Label>Date Of Birth</Form.Label>
            </strong>
            <Form.Control
              type="date"
              placeholder="Enter birthdate"
              name="DateOfBirth"
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg={4}>
            <strong>
              <Form.Label>Email ID</Form.Label>
            </strong>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="Email"
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong>
              <Form.Label>Country</Form.Label>
            </strong>
            <br />
            <Form.Select
              type="text"
              placeholder="Enter country"
              name="Country"
              onChange={handleFieldChange}
            >
              <option value="">Select Country</option>
              <option value="IN">India</option>
            </Form.Select>
          </Col>
          <Col lg={4}>
            <strong>
              <Form.Label>State</Form.Label>
            </strong>
            <br />
            <Form.Select
              id="country-state"
              size="lg"
              name="State"
              onChange={handleFieldChange}
            >
              <option value="">Select state</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="AR">Arunachal Pradesh</option>
              <option value="AS">Assam</option>
              <option value="BR">Bihar</option>
              <option value="CT">Chhattisgarh</option>
              <option value="GA">Gujarat</option>
              <option value="HR">Haryana</option>
              <option value="HP">Himachal Pradesh</option>
              <option value="JK">Jammu and Kashmir</option>
              <option value="GA">Goa</option>
              <option value="JH">Jharkhand</option>
              <option value="KA">Karnataka</option>
              <option value="KL">Kerala</option>
              <option value="MP">Madhya Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="MN">Manipur</option>
              <option value="ML">Meghalaya</option>
              <option value="MZ">Mizoram</option>
              <option value="NL">Nagaland</option>
              <option value="OR">Odisha</option>
              <option value="PB">Punjab</option>
              <option value="RJ">Rajasthan</option>
              <option value="SK">Sikkim</option>
              <option value="TN">Tamil Nadu</option>
              <option value="TG">Telangana</option>
              <option value="TR">Tripura</option>
              <option value="UT">Uttarakhand</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="WB">West Bengal</option>
              <option value="AN">Andaman and Nicobar Islands</option>
              <option value="CH">Chandigarh</option>
              <option value="DN">Dadra and Nagar Haveli</option>
              <option value="DD">Daman and Diu</option>
              <option value="DL">Delhi</option>
              <option value="LD">Lakshadweep</option>
              <option value="PY">Puducherry</option>
            </Form.Select>
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong>
              <Form.Label>City</Form.Label>
            </strong>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="City"
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg={4}>
            <strong>
              <Form.Label>Mobile Number</Form.Label>
            </strong>
            <Form.Control
              type="text"
              placeholder="Enter mobile number"
              name="MobileNumber"
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong>
              <Form.Label>Username/Alias</Form.Label>
            </strong>
            <Form.Control
              type="text"
              placeholder="Enter your player name"
              name="Username"
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col lg={4}>
            <strong>
              <Form.Label>Password</Form.Label>
            </strong>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="Password"
              onChange={handleFieldChange}
            />
          </Col>
          <Col lg={4}>
            <strong>
              <Form.Label>Confirm Password</Form.Label>
            </strong>
            <Form.Control
              type="password"
              placeholder="Enter confirm password"
              name="ConfirmPassword"
              onChange={handleFieldChange}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Button type="submit" className="btn btn-primary">
            Register
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Signup;
