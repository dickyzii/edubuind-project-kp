import tifaData from '../../../../DATA/alatmusik-json/tifa.json';

const TifaPage = {
  async render() {
    const alatMusikList = tifaData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Tifa di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Tifa ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Tifa: Drum Tradisional dari Papua</h2>
          <p>
            Tifa adalah alat musik tradisional dari Papua, Indonesia. Alat musik ini merupakan drum besar yang dimainkan dengan cara dipukul. Tifa sering digunakan dalam berbagai upacara adat dan pertunjukan seni di Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tifa merupakan bagian penting dari budaya musik Papua. Drum ini telah ada sejak lama dan digunakan dalam berbagai ritual adat serta acara komunitas. Tifa mencerminkan kekayaan budaya dan sejarah Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Tifa dimainkan dengan cara dipukul menggunakan tongkat khusus. Teknik bermain Tifa menciptakan ritme yang khas dan sering kali menjadi pusat perhatian dalam pertunjukan adat dan festival.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tifa memiliki makna budaya dan spiritual yang mendalam dalam masyarakat Papua. Drum ini sering digunakan dalam ritual adat dan acara keagamaan, melambangkan kekuatan dan harmoni.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk menjaga keberlangsungan tradisi Tifa, penting untuk melakukan pemeliharaan dan pendidikan. Banyak komunitas Papua yang mengajarkan cara bermain Tifa kepada generasi muda untuk memastikan warisan budaya ini tetap hidup.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tifa adalah salah satu alat musik tradisional yang penting dalam budaya Papua. Dengan suara yang khas dan peranannya dalam berbagai acara adat, Tifa berkontribusi besar terhadap pelestarian budaya lokal.
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

export default TifaPage;
