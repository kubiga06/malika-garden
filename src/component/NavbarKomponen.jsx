import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/NavbarKomponen.css';
import { Link } from 'react-router-dom';

function NavbarKomponen() {
  return (
    <Navbar className="shadow" style={{ backgroundColor: '#076653' }} variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/beranda">
          <img alt="Logo Malika Garden" src="/Logo Malika Garden/MGNavbar.png" width="220" height="55" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="item-nav ms-auto text-uppercase fw-bold">
            <Nav.Link className="beranda-item" as={Link} to="/beranda">
              Beranda
            </Nav.Link>
            <Nav.Link className="tentang-kami-item" as={Link} to="/tentangkami">
              Tentang Kami
            </Nav.Link>
            <Nav.Link className="produk-item" as={Link} to="/produk">
              Produk
            </Nav.Link>
            <Nav.Link className="kontak-item" as={Link} to="/kontak">
              Kontak
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarKomponen;
