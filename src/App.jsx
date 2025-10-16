import { useState } from 'react';
import Beranda from './pages/Beranda';
import Kontak from './pages/Kontak';
import Produk from './pages/Produk';
import TentangKami from './pages/TentangKami';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom';
import DetailProduk from './component/DetailProduk';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/tentangKami" element={<TentangKami />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/detail-produk/:id" element={<DetailProduk />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
