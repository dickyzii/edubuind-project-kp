import tarianData from '../../../../DATA/galleryjson/selamat-datang.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Selamat Datang di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Selamat Datang ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Selamat Datang: Penyambutan yang Hangat dari Papua</h2>
          <p>
            Tari Selamat Datang adalah salah satu tarian tradisional dari Papua yang biasa dipersembahkan untuk menyambut tamu penting. Tarian ini menggambarkan keramahan dan kehangatan masyarakat Papua dalam menyambut kedatangan tamu.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Selamat Datang berasal dari budaya masyarakat Papua yang kaya akan tradisi penyambutan tamu. Tarian ini biasanya dipertunjukkan pada acara-acara penting seperti penyambutan pejabat, tamu kehormatan, atau dalam upacara adat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Selamat Datang ditandai dengan gerakan yang anggun dan penuh semangat, mencerminkan rasa hormat dan kebahagiaan dalam menyambut tamu. Gerakan tarian ini diiringi oleh musik tradisional Papua yang energik dan ceria, menggunakan alat musik seperti tifa dan suling.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Selamat Datang tidak hanya sebagai hiburan, tetapi juga sarat dengan makna budaya. Tarian ini mencerminkan nilai-nilai keramahan, penghormatan, dan persahabatan yang tinggi dalam budaya Papua. Melalui Tari Selamat Datang, masyarakat Papua menunjukkan kebanggaan mereka terhadap tradisi dan budaya lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Selamat Datang sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Papua dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Selamat Datang, banyak komunitas seni dan budaya di Papua yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Selamat Datang adalah simbol keramahan dan penghormatan dari Papua. Dengan gerakan yang anggun, musik yang ceria, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Papua, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Selamat Datang akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Papua yang begitu berharga.
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
