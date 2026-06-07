import React, { useEffect } from 'react';
import { useState } from 'react';
import hargaJson from '../../data/harga.json';

const KalkulasiLiter = () => {
  const [wilayah, setWilayah] = useState('');
  const [tipeBensin, setTipeBensin] = useState('');
  const [dataBensin, setDataBensin] = useState([]);
  const [dataHarga, setDataHarga] = useState();
  const [hasil, setHasil] = useState();

  useEffect(() => {
    const filteredWilayah = hargaJson.data.content.find(
      item => item.namaWilyah === wilayah
    );

    if (filteredWilayah) {
      for (const data in filteredWilayah) {
        setDataBensin(filteredWilayah[data]);
      }
    }

    if (
      tipeBensin === 'Pertamina BioSolar' ||
      tipeBensin === 'PertaminaDexLite' ||
      tipeBensin === 'PertaminaDex' ||
      tipeBensin === 'Shell V-Power Diesel' ||
      tipeBensin === 'Shell Diesel Extra' ||
      tipeBensin === 'BP Diesel'
    ) {
      const tempData =
        dataBensin.length !== 0 &&
        dataBensin[0]?.dataBensinDiesel.find(
          bensin => bensin.typeBensin === tipeBensin
        );
      setDataHarga(tempData);
    } else {
      const tempData =
        dataBensin.length !== 0 &&
        dataBensin[0]?.dataBensinUmum.find(
          bensin => bensin.typeBensin === tipeBensin
        );
      setDataHarga(tempData);
    }
  }, [dataBensin, hasil, tipeBensin, wilayah]);

  const handleSubmit = e => {
    e.preventDefault();
    const hargaPerLiter = e.target[2].value;
    const regexHarga = hargaPerLiter.replaceAll(/[^\w\s]|^IDR/gi, '');
    const jumlahUang = e.target[3].value;
    const regexJumlahUang = jumlahUang.replaceAll(/[^\w\s]|^IDR/gi, '');
    const result = regexJumlahUang / regexHarga;
    return setHasil(`${result.toFixed(2)}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-white">
            Pilih Wilayah
          </label>
          <select
            className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            onChange={e => setWilayah(e.target.value)}
          >
            <option value="">Pilih Wilayah</option>
            <option value="Jabodetabek">Wilayah Jabodetabek</option>
            <option value="Jawa">Wilayah Jawa</option>
            <option value="Sumatra">Wilayah Sumatra</option>
            <option value="Kalimantan">Wilayah Kalimantan</option>
            <option value="NusaTenggara">Wilayah Nusa Tenggara</option>
            <option value="Batam">Wilayah Batam</option>
            <option value="BangkaBelitung">Wilayah Bangka Belitung</option>
            <option value="Papua">Wilayah Papua</option>
            <option value="Maluku">Wilayah Maluku</option>
          </select>
        </div>
        {wilayah.length !== 0 && (
          <>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                Pilih Tipe Bensin
              </label>
              <select
                className="bg-gray-50 border w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                onChange={e => setTipeBensin(e.target.value)}
              >
                <option value="">Pilih bensin</option>
                <option value="Pertalite">
                  Pertalite - Bensin Umum - RON 90
                </option>
                <option value="Pertamax">
                  Pertamax - Bensin Umum - RON 92
                </option>
                <option value="PertamaxTurbo">
                  Pertamax Turbo - Bensin Umum - RON 98
                </option>
                {(wilayah === 'Jabodetabek' ||
                  wilayah === 'Sumatra' ||
                  wilayah === 'Jawa') && (
                  <>
                    <option value="Shell Super">
                      Shell Super - Bensin Umum - RON 92
                    </option>
                    <option value="Shell V-Power">
                      Shell V-Power - Bensin Umum - RON 95
                    </option>
                    <option value="Shell V-Power Nitro+">
                      Shell V-Power Nitro+ - Bensin Umum - RON 98
                    </option>
                  </>
                )}
                {wilayah === 'Jabodetabek' && (
                  <>
                    <option value="Revvo89">
                      Revvo 89 - Bensin Umum - RON 89
                    </option>
                    <option value="Revvo92">
                      Revvo 92 - Bensin Umum - RON 92
                    </option>
                    <option value="Revvo95">
                      Revvo 95 - Bensin Umum - RON 95
                    </option>
                    <option value="BP90">BP 90 - Bensin Umum - RON 90</option>
                    <option value="BP92">BP 92 - Bensin Umum - RON 92</option>
                    <option value="BP95">BP 95 - Bensin Umum - RON 95</option>
                  </>
                )}

                <option value="Pertamina BioSolar">
                  BioSolar - Bensin Diesel - CN 48
                </option>
                <option value="PertaminaDexLite">
                  Dex Lite - Bensin Diesel - CN 51
                </option>
                <option value="PertaminaDex">
                  Dex - Bensin Diesel - CN 53
                </option>
                {(wilayah === 'Jabodetabek' ||
                  wilayah === 'Sumatra' ||
                  wilayah === 'Jawa') && (
                  <>
                    <option value="Shell V-Power Diesel">
                      Shell V-Power Diesel - Bensin Diesel - CN 51
                    </option>
                    <option value="Shell Diesel Extra">
                      Shell V-Power Diesel - Bensin Diesel - CN 53
                    </option>
                  </>
                )}

                {wilayah === 'Jabodetabek' && (
                  <>
                    <option value="BP Diesel">
                      BP Diesel - Bensin Diesel - CN 48
                    </option>
                  </>
                )}
              </select>
            </div>
            <div className="mt-5">
              <label className="block mb-2 text-sm font-medium text-white">
                Harga bensin per 1 liter
              </label>
              <input
                type="text"
                id="disabled-input"
                aria-label="disabled input"
                className="mb-6 bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                value={dataHarga?.harga ?? ''}
                disabled
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-white">
                Masukkan jumlah uang yang dimiliki
              </label>
              <input
                type="number"
                step="any"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto md:w-full px-5 py-2.5 text-center"
            >
              Check
            </button>
            <div className="mt-5">
              <label className="block mb-2 text-sm font-medium text-white">
                Kalkulasi Liter
              </label>
              <input
                type="text"
                id="disabled-input"
                aria-label="disabled input"
                className="mb-6 bg-gray-100 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
                value={hasil ?? ''}
                disabled
              />
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default KalkulasiLiter;
