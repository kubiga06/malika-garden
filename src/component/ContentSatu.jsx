import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../style/TentangKami.css';

function ContentSatu() {
  return (
    <>
      {/* Hero Section */}
      <Card className="text-white hero-section border-0">
        <Card.Img src="Img Cover/cover-tentang-kami.jpg" alt="Tentang Malika Garden" className="hero-image rounded-0" />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-center text-center overlay-dark">
          <div>
            <h1 className="fw-bold display-4">Tentang Malika Garden</h1>
          </div>
        </Card.ImgOverlay>
      </Card>

      {/* Bagian Konten */}
      <section className="tentang-content">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="deskirpsi-tentang-kami mb-4">
              <p>
                <strong>Visi</strong> menjadikan bisnis unggul dalam menyediakan produk berkualitas dan berkontribusi terhadap lingkungan serta masyarakat. <strong>Misinya</strong> mewujudkan visi tersebut melalui strategi seperti meyediakan tanaman hias &
                aneka bibit buah unggul serta berkualitas. <br />
              </p>
            </Col>
            <Col md={8} className="deskirpsi-tentang-kami mb-4">
              <p>
                <strong>Latar belakang usaha</strong> Berawalnya dari hobi, kami kebetulan memiliki hobi yang sama yaitu suka tanaman hias, awalnya suka koleksi beberapa jenis, kemudian iseng diupload di facebook, ada yang tertarik mau
                beli, akhirnya di jual. Seiring berjalan waktu ada permintaan menyediakan bibit buah. Akhirnya kami menyediakan beberapa jenis bibit buah juga.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ContentSatu;
