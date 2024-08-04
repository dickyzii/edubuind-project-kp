import tarianData from '../../../../DATA/galleryjson/pakarena.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
     <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Pakarena di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Pakarena ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Pakarena: Pesona Gerakan Lembut dari Sulawesi Selatan</h2>
          <p>
            Tari Pakarena adalah tarian tradisional yang berasal dari Sulawesi Selatan, dikenal dengan gerakannya yang lembut dan anggun. Tarian ini merupakan salah satu warisan budaya yang kaya dari masyarakat Bugis dan Makassar, dan sering dipertunjukkan dalam berbagai acara adat dan upacara penting.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Pakarena memiliki akar budaya yang dalam dari masyarakat Bugis dan Makassar di Sulawesi Selatan. Tarian ini dipercaya berasal dari kisah mitologi dan sering dikaitkan dengan ritual keagamaan dan upacara adat. Tari Pakarena biasanya ditarikan oleh perempuan dengan gerakan yang penuh kelembutan dan keharmonisan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Pakarena ditandai dengan gerakan yang lambat dan lemah gemulai, mencerminkan keanggunan dan kelembutan. Musik pengiring Tari Pakarena biasanya menggunakan alat musik tradisional seperti gendang, gong, dan seruling, yang menciptakan suasana yang tenang dan syahdu.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Pakarena tidak hanya sebagai hiburan, tetapi juga sarat dengan nilai-nilai budaya dan simbolis. Gerakan-gerakan dalam tari ini melambangkan kehidupan sehari-hari, harapan, dan doa. Tari Pakarena menjadi salah satu cara masyarakat Bugis dan Makassar untuk melestarikan dan menyampaikan nilai-nilai tradisional mereka.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Pakarena sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Sulawesi Selatan dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Bugis dan Makassar.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Pakarena, banyak komunitas seni dan budaya di Sulawesi Selatan yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Pakarena adalah simbol keanggunan dan kelembutan budaya dari Sulawesi Selatan. Dengan gerakan yang lembut dan penuh makna, musik yang syahdu, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Bugis dan Makassar, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Pakarena akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Bugis dan Makassar yang begitu berharga.
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
