import gamelanData from '../../../../DATA/alatmusik-json/gamelan.json';

const GamelanPage = {
  async render() {
    const alatMusikList = gamelanData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Gamelan di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Gamelan ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Gamelan: Harmoni dari Jawa</h2>
          <p>
            Gamelan adalah alat musik tradisional dari Jawa dan Bali, Indonesia. Gamelan terdiri dari berbagai jenis instrumen perkusi, seperti gong, kendang, dan metallophone. Alat musik ini sering dimainkan dalam pertunjukan seni dan upacara adat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Gamelan memiliki sejarah yang panjang dan telah ada sejak abad ke-8. Alat musik ini menjadi bagian integral dari budaya Jawa dan Bali, digunakan dalam berbagai acara adat dan perayaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Gamelan dimainkan dengan cara dipukul menggunakan alat khusus, seperti palu atau stik. Teknik bermain melibatkan koordinasi antar berbagai instrumen untuk menciptakan harmoni dan melodi yang kompleks.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Gamelan memiliki makna budaya yang mendalam, seringkali digunakan dalam upacara adat dan spiritual di Jawa dan Bali. Musik gamelan dianggap sebagai bentuk komunikasi dengan dunia roh dan simbol keharmonisan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pendidikan dan pelestarian gamelan sangat penting untuk menjaga warisan budaya ini. Banyak sekolah dan lembaga seni di Jawa dan Bali yang mengajarkan cara bermain gamelan kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Gamelan adalah alat musik tradisional yang kaya akan makna budaya dan sejarah. Dengan harmoni dan teknik yang kompleks, gamelan terus memainkan peranan penting dalam kehidupan budaya Jawa dan Bali.
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

export default GamelanPage;
