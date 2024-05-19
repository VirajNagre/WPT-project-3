import React from 'react'
import {Button, Container, Form, FormControl, FormLabel, Row} from "react-bootstrap";

export const Login = () => {
    return (
        <Container >
            <Form className='w-50 mt-4' >
                <Row>
                    <Form.Label>UserName : </Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" name="uname"></Form.Control>
                </Row>
                <br></br>

                <Row>
                    <Form.Label>Password : </Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password"></Form.Control>
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