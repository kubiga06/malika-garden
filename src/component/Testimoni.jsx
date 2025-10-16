import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../style/Testimoni.css';

function Testimoni() {
  return (
    <Container fluid className="container-testimoni">
      <h3>Testimoni</h3>
      <p>Beberapa foto pengemasan bibit buah & tanaman hias untuk diantarkan ke pelanggan</p>
      <Row className="justify-content-center">
        <Col md="auto" className="mb-4">
          <Card className="card-testimoni">
            <div className="img-testimoni">
              <Card.Img variant="top" src="/Img Testimoni/imgTestimoniDua.jpg" />
            </div>
          </Card>
        </Col>
        <Col md="auto" className="mb-4">
          <Card className="card-testimoni">
            <div className="img-testimoni">
              <Card.Img variant="top" src="/Img Testimoni/imgTestimoniTiga.jpg" />
            </div>
          </Card>
        </Col>
        <Col md="auto" className="mb-4">
          <Card className="card-testimoni">
            <div className="img-testimoni">
              <Card.Img variant="top" src="/Img Testimoni/imgTestimoniEmpat.jpg" />
            </div>
          </Card>
        </Col>
        <Col md="auto" className="mb-4">
          <Card className="card-testimoni">
            <div className="img-testimoni">
              <Card.Img variant="top" src="/Img Testimoni/imgTestimoniLima.jpg" />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Testimoni;
