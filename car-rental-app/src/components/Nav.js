import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import CarLogo from '../assets/img/car-logo.svg';
import Signup from './signup.js';
import Login from './SignIn.js';


export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className='logo-container'>
          <img className='car-logo' src={CarLogo}></img>
          <Navbar.Brand href="#home"><span className='logo-dark'>CAR</span> Rental</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/vehiclemodels">Vehicle Models</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className='user-login-container'>
            <Login />
            <Signup />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;