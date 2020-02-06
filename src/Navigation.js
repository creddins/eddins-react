import React from 'react';
import './App.css';
import { Nav, Navbar, NavItem } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="logo.png"
          width="25"
          height="25"
          className="d-inline-block align-top"
        />{' '}Speed Stock</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link href="/">Dashboard</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/NewInventory">New Inventory</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
