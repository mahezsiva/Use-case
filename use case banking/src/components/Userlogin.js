import React from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'

export default function Userlogin() {
    return (
        <div>
<div >
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Welcome User!!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="Balance">Balance</Nav.Link>
       <NavDropdown title="Fund Transfer" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Transfer/add">Transfer within the bank</NavDropdown.Item>
        <NavDropdown.Item href="Transferacross">Transfer across the bank </NavDropdown.Item>
      </NavDropdown> 
      <Nav.Link href="Report">Report</Nav.Link>
      <Nav.Link href="KYC">KYC</Nav.Link>
      <Nav.Link href="Close Account">Close Account</Nav.Link>

      <Nav.Link href="Logout">Logout</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  <div className="a10">
    
  </div>

            
        </div>
    )
}
