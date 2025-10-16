import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style/Produks.css';
import { numberWithComas } from '../utils/utils';

function Produks({ produk }) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate('/detail-produk/' + produk.id);
  };

  return (
    <Col md={3} sm={6} xs={12} className="col-produk mb-4">
      <Card className="card-produk shadow-sm" onClick={handleDetail} style={{ cursor: 'pointer' }}>
        <div className="card-produk-img">
          <Card.Img variant="top" src={'/images/' + produk.category.nama.toLowerCase() + '/' + produk.gambar} />
        </div>
        <Card.Body className="card-title-produk">
          <Card.Title>{produk.nama}</Card.Title>
          <Card.Text>Rp.{numberWithComas(produk.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Produks;

// <Col md="auto" xs={6} className="col-produk mb-4 ">
//   <Card className="card-produk shadow" onClick={handleDetail} style={{ cursor: 'pointer' }}>
//     <div className="card-produk-img">
//       <Card.Img variant="top" src={'/images/' + produk.category.nama.toLowerCase() + '/' + produk.gambar} />
//     </div>
//     <Card.Body className="card-title">
//       <Card.Title>{produk.nama}</Card.Title>
//       <Card.Text>Rp.{numberWithComas(produk.harga)}</Card.Text>
//     </Card.Body>
//   </Card>
// </Col>
