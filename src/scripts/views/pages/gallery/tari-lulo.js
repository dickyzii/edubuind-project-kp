import tarianData from '../../../../DATA/galleryjson/lulo.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Lulo di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Lulo ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Lulo: Ekspresi Budaya dan Kebersamaan dari Sulawesi Tenggara</h2>
          <p>
            Tari Lulo adalah tarian tradisional yang berasal dari Sulawesi Tenggara, yang mencerminkan semangat kebersamaan dan kegembiraan masyarakatnya. Tarian ini sering dipertunjukkan dalam berbagai acara adat dan perayaan sebagai simbol persatuan dan harmoni.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Lulo berasal dari masyarakat Tolaki di Sulawesi Tenggara. Tarian ini awalnya dipertunjukkan dalam upacara adat dan ritual keagamaan untuk mempererat tali persaudaraan di antara masyarakat. Tari Lulo berkembang menjadi tarian yang sering dipertunjukkan dalam berbagai acara, baik adat maupun modern.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Lulo ditandai dengan gerakan yang sederhana namun penuh semangat, di mana para penari bergandengan tangan membentuk lingkaran. Musik pengiring Tari Lulo biasanya menggunakan alat musik tradisional seperti gong, gendang, dan gambus, yang menciptakan irama yang enerjik dan menyenangkan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Sosial</h3>
          <p>
            Tari Lulo tidak hanya sebagai hiburan, tetapi juga sarat dengan nilai-nilai budaya dan sosial. Tarian ini mencerminkan kebersamaan, gotong royong, dan rasa persatuan, yang merupakan bagian integral dari kehidupan masyarakat Tolaki. Tari Lulo menjadi simbol solidaritas dan harmoni dalam masyarakat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Lulo sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Sulawesi Tenggara dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Tolaki.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Lulo, banyak komunitas seni dan budaya di Sulawesi Tenggara yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Lulo adalah simbol kebudayaan dan kebersamaan dari Sulawesi Tenggara. Dengan gerakan yang sederhana namun penuh makna, musik yang enerjik, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Tolaki, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Lulo akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Tolaki yang begitu berharga.
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
