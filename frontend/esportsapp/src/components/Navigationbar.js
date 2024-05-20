import React, { useContext } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { Nav, Navbar, NavItem,NavDropdown, Container,Button } from 'react-bootstrap';
import { getToken,removeToken, removeUserInfo } from "../Services/userServices";
import { AuthContext } from '../components/ContextAPI/authContext.js';


const Navigationbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = (e) =>{
        e.preventDefault();
        removeToken();
        removeUserInfo();
        logout();
        navigate('/');  
    }

    const createEvent = () =>{
        navigate('/event/create-new')
    }


    

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>

            <Navbar.Brand href="/home" >Esports</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto d-flex">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    {isAuthenticated ?
                    <>
                    <Nav.Link as={Link} to="/home" onClick={logoutHandler}>Logout</Nav.Link>
                    <Button onClick={createEvent} className="ml-4">Launch new </Button>
                    </>
                    :
                        <>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
                    </Container>
        </Navbar>
    );
};

export default Navigationbar;





