import React, { Component } from 'react';
import NavbarKomponen from '../component/NavbarKomponen'; 
import NavbarProduk from '../component/NavbarProduk';
import axios from 'axios'; 
import { API_URL } from '../utils/constant'; 
import { Container, Row } from 'react-bootstrap'; 
import '../style/Produk.css'; 
import Produks from '../component/Produks'; 

export default class Produk extends Component {
  // State awal menyimpan kategori, kategori terpilih, dan daftar produk
  state = {
    categories: [],
    selectedCategory: '',
    products: [],
  };

  // Lifecycle method dijalankan saat komponen pertama kali dipasang
  componentDidMount() {
    // Ambil data kategori dari API
    axios.get(API_URL + 'categories').then((res) => {
      // Tambahkan opsi "Semua Produk" di awal daftar kategori
      const categories = [{ id: 0, nama: 'Semua Produk' }, ...res.data];
      this.setState(
        {
          categories,
          selectedCategory: categories[0]?.nama || '', // Set kategori awal
        },
        () => {
          this.fetchProducts(this.state.selectedCategory); // Ambil produk sesuai kategori awal
        }
      );
    });
  }

  // Fungsi ambil produk berdasarkan kategori
  fetchProducts = (category) => {
    if (category === 'Semua Produk') {
      // Jika semua produk, ambil seluruh produk
      axios.get(API_URL + 'products').then((res) => {
        this.setState({ products: res.data });
      });
    } else {
      // Jika kategori tertentu, filter produk berdasarkan kategori
      axios.get(API_URL + 'products?category.nama=' + category).then((res) => {
        this.setState({ products: res.data });
      });
    }
  };

  // Fungsi ketika kategori dipilih di NavbarProduk
  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category }, () => {
      this.fetchProducts(category); // Ambil produk sesuai kategori baru
    });
  };

  render() {
    const { categories, selectedCategory, products } = this.state;

    return (
      <>
        <NavbarKomponen /> {/* Navbar utama */}
        <NavbarProduk 
          categories={categories} 
          onCategorySelect={this.handleCategorySelect} 
          selectedCategory={selectedCategory} 
        />
        <Container className="container-produk">
          <Row className="justify-content-center  gx-4 gy-4">
            {/* Tampilkan daftar produk menggunakan komponen Produks */}
            {products.map((produk) => (
              <Produks key={produk.id} produk={produk} />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}
