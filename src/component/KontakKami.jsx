import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import '../style/KontakKami.css';

function KontakKami() {
  return (
    <Container fluid className="kontak-container">
      <h3 className="kontak-title text-center" style={{ color: '#076653', fontWeight: 'bold', fontSize: '30px' }}>
        Kontak Kami
      </h3>
      <p className="title-kontak-kami text-center mb-5" style={{ color: '#076653' }}>
        Jika tertarik dengan produk kami atau sekadar bertanya, silakan hubungi kami melalui media sosial atau kontak WA kami di bawah.
      </p>
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <div className="map-container">
            <iframe
              title="Lokasi Kami"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3570231320136!2d133.82735007448062!3d-0.871275835312333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d54015a6fe275bf%3A0x5b1958aeb2c83555!2sMalika%20Garden!5e0!3m2!1sen!2sid!4v1759881026571!5m2!1sen!2sid"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Col md={5}>
          <Card className="kontak-card p-4" style={{ backgroundColor: '#076653', color: 'white' }}>
            <h5 className="mb-3">Melalui:</h5>
            <p>
              <strong>Alamat:</strong> Sp IV, Aimasi/Sp III Aimasi, Distrik Prafi, Kabupaten Manokwari, Papua Barat. 98356
            </p>
            <p>
              <strong>Telepon / WhatsApp:</strong>{' '}
              <a href="https://wa.me/6282129356843" target="_blank" rel="noopener noreferrer">
                +62 821-2935-6843
              </a>
            </p>
            <p>
              <strong>Facebook 1:</strong>{' '}
              <a href="https://www.facebook.com/ugiesuhaa?rdid=N2blmlRUN3R8XAL9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16RwZBT3i3%2F#3/" target="_blank" rel="noopener noreferrer">
                facebook.com/Ugie Su'ha
              </a>
            </p>
            <p>
              <strong>Facebook 2:</strong>{' '}
              <a href="https://www.facebook.com/anik.nuryati?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                facebook.com/anik.nuryati
              </a>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default KontakKami;
