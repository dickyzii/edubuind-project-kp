import tarianData from '../../../../DATA/galleryjson/yospan.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Yospan di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Yospan ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Yospan: Tarian Persahabatan dari Papua</h2>
          <p>
            Tari Yospan, singkatan dari Yosim Pancar, adalah tarian tradisional yang berasal dari Papua. Tarian ini menggambarkan semangat persahabatan dan kebersamaan, sering ditarikan oleh kelompok pemuda dan pemudi dalam suasana yang penuh kegembiraan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Yospan lahir dari dua tarian tradisional Papua, yaitu Yosim dan Pancar. Yosim merupakan tarian yang lebih lambat dan teratur, sementara Pancar lebih dinamis dan cepat. Penggabungan keduanya menciptakan Yospan, yang kemudian menjadi populer di kalangan masyarakat Papua sebagai simbol persahabatan dan solidaritas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Yospan ditandai dengan gerakan yang enerjik dan lincah, menggambarkan semangat muda yang penuh kebebasan. Gerakan ini diiringi oleh musik tradisional Papua yang ceria dan penuh semangat, menggunakan alat musik seperti tifa dan ukulele, menciptakan suasana yang meriah dan menggembirakan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Yospan tidak hanya sebagai hiburan, tetapi juga sarat dengan makna budaya. Tarian ini mencerminkan kebersamaan, kerja sama, dan persahabatan di antara para penari dan masyarakat. Tari Yospan juga menjadi media untuk memperkenalkan dan melestarikan budaya Papua kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Yospan sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Papua dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Yospan, banyak komunitas seni dan budaya di Papua yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Yospan adalah simbol persahabatan dan kebersamaan dari Papua. Dengan gerakan yang enerjik dan penuh semangat, musik yang ceria, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Papua, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Yospan akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Papua yang begitu berharga.
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
