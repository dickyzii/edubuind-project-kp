import tarianData from '../../../../DATA/galleryjson/dero.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
     <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Dero di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Dero ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Dero: Tarian Kebersamaan dari Sulawesi Tengah</h2>
          <p>
            Tari Dero adalah tarian tradisional yang berasal dari Sulawesi Tengah, yang mencerminkan kebersamaan dan keakraban antarwarga. Tarian ini sering kali dipertunjukkan dalam acara-acara adat, perayaan, dan festival.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Dero berakar dari tradisi masyarakat Suku Kaili di Sulawesi Tengah. Tarian ini biasanya dipertunjukkan dalam lingkaran besar di mana para penari bergandengan tangan dan bergerak berirama mengikuti musik tradisional. Tari Dero sering kali dipertunjukkan dalam acara pernikahan, syukuran, dan festival budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Dero memiliki gerakan yang sederhana namun penuh makna. Para penari bergerak melingkar dengan langkah-langkah yang teratur, menggambarkan kebersamaan dan keharmonisan. Musik yang mengiringi Tari Dero biasanya menggunakan alat musik tradisional seperti gendang, gong, dan seruling.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Sosial</h3>
          <p>
            Tari Dero tidak hanya sebagai hiburan, tetapi juga memiliki makna budaya dan sosial yang mendalam. Tarian ini mencerminkan nilai-nilai seperti kebersamaan, gotong royong, dan persaudaraan yang menjadi bagian dari kehidupan sehari-hari masyarakat Kaili.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Dero sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Sulawesi Tengah dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Kaili.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Dero, banyak komunitas seni dan budaya di Sulawesi Tengah yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Dero adalah simbol kebersamaan dan kekayaan budaya dari Sulawesi Tengah. Dengan gerakan yang sederhana namun penuh makna, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Kaili, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Dero akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Kaili yang begitu berharga.
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
