import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import '../style/NavbarProduk.css';

function NavbarProduk({ categories, onCategorySelect, selectedCategory }) {
  return (
    <div className="cover-navbar-produk">
      <Navbar className="navbar-produk">
        <Container className="container-nav-produk">
          <Navbar.Brand className="title-nav-produk">Daftar Produk</Navbar.Brand>
          <Nav className="nav-produk ms-auto" style={{ color: 'white' }}>
            <NavDropdown title={selectedCategory || 'Kategori'} id="basic-nav-dropdown">
              {categories.map((category) => (
                <NavDropdown.Item key={category.id} onClick={() => onCategorySelect(category.nama)} active={selectedCategory === category.nama} className="nav-produk-item">
                  {category.nama}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarProduk;
