import tarianData from '../../../../DATA/galleryjson/saronde.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Saronde di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Saronde ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Saronde: Keindahan Tradisi dari Gorontalo</h2>
          <p>
            Tari Saronde adalah tarian tradisional yang berasal dari Gorontalo, Sulawesi Utara. Tarian ini biasanya dipertunjukkan dalam acara-acara adat dan perayaan, serta mencerminkan nilai-nilai budaya dan tradisi masyarakat Gorontalo.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Saronde telah menjadi bagian penting dari kehidupan masyarakat Gorontalo sejak zaman dahulu. Tarian ini awalnya dipertunjukkan dalam upacara adat seperti pernikahan dan acara syukuran. Gerakan-gerakan dalam Tari Saronde menggambarkan kebersamaan, keharmonisan, dan rasa syukur masyarakat Gorontalo.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Saronde dikenal dengan gerakan yang anggun dan lemah gemulai, sering kali diiringi oleh musik tradisional yang dimainkan dengan alat musik seperti gendang, gong, dan seruling. Penari biasanya mengenakan pakaian adat yang indah, menambah keanggunan tarian ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritualitas</h3>
          <p>
            Tari Saronde tidak hanya sebagai hiburan, tetapi juga memiliki makna budaya dan spiritual yang mendalam. Tarian ini mencerminkan nilai-nilai seperti rasa hormat, kebersamaan, dan keindahan alam yang menjadi bagian dari kehidupan sehari-hari masyarakat Gorontalo.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Saronde sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Gorontalo dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Gorontalo.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Saronde, banyak komunitas seni dan budaya di Gorontalo yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Saronde adalah simbol keindahan, kebersamaan, dan kekayaan budaya dari Gorontalo. Dengan gerakan yang anggun, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Gorontalo, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Saronde akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Gorontalo yang begitu berharga.
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
