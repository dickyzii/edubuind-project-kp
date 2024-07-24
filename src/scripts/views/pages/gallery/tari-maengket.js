import tarianData from '../../../../DATA/galleryjson/maengket.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Maengket di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Maengket ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Maengket: Ekspresi Kebudayaan Minahasa dari Sulawesi Utara</h2>
          <p>
            Tari Maengket adalah tarian tradisional yang berasal dari Minahasa, Sulawesi Utara, yang menggambarkan kehidupan sehari-hari masyarakat serta nilai-nilai budaya yang mereka anut. Tarian ini sering kali dipertunjukkan dalam berbagai acara adat dan perayaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Maengket berasal dari daerah Minahasa di Sulawesi Utara dan sudah ada sejak zaman dulu. Tarian ini awalnya merupakan ritual syukur masyarakat atas hasil panen yang melimpah. Seiring waktu, Tari Maengket berkembang menjadi tarian yang dipertunjukkan dalam berbagai upacara adat dan perayaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Maengket memiliki gerakan yang dinamis dan penuh semangat, mencerminkan kegembiraan dan rasa syukur. Musik pengiringnya biasanya menggunakan alat musik tradisional seperti gong, tambur, dan kolintang, yang menciptakan irama yang enerjik dan menyenangkan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Sosial</h3>
          <p>
            Tari Maengket tidak hanya sebagai hiburan, tetapi juga sarat dengan nilai-nilai budaya dan sosial. Tarian ini mencerminkan kebersamaan, gotong royong, dan rasa syukur, yang merupakan bagian integral dari kehidupan masyarakat Minahasa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Maengket sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Sulawesi Utara dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Minahasa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Maengket, banyak komunitas seni dan budaya di Minahasa yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Maengket adalah simbol kebudayaan dan kebersamaan dari Minahasa, Sulawesi Utara. Dengan gerakan yang dinamis, musik yang enerjik, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Minahasa, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Maengket akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Minahasa yang begitu berharga.
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
