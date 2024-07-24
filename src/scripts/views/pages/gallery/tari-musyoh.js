import tarianData from '../../../../DATA/galleryjson/musyoh.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Muysoh di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Muysoh ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Muysoh: Warisan Budaya dari Papua</h2>
          <p>
            Tari Muysoh adalah salah satu tarian tradisional dari Papua yang menggambarkan keindahan dan kekayaan budaya masyarakat setempat. Tarian ini sering ditampilkan dalam berbagai upacara adat dan acara penting sebagai simbol kebanggaan dan identitas budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Muysoh berasal dari masyarakat Papua, yang kaya akan tradisi dan adat istiadat. Tarian ini telah ada sejak zaman nenek moyang dan terus dilestarikan hingga saat ini. Tari Muysoh sering ditampilkan dalam upacara adat sebagai ungkapan rasa syukur dan penghormatan kepada leluhur.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Muysoh ditandai dengan gerakan yang dinamis dan penuh semangat, mencerminkan kehidupan sehari-hari masyarakat Papua. Gerakan tarian ini diiringi oleh musik tradisional yang menggunakan alat musik khas Papua, seperti tifa dan suling, menciptakan suasana yang meriah dan penuh energi.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Muysoh tidak hanya sebagai bentuk hiburan, tetapi juga memiliki makna simbolis yang mendalam. Tarian ini menggambarkan nilai-nilai kebersamaan, keberanian, dan kearifan lokal masyarakat Papua. Melalui Tari Muysoh, masyarakat Papua menunjukkan rasa cinta dan kebanggaan terhadap warisan budaya mereka.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Muysoh sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Papua dan wilayah lainnya di Indonesia. Tarian ini menjadi daya tarik utama bagi wisatawan yang ingin menyaksikan keindahan dan keunikan budaya Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Muysoh, banyak komunitas seni dan budaya di Papua yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Muysoh adalah simbol keindahan, kekuatan, dan kekayaan budaya dari Papua. Dengan gerakan yang dinamis, musik yang meriah, serta kehadiran yang tak tergantikan dalam kehidupan masyarakat Papua, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Muysoh akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Papua yang begitu berharga.
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
