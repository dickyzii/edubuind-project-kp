import bonangData from '../../../../DATA/alatmusik-json/bonang.json';

const BonangPage = {
  async render() {
    const alatMusikList = bonangData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Bonang di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Bonang ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Bonang: Simbol Kekayaan Budaya Jawa</h2>
          <p>
            Bonang adalah alat musik tradisional yang berasal dari Jawa, Indonesia. Alat musik ini merupakan bagian penting dari ansambel gamelan dan dikenal dengan nada-nada yang melodius dan khas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Bonang telah menjadi bagian dari musik gamelan sejak zaman kuno di Jawa. Alat musik ini digunakan dalam berbagai upacara adat dan pertunjukan seni yang mencerminkan kekayaan budaya Jawa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Bonang dimainkan dengan cara dipukul menggunakan alat pemukul khusus. Teknik bermainnya melibatkan keterampilan tinggi untuk menghasilkan melodi yang kompleks dan harmonis.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Dalam budaya Jawa, Bonang tidak hanya sebagai alat musik, tetapi juga sebagai simbol spiritual. Bonang digunakan dalam upacara adat dan ritual untuk menyampaikan makna budaya dan spiritual.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pendidikan dan pelestarian Bonang sangat penting untuk menjaga warisan budaya ini. Banyak lembaga seni di Jawa yang mengajarkan cara bermain Bonang kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Bonang adalah salah satu alat musik yang memegang peranan penting dalam musik tradisional Jawa. Dengan melodi yang khas dan teknik yang rumit, Bonang terus menjadi bagian integral dari budaya Jawa.
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

export default BonangPage;
