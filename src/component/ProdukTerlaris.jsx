import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/ProdukTerlaris.css';

function ProdukTerlaris() {
  return (
    <Container fluid className="container-produk-terlaris text-center py-5 ">
      <h3 className="title-produk-terlaris mb-5">Produk Terlaris</h3>
      <Row className="justify-content-center">
        <Col md="auto" className="mb-4 ">
          <Card className="card-produk-terlaris">
            <div className="img-produk-terlaris">
              <Card.Img variant="top" src="/Produk Terlaris/Bibit kopi arabika.jpg" />
            </div>
            <Card.Body className="isi-produk-terlaris">
              <Card.Title>Bibit kopi arabika</Card.Title>
              <Card.Text>Rp. 30.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto" className="mb-4">
          <Card className="card-produk-terlaris">
            <div className="img-produk-terlaris">
              <Card.Img variant="top" src="/Produk Terlaris/Rainlily.jpg" />
            </div>
            <Card.Body className="isi-produk-terlaris">
              <Card.Title>Bunga Rainlily</Card.Title>
              <Card.Text>Rp. 10.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto" className="mb-4">
          <Card className="card-produk-terlaris">
            <div className="img-produk-terlaris">
              <Card.Img variant="top" src="/Produk Terlaris/Bunga-anggrek.jpg" />
            </div>
            <Card.Body className="isi-produk-terlaris">
              <Card.Title>Bunga Anggrek</Card.Title>
              <Card.Text>Rp. 50.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default ProdukTerlaris;
