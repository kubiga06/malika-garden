import React from 'react';

import ProdukTerlaris from '../component/ProdukTerlaris';
import KategoriProduk from '../component/KategoriProduk';
import KeunggulanUsaha from '../component/KeunggulanUsaha';
import Testimoni from '../component/Testimoni';
import Lending from '../component/Lending';
import NavbarKomponen from '../component/NavbarKomponen';

function Beranda() {
  return (
    <>
      <NavbarKomponen />
      <Lending/>
      <KeunggulanUsaha/>
      <ProdukTerlaris/>
      <KategoriProduk />
      <Testimoni />
    </>
  );
}
export default Beranda;
