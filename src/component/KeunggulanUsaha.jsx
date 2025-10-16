import React from 'react';
import '../style/KeunggulanUsaha.css';
import { Container, Row, Col } from 'react-bootstrap';

function KeunggulanUsaha() {
  return (
    <Container fluid className="content-body text-center mb-3 mb-md-5" style={{ color: 'white', textAlign: 'center' }}>
      <Row className="content-content">
        <Col md={3}>
          <img src="/ImgKeunggulanUsaha/ProdukBerkualitas.png" alt="ProdukBerkualitas" width="100" height="100" />
          <h3>
            <strong>Produk Berkualitas</strong>
          </h3>
          <p>Tanaman segar langsung dari kebun pilihan, tumbuh sehat dan siap memperindah ruangan atau taman Anda.</p>
        </Col>
        <Col md={3}>
          <img src="/ImgKeunggulanUsaha/PengirimanCepat.png" alt="Pengiriman Cepat" width="100" height="100" />
          <h3>
            <strong>Pengiriman Cepat</strong>
          </h3>
          <p>Pengemasan aman dan pengiriman cepat untuk memastikan tanaman sampai dalam kondisi terbaik.</p>
        </Col>
        <Col md={3}>
          <img src="/ImgKeunggulanUsaha/Bergaransi.png" alt="Bergaransi" width="100" height="100" />
          <h3>
            <strong>Bergaransi</strong>
          </h3>
          <p>Garansi kualitas dan kepuasan pelanggan. Jika tanaman rusak saat pengiriman, kami siap ganti baru.</p>
        </Col>
        <Col md={3}>
          <img src="/ImgKeunggulanUsaha/Gratis Konsultasi.png" alt="Gratis Konsultasi" width="100" height="100" />
          <h3>
            <strong>Gratis Konsultasi</strong>
          </h3>
          <p>Bingung cara merawat tanaman? kami siap membantu Anda lewat WhatsApp atau media sosial–tanpa biaya!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default KeunggulanUsaha;
