import angklungBuhunData from '../../../../DATA/alatmusik-json/angklung-buhun.json';

const AngklungBuhunPage = {
  async render() {
    const alatMusikList = angklungBuhunData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Angklung Buhun di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Angklung Buhun ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Angklung Buhun: Melodi Tradisional dari Jawa Barat</h2>
          <p>
            Angklung Buhun adalah alat musik tradisional dari Jawa Barat, Indonesia, yang terbuat dari bambu. Alat musik ini dimainkan dengan cara digoyangkan, menghasilkan suara yang khas dan melodi yang memukau. Angklung Buhun sering digunakan dalam upacara adat dan pertunjukan budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Angklung Buhun merupakan bagian dari tradisi musik Sunda yang telah ada sejak lama. Nama "Buhun" mengacu pada varian angklung yang lebih tua dan sering digunakan dalam upacara tradisional serta perayaan budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Angklung Buhun dimainkan dengan cara menggoyangkan alat musik ini, menghasilkan suara berdasarkan ukuran dan panjang bambu. Teknik bermain memerlukan keterampilan untuk menghasilkan nada yang tepat dan harmonis.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Angklung Buhun memiliki makna budaya dan spiritual yang mendalam bagi masyarakat Sunda. Alat musik ini sering digunakan dalam ritual adat sebagai simbol penyampaian doa dan harapan kepada Tuhan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pendidikan dan pemeliharaan Angklung Buhun sangat penting untuk melestarikan tradisi ini. Banyak lembaga budaya di Jawa Barat yang mengajarkan cara bermain Angklung Buhun kepada generasi muda untuk menjaga kelestarian warisan budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Angklung Buhun adalah alat musik yang kaya akan sejarah dan budaya dari Jawa Barat. Dengan suara yang khas dan peran penting dalam upacara adat, Angklung Buhun merupakan simbol budaya yang perlu dilestarikan melalui pendidikan dan pemeliharaan.
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

export default AngklungBuhunPage;
