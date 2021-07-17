
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Carousel } from 'react-bootstrap'

import image1 from './../assests/image1.jpg';
import image2 from './../assests/image2.jpg';
import image3 from './../assests/image3.jpg';
import Login from './Login';


export default function Navbarex() {
  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Bruce Bank Of Gotham</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">


            </Nav>
            <Nav>


              <Nav.Link href="Login">Login</Nav.Link>
              <Nav.Link href="#newcustomer">New Customer</Nav.Link>
              <Nav.Link href="#Help">Help</Nav.Link>
              <Nav.Link href="#contactus">contact us</Nav.Link>
              <Nav.Link href="Admin">Admin</Nav.Link>
              {/* <NavDropdown title="" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
              <Nav.Link eventKey={2} href="#memes">

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-110"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="img1">
                <h3>Security</h3>
                <p >Our Bank Provides High End Security</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <div className="img2">
                <h3 >Savings</h3>
                <p >Save Money with us and keep your money safe</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={image3}
              alt="Security"
            />
            <Carousel.Caption>
              <div className="img3">
                <h3>Money Withdrawal</h3>
                <p>Money Withdrawal can be done across the globe</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container1">


      </div>
    

    </div>
  )
}
