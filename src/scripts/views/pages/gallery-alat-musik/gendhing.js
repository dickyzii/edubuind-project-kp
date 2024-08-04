import gendhingData from '../../../../DATA/alatmusik-json/gendhing.json';

const GendhingPage = {
  async render() {
    const alatMusikList = gendhingData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Gendhing di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Gendhing ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Gendhing: Melodi dari Jawa</h2>
          <p>
            Gendhing adalah alat musik tradisional yang berasal dari Jawa, Indonesia. Gendhing sering dimainkan dalam pertunjukan gamelan dan memiliki peran penting dalam menyampaikan melodi dan ritme dalam musik tradisional Jawa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Gendhing merupakan bagian dari musik gamelan yang telah ada sejak zaman kuno di Jawa. Alat musik ini telah digunakan dalam berbagai upacara adat dan perayaan selama berabad-abad.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Gendhing dimainkan dengan cara dipukul menggunakan alat khusus. Teknik bermainnya melibatkan keterampilan dan koordinasi yang tinggi untuk menghasilkan melodi yang harmonis dan kompleks.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Gendhing memiliki makna budaya yang mendalam sebagai bagian dari pertunjukan gamelan yang seringkali digunakan dalam upacara adat dan ritual di Jawa. Musik ini dianggap sebagai bentuk komunikasi dengan dunia roh dan simbol keharmonisan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pendidikan dan pelestarian gendhing sangat penting untuk menjaga warisan budaya ini. Banyak sekolah dan lembaga seni di Jawa yang mengajarkan cara bermain gendhing kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Gendhing adalah alat musik yang memiliki peranan penting dalam musik tradisional Jawa. Dengan melodi dan teknik yang kompleks, gendhing terus menjadi bagian integral dari kehidupan budaya Jawa.
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

export default GendhingPage;
