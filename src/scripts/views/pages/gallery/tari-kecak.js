import tarianData from '../../../../DATA/galleryjson/kecak.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
     <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Kecak di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Kecak ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Kecak: Keindahan dan Spiritualitas dari Pulau Dewata</h2>
          <p>
            Tari Kecak adalah salah satu tarian tradisional Bali yang paling terkenal, dikenal dengan irama khas yang dihasilkan dari suara "cak" yang diulang-ulang oleh sekelompok penari pria. Tarian ini tidak hanya memukau secara visual tetapi juga membawa penonton ke dalam suasana mistis dan spiritual.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Kecak berasal dari ritual Sanghyang, yang dimaksudkan untuk mengusir roh jahat. Pada tahun 1930-an, tari ini dikembangkan menjadi pertunjukan seni yang mengisahkan cerita Ramayana. Tarian ini kini menjadi salah satu daya tarik utama bagi wisatawan yang mengunjungi Bali.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Irama</h3>
          <p>
            Tari Kecak dikenal dengan gerakan tangan yang dinamis dan suara "cak" yang dihasilkan oleh para penari pria. Penari utama biasanya memainkan tokoh-tokoh dari cerita Ramayana, seperti Rama, Sita, dan Rahwana. Kombinasi gerakan dan irama ini menciptakan pertunjukan yang sangat memukau dan penuh energi.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna dan Spiritualitas</h3>
          <p>
            Selain sebagai hiburan, Tari Kecak juga memiliki makna spiritual yang mendalam. Tarian ini dianggap sebagai bentuk komunikasi dengan dewa-dewa dan roh leluhur, serta sebagai cara untuk menjaga keseimbangan alam dan dunia spiritual.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Kecak sering dipentaskan di berbagai tempat wisata di Bali, terutama di Pura Uluwatu dan Pura Tanah Lot. Pertunjukan ini biasanya diadakan menjelang matahari terbenam, memberikan latar belakang yang indah dan dramatis bagi tarian tersebut.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Kecak, banyak komunitas seni dan budaya di Bali yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Kecak adalah simbol keindahan, kekuatan, dan spiritualitas dari Pulau Dewata. Dengan gerakan yang dinamis, irama yang khas, dan makna spiritual yang mendalam, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya Bali. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Kecak akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Bali yang begitu berharga.
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
