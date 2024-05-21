import React, { useState, useContext } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { BASE_URL, USER_ENDPOINT } from "../Constants/Constants.js";
import {
  USER_INFO,
  USER_TOKEN_STORAGE_KEY,
} from "../Constants/authConstants.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./ContextAPI/authContext.js";

import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
  const [userData, setUserData] = useState({ Username: "", Password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFieldChange = (eventObj) => {
    eventObj.preventDefault();
    setUserData({ ...userData, [eventObj.target.name]: eventObj.target.value });
  };

  const handleSubmit = async (eventObj) => {
    eventObj.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/${USER_ENDPOINT}/login`,
        userData
      );
      if (response.status === 200) {
        localStorage.setItem(USER_TOKEN_STORAGE_KEY, response.data.token);
        login(response.data.userInfo);
        navigate("/home");
        toast.success("Login successful");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response && error.response.status === 400) {
        toast.error("Invalid credentials. Please try again.");
      } else {
        toast.error("An error occurred during login. Please try again later.");
      }
    }
  };
  return (
    <Container>
      <Toaster position="top-right" />
      <Form className="w-50 mt-4" onSubmit={handleSubmit}>
        <Row>
          <Form.Label>UserName : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            name="Username"
            onChange={handleFieldChange}
          ></Form.Control>
        </Row>
        <br></br>

        <Row>
          <Form.Label>Password : </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="Password"
            onChange={handleFieldChange}
          ></Form.Control>
        </Row>
        <br></br>

        <Row>
          <Button type="submit" className="btn btn-primary">
            Login
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
