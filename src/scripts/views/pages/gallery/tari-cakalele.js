import tarianData from '../../../../DATA/galleryjson/cakalele.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
     <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Cakalele di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Cakalele ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Cakalele: Tarian Perang yang Gagah dari Maluku</h2>
          <p>
            Tari Cakalele adalah tarian tradisional yang berasal dari Maluku, menggambarkan keberanian dan kegagahan para prajurit dalam pertempuran. Tarian ini biasanya ditampilkan oleh laki-laki yang mengenakan pakaian perang tradisional, lengkap dengan senjata seperti parang dan perisai.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Cakalele memiliki akar budaya yang kuat di Maluku dan sering kali dipertunjukkan dalam upacara adat serta ritual keagamaan. Tarian ini digunakan untuk menyambut tamu penting atau dalam perayaan-perayaan besar. Gerakan yang energik dan penuh semangat menggambarkan semangat juang dan kebanggaan masyarakat Maluku.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Cakalele ditandai dengan gerakan yang dinamis dan agresif, mencerminkan semangat perang. Musik pengiring Tari Cakalele biasanya menggunakan alat musik tradisional Maluku seperti totobuang, tifa, dan gong, menciptakan irama yang mendebarkan dan penuh semangat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Cakalele tidak hanya sebagai hiburan, tetapi juga sarat dengan makna budaya dan simbolis. Gerakan dalam tari ini mencerminkan keberanian, kekuatan, dan semangat juang masyarakat Maluku. Melalui Tari Cakalele, masyarakat Maluku mengekspresikan identitas dan warisan budaya mereka yang kaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Cakalele sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Maluku dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Maluku.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Cakalele, banyak komunitas seni dan budaya di Maluku yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Cakalele adalah simbol keberanian dan kekuatan budaya dari Maluku. Dengan gerakan yang dinamis dan penuh makna, musik yang mendebarkan, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Maluku, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Cakalele akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Maluku yang begitu berharga.
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
