import kecapiData from '../../../../DATA/alatmusik-json/kecapi.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = kecapiData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Kecapi</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Kecapi ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Kecapi: Alat Musik Petik Tradisional dari Kalimantan Utara</h2>
          <p>
            Kecapi adalah alat musik petik tradisional yang terbuat dari kayu dengan senar yang dipetik untuk menghasilkan melodi. Kecapi biasanya dimainkan dalam pertunjukan musik tradisional di Kalimantan Utara dan memainkan peran penting dalam berbagai upacara adat dan ritual. Suara lembut dan melodius dari Kecapi memberikan nuansa yang khas dalam musik tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Kecapi memiliki sejarah panjang dalam budaya Kalimantan Utara dan sering dimainkan dalam berbagai acara adat dan festival. Alat musik ini mencerminkan kekayaan budaya dan tradisi musik yang ada di daerah tersebut.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Kecapi dimainkan dengan cara memetik senar yang terbuat dari bahan alami, seperti nylon atau kulit. Teknik permainan yang berbeda dapat menghasilkan berbagai macam melodi dan nuansa. Pemain Kecapi harus menguasai teknik petikan yang tepat untuk menghasilkan suara yang harmonis dan indah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Kecapi tidak hanya berfungsi sebagai alat musik tetapi juga sebagai simbol budaya dan spiritual. Musik yang dihasilkan dari Kecapi seringkali digunakan dalam ritual dan upacara adat untuk menyampaikan pesan dan nilai-nilai tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk menjaga keberlangsungan tradisi, penting untuk memelihara dan mengajarkan cara bermain Kecapi kepada generasi muda. Pendidikan tentang Kecapi dan musik tradisional lainnya diharapkan dapat melestarikan budaya lokal dan memperkenalkan kekayaan musik daerah kepada dunia.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Kecapi adalah alat musik yang memiliki nilai budaya yang tinggi dan memainkan peran penting dalam musik tradisional Kalimantan Utara. Dengan melodi yang lembut dan teknik permainan yang khas, Kecapi terus menjadi bagian penting dari warisan budaya yang harus dilestarikan dan dihargai.
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

export default AlatMusikPage;
