// NavBar.js
import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import BtnToggl from '../BtnToggle/BtnToggl';
import LgContext from '../MyContexts/LgContext';


export default function NavBar() {
  return (
    <div className="nav-top">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Calculatric" className="nav-link font-weight-bold mx-1">
                Calculatric
              </Nav.Link>
              <Nav.Link as={Link} to="/Todo List" className="nav-link font-weight-bold mx-1">
                Todo List
              </Nav.Link>
              <Nav.Link as={Link} to="/Slider" className="nav-link font-weight-bold mx-1">
                Slider
              </Nav.Link>
              <Nav.Link as={Link} to="/Pagination" className="nav-link font-weight-bold mx-1">
                Pagination
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact" className="nav-link font-weight-bold mx-1">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/Langue" className="nav-link font-weight-bold mx-1">
                Langue
              </Nav.Link>

              <div className="exp mx-2">
                <Nav.Link className="nav-link mx-3 ">
                  <LgContext>
                    <BtnToggl />
                  </LgContext>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
