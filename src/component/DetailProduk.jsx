import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../utils/constant';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavbarKomponen from './NavbarKomponen';
import '../style/DetailProduk.css';
import { numberWithComas } from '../utils/utils';

function DetailProduk() {
  const { id } = useParams(); // Ambil id produk dari URL
  const navigate = useNavigate();
  const [produk, setProduk] = useState(null); // Menyimpan data produk dari API

  // Ambil detail produk saat id berubah
  useEffect(() => {
    axios
      .get(API_URL + 'products/' + id)
      .then((res) => setProduk(res.data))
      .catch((err) => console.error('Gagal memuat detail produk:', err));
  }, [id]);

  // Jika data belum diambil
  if (!produk) {
    return (
      <div>
        <NavbarKomponen />
        <Container className="mt-5 text-center">
          <h5>Memuat detail produk...</h5>
        </Container>
      </div>
    );
  }

  // Jika produk sudah dimuat
  return (
    <div>
      <NavbarKomponen />
      <Container className="container-detail-produk">
        <Row className="row-detail">
          {/* Gambar produk */}
          <Col md={6}>
            <Card className="detail-img">
              <Card.Img variant="top" src={'/images/' + produk.category.nama.toLowerCase() + '/' + produk.gambar} alt={produk.nama} />
            </Card>
          </Col>

          {/* Informasi produk */}
          <Col className="info-detail-produk" md={6}>
            <h2 className="nama-produk">{produk.nama}</h2>
            <h4 className="harga-title">Rp. {numberWithComas(produk.harga)}</h4>
            <p className="kategori-produk">Kategori: {produk.category.nama}</p>
            <p className="deskripsi-produk">{produk.deskripsi || 'Belum ada deskripsi produk.'}</p>

            {/* Tombol kembali */}
            <Button 
              variant="success"
              onClick={function () {
                navigate(-1);
              }}
            >
              Kembali
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailProduk;
