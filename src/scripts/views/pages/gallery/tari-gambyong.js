import tarianData from '../../../../DATA/galleryjson/gambyong.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Gambyong di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Gambyong ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Gambyong: Keindahan Gerakan dan Makna Budaya dari Jawa Tengah</h2>
          <p>
            Tari Gambyong adalah salah satu tarian klasik Indonesia yang berasal dari Jawa Tengah. Tarian ini terkenal dengan gerakan yang anggun dan lembut, serta merupakan bagian integral dari seni pertunjukan Jawa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Gambyong awalnya merupakan tarian rakyat yang kemudian diadaptasi menjadi tarian keraton. Tarian ini memiliki akar dalam tradisi seni pertunjukan Jawa dan sering kali digunakan dalam upacara adat serta acara resmi keraton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Anggun dan Lembut</h3>
          <p>
            Tari Gambyong dikenal dengan gerakan yang anggun, lembut, dan penuh kehalusan. Setiap gerakan tangan, kaki, dan tubuh dilakukan dengan penuh perasaan dan keselarasan, menciptakan harmoni yang menenangkan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tari Gambyong tidak hanya sebagai bentuk seni pertunjukan, tetapi juga mengandung makna budaya dan spiritual yang mendalam. Tarian ini sering digunakan dalam berbagai upacara adat dan ritual keagamaan, sebagai simbol kesucian dan penghormatan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Upaya pemeliharaan dan pelestarian Tari Gambyong sangat penting untuk memastikan keberlangsungan warisan budaya ini. Banyak sekolah tari dan komunitas seni yang aktif mengajarkan tarian ini kepada generasi muda, agar mereka dapat mengenal dan mencintai budaya mereka sendiri.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Gambyong adalah simbol keindahan, kelembutan, dan kekayaan budaya dari Jawa Tengah. Dengan gerakan yang anggun, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Jawa, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Gambyong akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Jawa yang begitu berharga.
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
