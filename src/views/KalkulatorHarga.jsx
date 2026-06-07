import React, { useState } from 'react';
const Header = React.lazy(() => import('../shared/Header'));
const KalkulasiHarga = React.lazy(() => import('./kalkulator/KalkulasiHarga'));
const KalkulasiLiter = React.lazy(() => import('./kalkulator/KalkulasiLiter'));

const KalkulatorHarga = () => {
  const [tipeKalkulator, setTipeKalkulator] = useState('');
  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex md:justify-center md:items-start m-10">
        <div className="my-5 md:my-0 md:mx-5 p-5 text-3xl font-semibold text-left text-red-500 bg-slate-200 rounded-lg md:w-2/5">
          CATATAN
          <ul className="mt-4 space-y-1 max-w list-disc list-inside text-sm font-normal">
            <li>
              SPBU Swasta Vivo, British Petroleum, dan Shell hanya ada di
              beberapa wilayah di Indonesia.
            </li>
          </ul>
          <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
            <li>
              Produk Shell pada Wilayah Jawa hanya tersedia pada Jawa
              Barat/Timur.
            </li>
          </ul>
          <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
            <li>
              Produk Shell pada Wilayah Sumatra hanya tersedia pada Sumatra
              Utara.
            </li>
          </ul>
          <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
            <li>
              Terdapat perbedaan 350 perak di Aceh, 700 perak di Riau dan
              Bengkulu untuk produk Pertamax, Pertamax Turbo, DexLite, dan Dex.
            </li>
          </ul>
          <ul className="space-y-1 max-w list-disc list-inside text-sm font-normal">
            <li>
              Produk Pertamax Turbo pada Wilayah Papua tidak tersedia di Papua
              Barat, produk Pertamina Dex hanya tersedia di Papua Barat.
            </li>
          </ul>
          <ul className="mt-5 space-y-1 max-w list-disc list-inside text-lg font-normal">
            <li>N/A artinya bensin tidak ada/tersedia di tempat tersebut.</li>
          </ul>
        </div>
        <div className="block p-12 max-w-md w-full bg-emerald-800 rounded-lg border border-gray-200 ">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white">
              Pilih Kalkulator
            </label>
            <select
              className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              onChange={e => setTipeKalkulator(e.target.value)}
            >
              <option value="">Pilih tipe</option>
              <option value="kalkulasiHarga">Kalkulasi Harga</option>
              <option value="kalkulasiLiter">Kalkulasi Liter</option>
            </select>
          </div>
          {tipeKalkulator === 'kalkulasiHarga' && <KalkulasiHarga />}
          {tipeKalkulator === 'kalkulasiLiter' && <KalkulasiLiter />}
        </div>
      </div>
    </div>
  );
};

export default KalkulatorHarga;
