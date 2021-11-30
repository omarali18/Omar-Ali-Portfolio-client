import React from 'react';
import { Nav, Navbar, Container } from "react-bootstrap"
import { HashLink } from 'react-router-hash-link';
import "./Header.css"

const Header = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="https://drive.google.com/file/d/18ucOHrsrx-eWiqWq6fcDdlMNLNN9rNMR/view?usp=sharing" target="blank"> <button className="resume-btn">Download Resume</button> </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#project">Project</Nav.Link>
                            <Nav.Link as={HashLink} to="/blog">Blogs</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">Contact me</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

// aria-controls="responsive-navbar-nav"
// id="responsive-navbar-nav"