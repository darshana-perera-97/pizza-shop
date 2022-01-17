import React from "react";
import { Navbar,Container,Nav } from "react-bootstrap";
import logo from './logo.png';

export default function Topbar() {
  return (
    <div>
      <>
        <Navbar bg="green" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} height={30} style={{margin:"-10px"}}/>
            </Navbar.Brand>
            <Nav className="me-auto" style={{fontSize:"20px",margin:"-10px 10px",marginLeft:"50px"}}>
              <Nav.Link href="#home" >Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}
