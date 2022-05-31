import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const HNavbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <div className="nav flex justify-between w-full px-5">
          <h1 href="#home">LOGO</h1>
          <p href="#home">BN / EN</p>
        </div>
      </Navbar>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="px-5 w-4/5 text-[#644F9C]">
            <Nav.Link href="#home" className="item">
              HOME
            </Nav.Link>
            <Nav.Link href="#link" className="item">
              ADVERTISERS
            </Nav.Link>
            <Nav.Link href="#link" className="item">
              PUBLISHERS
            </Nav.Link>
            <Nav.Link href="#link" className="item">
              INFLUENCERS
            </Nav.Link>
            <Nav.Link href="#link" className="item">
              AD FORMATS
            </Nav.Link>
            <Nav.Link href="#link" className="item">
              BLOG
            </Nav.Link>
            <Nav.Link href="#link" className="item">
              CONTACT US
            </Nav.Link>
          </Nav>
          <div className="loginBtn flex justify-around items-center">
            <span>LOGIN</span>
            <span className="signBtn">SIGN UP</span>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HNavbar;
