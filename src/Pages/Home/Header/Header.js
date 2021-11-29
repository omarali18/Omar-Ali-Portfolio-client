import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap"
import "./Header.css"

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">Omar Ali</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#pricing"> <a href="https://drive.google.com/file/d/18ucOHrsrx-eWiqWq6fcDdlMNLNN9rNMR/view?usp=sharing" target="blank"><button className="resume-btn">Download Resume</button></a> </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#project">Project</Nav.Link>
                            <Nav.Link href="#contact">Contact me</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;