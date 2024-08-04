import gendangTiwahData from '../../../../DATA/alatmusik-json/gendang-tiwah.json';

const GendangTiwahPage = {
  async render() {
    const alatMusikList = gendangTiwahData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Gendang Tiwah di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Gendang Tiwah ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Gendang Tiwah: Melodi Tradisional dari Kalimantan</h2>
          <p>
            Gendang Tiwah adalah alat musik tradisional dari Kalimantan, Indonesia. Alat musik ini berupa drum besar yang dimainkan dengan cara dipukul, dan sering digunakan dalam upacara adat dan perayaan budaya suku Dayak.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Gendang Tiwah memiliki sejarah yang erat dengan tradisi suku Dayak di Kalimantan. Alat musik ini digunakan dalam berbagai ritual adat, termasuk upacara pemakaman dan perayaan besar.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Gendang Tiwah dimainkan dengan cara dipukul menggunakan tangan atau alat pemukul. Teknik permainan ini memerlukan keterampilan khusus untuk menghasilkan ritme yang harmonis, dan sering disertai dengan tarian dan nyanyian.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Gendang Tiwah tidak hanya berfungsi sebagai alat musik, tetapi juga sebagai simbol budaya dan spiritual bagi masyarakat Dayak. Alat musik ini sering digunakan dalam upacara adat untuk memanggil roh dan menghormati leluhur.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan keberlangsungan tradisi ini, pendidikan dan pemeliharaan Gendang Tiwah sangat penting. Banyak sekolah dan lembaga budaya di Kalimantan mengajarkan cara bermain Gendang Tiwah kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Gendang Tiwah adalah alat musik yang penting dalam budaya Kalimantan. Dengan suara khas dan peran sentral dalam upacara adat, Gendang Tiwah adalah simbol kekayaan budaya yang harus dilestarikan melalui pendidikan dan pemeliharaan.
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

export default GendangTiwahPage;
