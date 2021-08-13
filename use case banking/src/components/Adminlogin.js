import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

export default function Adminlogin() {
    return (
        <div className="pepe">
<div >
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Welcome Admin!!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="Newuseradmin">Create user</Nav.Link>
      <NavDropdown title="Fund Transfer" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Transfer/add">Transfer within the bank</NavDropdown.Item>
        <NavDropdown.Item href="">Transfer across the bank </NavDropdown.Item>
      </NavDropdown> 
      <Nav.Link href="Card details">Card details</Nav.Link>
      <Nav.Link href="Transcations">Transactions</Nav.Link>
      <Nav.Link href="Userdetails/manage">Userdetails</Nav.Link>
     
    </Nav>
    </Container>
  </Navbar>
  </div>
  <div className="a10">
    
  </div>

            
        </div>
    )
}
