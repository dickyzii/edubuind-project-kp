// src/views/pages/tarian.js
import tarianData from '../../../../DATA/galleryjson/saman.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Saman di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Saman ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Saman: Keindahan Gerakan dan Makna Budaya dari Nanggroe Aceh Darussalam</h2>
          <p>
            Tari Saman adalah salah satu warisan budaya Indonesia yang kaya akan keindahan gerakan dan makna mendalam di balik setiap langkahnya. Berakar di tanah Nanggroe Aceh Darussalam, tarian ini tidak hanya menghibur tetapi juga mengajarkan nilai-nilai tradisional dan spiritual kepada masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Saman berasal dari masyarakat suku Gayo di Aceh, diperkirakan berasal dari abad ke-12 Masehi. Awalnya, tarian ini digunakan sebagai sarana dakwah Islam yang disebarkan oleh ulama-ulama Aceh. Gerakannya yang dinamis, disertai dengan irama dan tepukan tangan yang khas, menjadi daya tarik utama dalam pertunjukan ini. Tari Saman tidak hanya sebagai bentuk seni, tetapi juga memuat nilai-nilai moral dan keagamaan yang kuat dalam setiap gerakannya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Dinamis dan Simbolis</h3>
          <p>
            Tari Saman dikenal dengan gerakan tangan yang cepat dan serempak, yang menuntut koordinasi yang sangat baik antara para penari. Gerakan ini tidak hanya memukau secara visual, tetapi juga mengandung makna simbolis yang dalam. Beberapa gerakan mencerminkan kehidupan sehari-hari, sementara yang lain menggambarkan kisah-kisah epik atau nilai-nilai kearifan lokal. Setiap gerakan diikuti dengan vokal yang mengiringi, menciptakan harmoni yang memukau di antara penari dan penonton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tari Saman tidak hanya sebagai pertunjukan seni semata, tetapi juga memiliki makna yang dalam dalam konteks budaya dan spiritual Aceh. Di banyak kesempatan, tarian ini menjadi bagian integral dari acara adat seperti pernikahan, upacara keagamaan, atau festival budaya. Melalui gerakan dan vokal yang kuat, Saman tidak hanya merayakan keberagaman budaya Aceh tetapi juga memperkuat identitas masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kehadiran dalam Kehidupan Masyarakat Aceh</h3>
          <p>
            Kehadiran Tari Saman dalam kehidupan sehari-hari masyarakat Aceh menunjukkan betapa pentingnya warisan budaya ini dalam mempertahankan identitas lokal. Generasi muda diajak untuk belajar dan menghargai tarian ini melalui pendidikan formal dan informal, serta melalui pelatihan komunitas. Hal ini bertujuan untuk memastikan bahwa nilai-nilai tradisional Saman terus hidup dan berkembang di tengah arus globalisasi dan modernisasi.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Upaya pemeliharaan dan pengajaran Tari Saman menjadi sangat penting untuk melestarikan warisan budaya yang berharga ini. Banyak sekolah dan lembaga seni di Aceh aktif mengajarkan tarian ini kepada generasi muda, dengan harapan mereka akan menjadi pelanjut dalam melestarikan dan mengembangkan seni budaya Aceh. Pendidikan formal juga mengintegrasikan Tari Saman sebagai bagian dari kurikulum budaya, memastikan bahwa pengetahuan akan warisan ini tidak punah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Saman adalah simbol keindahan, kekuatan, dan kekayaan budaya dari Nanggroe Aceh Darussalam. Dengan gerakan yang dinamis, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Aceh, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Saman akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Aceh yang begitu berharga.
          </p>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Hapus event listener klik pada link gambar
    const imageLinks = document.querySelectorAll('.image-link');
    imageLinks.forEach((link) => {
      // eslint-disable-next-line no-param-reassign
      link.style.cursor = 'default'; // Ubah cursor menjadi default untuk menandakan tidak dapat diklik
    });
  },
};

export default TarianPage;
