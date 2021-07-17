import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

export default function Userlogin() {
    return (
        <div>
<div >
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Welcome User!!</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="Balance">Balance</Nav.Link>
      <Nav.Link href="Fund transfer">Fund transfer</Nav.Link>
      <Nav.Link href="Card details">Card details</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
  <div className="a10">
    
  </div>

            
        </div>
    )
}
