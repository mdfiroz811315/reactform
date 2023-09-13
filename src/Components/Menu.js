import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";
function LandingPage(){
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
              <Container>
                <Navbar.Brand href="/">ABC WEB</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="userRegistration">Full Validation</Nav.Link>
                  <Nav.Link href="registration">Registration</Nav.Link>
                  <Nav.Link href="contactUs">Contact Us</Nav.Link>
                </Nav>
              </Container>
          </Navbar>
            <Outlet />
        </>
    )
}
export default LandingPage;