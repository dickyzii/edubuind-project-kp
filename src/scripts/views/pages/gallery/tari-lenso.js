import tarianData from '../../../../DATA/galleryjson/lenso.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
     <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Lenso di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Lenso ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Lenso: Harmoni Gerakan dan Keindahan Kain Lenso dari Maluku</h2>
          <p>
            Tari Lenso adalah tarian tradisional yang berasal dari Maluku, dikenal dengan gerakan-gerakan anggun dan penggunaan kain lenso (sapu tangan) sebagai atribut utamanya. Tarian ini sering dipertunjukkan dalam acara-acara adat dan perayaan budaya, memperlihatkan keindahan dan keharmonisan gerakan penari.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Lenso memiliki akar budaya yang kuat di Maluku dan sering dikaitkan dengan upacara adat serta ritual keagamaan. Tarian ini menggambarkan nilai-nilai kebersamaan dan keharmonisan yang penting dalam kehidupan masyarakat Maluku. Penggunaan lenso sebagai bagian dari tarian ini melambangkan kesopanan dan keanggunan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Lenso ditandai dengan gerakan yang lemah gemulai dan ritmis, sering kali dilakukan oleh sekelompok penari yang bergerak dengan sinkronisasi sempurna. Musik pengiring Tari Lenso biasanya menggunakan alat musik tradisional Maluku seperti totobuang, tifa, dan gong, menciptakan irama yang menenangkan dan menghibur.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Lenso tidak hanya sebagai hiburan, tetapi juga sarat dengan makna budaya dan simbolis. Gerakan dalam tari ini mencerminkan nilai-nilai seperti kesopanan, keanggunan, dan kebersamaan. Melalui Tari Lenso, masyarakat Maluku mengekspresikan identitas dan warisan budaya mereka yang kaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Lenso sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Maluku dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Maluku.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Lenso, banyak komunitas seni dan budaya di Maluku yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Lenso adalah simbol keanggunan dan keharmonisan budaya dari Maluku. Dengan gerakan yang anggun dan penuh makna, musik yang menenangkan, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Maluku, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Lenso akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Maluku yang begitu berharga.
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
