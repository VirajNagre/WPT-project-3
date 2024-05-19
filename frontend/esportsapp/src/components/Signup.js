import React from 'react'
import { Col, Container, Form, Row,Button } from 'react-bootstrap';

export const Signup = () => {
    return (
        <Container>
            <h3>Personal Details</h3>
            <Form>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter first name" name="fname" />
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter last name" name="lname" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="text" placeholder="Enter birthdate" name="bdate" />
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>In GameName</Form.Label>
                            <Form.Control type="text" placeholder="Enter game name" name="gamename" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder="Enter country" name="country" />
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" placeholder="Enter state" name="state" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="Enter city" name="city" />
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile number" name="mnumber" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4} >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name="uname" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col lgg={4}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" name="pass" />
                    </Col>
                    <Col lgg={4}>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter confirm password" name="cpass" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Button type="submit" className="btn btn-primary">Register</Button>
                </Row>

            </Form>
        </Container>
    )
}

export default Signup;