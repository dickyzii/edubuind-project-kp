import tarianData from '../../../../DATA/galleryjson/zapin.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Zapin di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Zapin ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Zapin: Harmoni Gerakan dan Irama dari Riau</h2>
          <p>
            Tari Zapin adalah salah satu tarian tradisional yang berasal dari Riau, Indonesia. Tarian ini terkenal dengan gerakannya yang lemah gemulai dan iringan musik yang memikat, yang biasanya dimainkan dengan alat musik tradisional seperti gambus dan marwas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Zapin memiliki akar sejarah yang panjang, berasal dari kebudayaan Arab yang dibawa oleh pedagang dan penyebar agama Islam ke Nusantara. Sejak saat itu, Tari Zapin mengalami akulturasi dengan budaya lokal Riau dan menjadi salah satu ikon budaya daerah tersebut.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Anggun dan Bermakna</h3>
          <p>
            Tari Zapin dikenal dengan gerakannya yang anggun dan penuh makna. Setiap gerakan dalam Tari Zapin memiliki filosofi dan cerita tersendiri, yang mencerminkan nilai-nilai kehidupan, kebersamaan, dan spiritualitas. Gerakan tangan dan kaki yang harmonis menciptakan sebuah tarian yang memukau penonton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tari Zapin tidak hanya sebagai hiburan, tetapi juga sebagai sarana dakwah dan pendidikan. Melalui gerakan dan syair lagu yang mengiringi, Tari Zapin menyampaikan pesan-pesan moral dan keagamaan kepada penontonnya. Tarian ini sering ditampilkan dalam berbagai acara adat dan keagamaan di Riau.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kehadiran dalam Kehidupan Masyarakat Riau</h3>
          <p>
            Tari Zapin merupakan bagian yang tak terpisahkan dari kehidupan masyarakat Riau. Tarian ini diajarkan sejak dini kepada anak-anak sebagai upaya melestarikan budaya dan tradisi lokal. Kehadiran Tari Zapin dalam berbagai acara dan festival menunjukkan betapa pentingnya tarian ini dalam mempertahankan identitas budaya masyarakat Riau.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pelestarian Tari Zapin menjadi sangat penting di tengah arus modernisasi. Banyak sekolah dan lembaga budaya di Riau yang aktif mengajarkan Tari Zapin kepada generasi muda. Melalui pendidikan formal dan informal, Tari Zapin terus dilestarikan dan dikembangkan sebagai warisan budaya yang berharga.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Zapin adalah simbol keindahan, harmoni, dan kekayaan budaya dari Riau. Dengan gerakan yang anggun, makna yang mendalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Riau, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Zapin akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Riau yang begitu berharga.
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
