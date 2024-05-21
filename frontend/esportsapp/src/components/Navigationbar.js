import React, { useContext, useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { Nav, Navbar, NavItem,NavDropdown, Container,Button } from 'react-bootstrap';
import { getToken,getUserInfo,removeIsAdmin,removeToken, removeUserInfo } from "../Services/userServices";
import { AuthContext } from '../components/ContextAPI/authContext.js';
import { MyProfile } from "./MyProfile.js";


const Navigationbar = () => {
    const { isAuthenticated, logout,isAdmin,userInfo } = useContext(AuthContext);

    const [user,setUser] = useState('{aksjjdbk}');
    // let user = JSON.parse(userInfo)

    const navigate = useNavigate();

    const logoutHandler = (e) =>{
        e.preventDefault();
        logout();
        navigate('/');  
    }

    const createEvent = () =>{
        navigate('/event/create-new')
    }

    useEffect(() => {
        if (isAuthenticated) {
            // alert("from useeff user authed")
        }
        if(userInfo){
            console.log("navbar",userInfo);
            // let user =JSON.stringify(userInfo);
            // user = JSON.parse(user)
            setUser(userInfo);
            // console.log(usr)
        }
    }, ["",userInfo]);
    

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
            <Navbar.Brand href="/home" className="text-white"><h1>PlayConnect</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="dark"/>
            <Navbar.Collapse id="responsive-navbar-nav ">
                <Nav className="ml-auto d-flex">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    {isAuthenticated ?
                    <>
                    <h3>{userInfo.FirstName}</h3>
                    {/* <Nav.Link as={Link} to="/update">Profile{userInfo.FirstName}</Nav.Link> */}
                                <NavDropdown title={`Profile`} id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/update">Update</NavDropdown.Item>
                                    <NavDropdown.Item  as={Link} to="/home" onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    <NavDropdown.Item><Button onClick={createEvent} >Create new Event </Button></NavDropdown.Item>
                                </NavDropdown>
                    </>
                    :
                        <>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        </>
                    }
                    {isAdmin &&
                    <Nav.Link as={Link} to="/admin">Admin Panel</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
                    </Container>
        </Navbar>
    );
};

export default Navigationbar;





