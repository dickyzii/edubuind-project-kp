import tarianData from '../../../../DATA/galleryjson/jaipong.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
     <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Jaipong di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Jaipong ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Jaipong: Keindahan Gerakan dan Makna Budaya dari Jawa Barat</h2>
          <p>
            Tari Jaipong adalah salah satu tarian tradisional Indonesia yang berasal dari Jawa Barat. Tarian ini terkenal dengan gerakan yang enerjik dan penuh semangat, yang memadukan elemen-elemen seni bela diri, pencak silat, dan tarian tradisional Sunda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Jaipong pertama kali diciptakan oleh Gugum Gumbira pada tahun 1960-an. Tarian ini merupakan hasil dari kreativitas dalam menggabungkan berbagai elemen tarian tradisional dan modern, serta musik khas Sunda seperti degung dan ketuk tilu.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Dinamis dan Energik</h3>
          <p>
            Tari Jaipong dikenal dengan gerakan yang dinamis, cepat, dan enerjik. Gerakan ini melibatkan banyak elemen gerakan tangan, kaki, dan tubuh yang lincah. Kombinasi gerakan yang cepat dan ritmis membuat tarian ini sangat menarik untuk ditonton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Sosial</h3>
          <p>
            Tari Jaipong tidak hanya sebagai bentuk hiburan, tetapi juga memiliki makna budaya dan sosial yang dalam. Tarian ini sering digunakan dalam berbagai acara adat, pesta rakyat, dan upacara pernikahan, sebagai simbol kebersamaan dan kegembiraan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Upaya pemeliharaan dan pelestarian Tari Jaipong sangat penting untuk memastikan keberlangsungan warisan budaya ini. Banyak sekolah tari dan komunitas seni yang aktif mengajarkan tarian ini kepada generasi muda, agar mereka dapat mengenal dan mencintai budaya mereka sendiri.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Jaipong adalah simbol keindahan, kekuatan, dan kekayaan budaya dari Jawa Barat. Dengan gerakan yang dinamis, makna yang mendalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Sunda, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Jaipong akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Sunda yang begitu berharga.
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
