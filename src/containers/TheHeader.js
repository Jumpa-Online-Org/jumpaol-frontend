import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import './style.css'

const TheHeader = () => {
    return (
        <Navbar expand="lg" className="p-4 shadow-sm" id="navbar">
            <Container className="justify-content-center">
                <Navbar.Brand href="#home">JumpaOL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto" style={{fontSize: '16px'}}>
                        <Nav.Link href="#home" className="px-3">HOME</Nav.Link>
                        <Nav.Link href="#kampusiana" className="px-3">KAMPUSIANA</Nav.Link>
                        <NavDropdown title="GAYA" id="basic-nav-dropdown" className="px-2">
                            <NavDropdown.Item href="#action/3.1">GAYA1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">GAYA2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">GAYA3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="RESENSI" id="basic-nav-dropdown" className="px-2">
                            <NavDropdown.Item href="#action/3.1">RESENSI1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">RESENSI2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">RESENSI3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="FEATURE" id="basic-nav-dropdown" className="px-2">
                            <NavDropdown.Item href="#action/3.1">FEATURE1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FEATURE2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">FEATURE3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="KOLOM" id="basic-nav-dropdown" className="px-2">
                            <NavDropdown.Item href="#action/3.1">KOLOM1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">KOLOM2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">KOLOM3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="SASTRA" id="basic-nav-dropdown" className="px-2">
                            <NavDropdown.Item href="#action/3.1">SASTRA1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">SASTRA2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">SASTRA3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <FontAwesomeIcon icon={faSearch} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TheHeader
