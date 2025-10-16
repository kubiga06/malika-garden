import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import { API_URL } from '../utils/constant';

// Membuat komponen ListKategori
export default class ListKategori extends Component {
  state = {
    categories: [], // Menyimpan data kategori di dalam state
  };

  // Lifecycle method yang dijalankan setelah komponen pertama kali dimuat
  componentDidMount() {
    axios
      .get(API_URL + 'categories') // Mengambil data kategori dari API (misalnya http://localhost:3000/categories)
      .then((res) => this.setState({ categories: res.data })) // Jika berhasil, simpan hasil data ke state
      .catch((err) => console.error('Gagal memuat kategori:', err)); // Jika gagal, tampilkan pesan error di console
  }

  render() {
    const { categories } = this.state; // Mengambil data kategori dari state
    const { changeCategory, categoriyangdipilih } = this.props; // Mengambil fungsi dan data dari komponen induk (props)

    return (
      <div>
        {/* Menampilkan daftar kategori */}
        <ListGroup>
          {categories.map(
            (
              category // Melakukan perulangan untuk setiap kategori
            ) => (
              <ListGroup.Item
                key={category.id} // Setiap item harus punya key unik
                action // Membuat item bisa diklik
                onClick={() => changeCategory(category.nama)} // Saat diklik, panggil fungsi ganti kategori dari props
                className={
                  categoriyangdipilih === category.nama
                    ? 'bg-success text-white' // Jika kategori ini dipilih, beri warna hijau dan teks putih
                    : ''
                }
                style={{ cursor: 'pointer' }} // Ubah kursor jadi tangan saat diarahkan ke item
              >
                {category.nama} {/* Tampilkan nama kategori */}
              </ListGroup.Item>
            )
          )}
        </ListGroup>
      </div>
    );
  }
}
