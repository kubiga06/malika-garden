import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/KategoriProduk.css';
import { Link } from 'react-router-dom';

function KategoriProduk() {
  return (
    <Container fluid className="container-kategori-produk text-center py-5">
      <h3 className="title-kategori-produk mb-5">Kategori Produk</h3>
      <Row className="justify-content-center">
        <Col md="auto" className="mb-4">
          <Card className="card-kategori-produk">
            <div className="img-kategori-produk">
              <Card.Img variant="top" src="/Kategori Produk/Tanaman Hias.jpg" />
            </div>
            <Card.Body className="isi-kategori-produk">
              <Card.Title>Tanaman Hias</Card.Title>
              <Button as={Link} to="/produk" variant="dark" className="tombol-kategori-produk">
                Lihat Produk
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto" className="mb-4">
          <Card className="card-kategori-produk">
            <div className="img-kategori-produk">
              <Card.Img variant="top" src="/Kategori Produk/Bibit Buah.jpg" />
            </div>
            <Card.Body className="isi-kategori-produk">
              <Card.Title>Bibit Buah</Card.Title>
              <Button as={Link} to="/produk" variant="dark" className="tombol-kategori-produk">
                Lihat Produk
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default KategoriProduk;
