import React from 'react';
import { Container, Row, Col, Button, Card, Nav } from 'react-bootstrap';
import '../style/Lending.css';
import { Link } from 'react-router-dom';

function Lending() {
  return (
    <>
      <Card className="cover-img bg-dark border-0">
        {/* Gambar Background */}
        <Card.Img src="Img Cover/image.jpg" alt="Hero" className="rounded-0" style={{ height: '100vh', objectFit: 'cover' }} />
        {/* Overlay gambar */}
        <Card.ImgOverlay className="d-flex align-items-center ">
          <Container className="container-title-cover">
            <Row>
              <Col md={8} lg={6}>
                <p className="title-ecomerance text-uppercase small mb-2">E-Commerce Malika Garden</p>
                <h1 className="title-heding fw-bold display-4">
                  Hidupkan Rumahmu <br /> Dengan Sentuhan Alam
                </h1>
                <p className="title-deskripsi lead mb-4">
                  Menjual Berbagai Macam Tanaman Hias & Bibit Buah <br /> Melayani Pembelian Ecer & Grosir/Pembelian Partai. Terdapat Diskon & Bonus Setiap Pembelian.{' '}
                </p>
                <Button as={Link} to="/produk" variant="light" size="lg" className="btn-cover fw-bold px-4 py-2 rounded-pill">
                  Lihat Produk
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
  a;
}

export default Lending;
