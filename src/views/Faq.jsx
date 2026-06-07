import React from 'react';
const Header = React.lazy(() => import('../shared/Header'));
const Faq = () => {
  return (
    <>
      <Header />
      <div className="justify-around md:w-6/12 flex items-start flex-wrap m-20">
        <h2 className="text-4xl font-extrabold w-full">FAQs</h2>
        <div className="ml-auto mt-5 w-auto">
          <div>
            <h3 className="font-extrabold">
              1. <span className="text-2xl">Apa itu KabarBensin?</span>
            </h3>
            <p>
              KabarBensin (https://kabarbensin.netlify.app/) merupakan situs web
              yang menyediakan tabel perbandingan harga dari semua SPBU yang ada
              di Indonesia; baik itu swatsa atau pun negeri. Selain itu, juga
              tersedia 10 berita terkini terkait BBM yang diberdayakan oleh CNN
              News.
            </p>
            <hr class="w-32 h-1 bg-gray-700 rounded border-0 my-3"></hr>
          </div>
          <div>
            <h3 className="font-extrabold">
              2.{' '}
              <span className="text-2xl">
                Bagaimana cara menggunakan KabarBensin?
              </span>
            </h3>
            <p>
              Anda dapat melihat tabel perbandingan harga, serta kalkulasi harga
              bensin melalui menu Kalkulator Harga dengan mengisi kolom yang
              tersedia.
            </p>
            <hr class="w-32 h-1 bg-gray-700 rounded border-0 my-3"></hr>
          </div>
          <div>
            <h3 className="font-extrabold">
              3. <span className="text-2xl">Apakah data saya tersimpan?</span>
            </h3>
            <p>
              Tidak. Karena semua proses dilakukan di sisi pengguna
              (user/client-side).
            </p>
            <hr class="w-32 h-1 bg-gray-700 rounded border-0 my-3"></hr>
          </div>
          <div>
            <h3 className="font-extrabold">
              4. <span className="text-2xl">Dari mana harga didapat?</span>
            </h3>
            <p>
              Data tersebut didapatkan dari situs web resmi untuk Shell dan
              Pertamina sedangkan BP dan Vivo didapatkan dari berita resmi yang beredar.
            </p>
            <hr class="w-32 h-1 bg-gray-700 rounded border-0 my-3"></hr>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
