import tarianData from '../../../../DATA/galleryjson/serimpi.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Serimpi di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Serimpi ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Serimpi: Keanggunan dan Keindahan dari Keraton Jawa</h2>
          <p>
            Tari Serimpi adalah salah satu tarian klasik yang berasal dari keraton Jawa. Tarian ini dikenal dengan gerakan yang anggun dan lambat, mencerminkan kehalusan budaya Jawa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Serimpi berasal dari keraton Yogyakarta dan Surakarta. Tarian ini diciptakan sebagai bagian dari ritual keraton dan sering dipentaskan dalam acara-acara penting keraton. Tari Serimpi mencerminkan nilai-nilai luhur dan keindahan budaya Jawa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Anggun dan Lambat</h3>
          <p>
            Tari Serimpi dikenal dengan gerakan yang anggun dan lambat, mencerminkan kelembutan dan kehalusan. Setiap gerakan tangan, kaki, dan tubuh dilakukan dengan penuh keanggunan dan kehati-hatian, menciptakan harmoni yang memikat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tari Serimpi tidak hanya sebagai bentuk seni pertunjukan, tetapi juga memiliki makna budaya dan spiritual yang mendalam. Tarian ini sering digunakan dalam berbagai upacara adat dan ritual keraton, sebagai simbol kesucian dan kehormatan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Upaya pemeliharaan dan pelestarian Tari Serimpi sangat penting untuk memastikan keberlangsungan warisan budaya ini. Banyak sekolah tari dan komunitas seni yang aktif mengajarkan tarian ini kepada generasi muda, agar mereka dapat mengenal dan mencintai budaya mereka sendiri.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Serimpi adalah simbol keanggunan, kehalusan, dan kekayaan budaya dari keraton Jawa. Dengan gerakan yang anggun, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Jawa, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Serimpi akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Jawa yang begitu berharga.
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
