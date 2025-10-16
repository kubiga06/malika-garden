import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiOutlineCopyright } from 'react-icons/ai';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container fluid className="container-footer">
        <Row className="align-items-center">
          {/* Logo */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <img src="/Logo Malika Garden/MGfooter.png" alt="Logo Malika Garden" className="footer-logo" />
          </Col>

          {/* Kontak */}
          <Col md={4} className=" alamat-footer text-white">
            <h5>Hubungi Kami:</h5>
            <p>
              <strong>Alamat:</strong> Sp IV, Aimasi/Sp III Aimasi, Distrik Prafi, Kabupaten Manokwari, Papua Barat. 98356
            </p>
            <div className="media-sosial">
              <a className="facebook" href="https://www.facebook.com/share/16RwZBT3i3/">
                <FaFacebookSquare />
              </a>
              <a className="whatsapp" href="https://wa.me/6282129356843">
                <IoLogoWhatsapp />
              </a>
            </div>
          </Col>

          {/* Developer */}
          <Col md={4} className="text-center navigasi-footer">
            <p>Navigasi</p>
            <a href="beranda">Beranda</a> <br />
            <a href="tentangkami">Tentang Kami</a> <br />
            <a href="produk">Produk</a> <br />
            <a href="kontak">Kontak</a> <br />
            <br />
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col md={12} className="text-center text-white developer">
            <p>
              Developer by:
              <a href="https://www.instagram.com/6mirun_thamrun?igsh=dzkwOWw2aDJmb3Ay">Hamirun,</a>
              <a href="https://www.instagram.com/alexanderkwa_?igsh=MWg1dGw2a2JuOXpmdA==">Alexander,</a>
              <a href="https://www.instagram.com/panndiiii_007?igsh=cDgyZnYydHI0d3Iw">Sopandi,</a>
              <a href="https://www.instagram.com/ellen_pow__?igsh=MXh0ZGZsZnl2d3ZwZQ==">Ellen,</a>
              <a href="https://www.instagram.com/annameilan_?igsh=a2p4Z3RzaGVxdHFq">Anna</a>
            <br /><AiOutlineCopyright /> 2025 Malika Garden. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
