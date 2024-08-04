import tanjidorData from '../../../../DATA/alatmusik-json/tanjidor.json';

const TanjidorPage = {
  async render() {
    const alatMusikList = tanjidorData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Tanjidor di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Tanjidor ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Tanjidor: Musik Kolintang dari Jakarta</h2>
          <p>
            Tanjidor adalah alat musik tradisional Betawi yang berasal dari Jakarta, Indonesia. Tanjidor termasuk dalam keluarga alat musik tiup, dan sering digunakan dalam pertunjukan musik serta acara adat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tanjidor memiliki pengaruh dari budaya Eropa dan sering dimainkan dalam berbagai perayaan di Betawi. Alat musik ini memainkan peran penting dalam menyambut tamu dan merayakan acara penting.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Tanjidor dimainkan dengan cara ditiup, menghasilkan suara yang kuat dan meriah. Teknik bermain melibatkan penguasaan embouchure (cara penempatan bibir) dan kontrol udara untuk menghasilkan melodi yang diinginkan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tanjidor memiliki makna budaya yang mendalam bagi masyarakat Betawi. Alat musik ini sering dimainkan dalam acara adat sebagai bentuk penghormatan dan perayaan, serta simbol kebanggaan budaya lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk melestarikan tradisi Tanjidor, pendidikan dan pemeliharaan alat musik ini sangat penting. Berbagai lembaga budaya di Jakarta berperan dalam mengajarkan teknik bermain dan sejarah Tanjidor kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tanjidor adalah bagian integral dari budaya Betawi dengan suara yang khas dan peran yang signifikan dalam upacara adat. Upaya pemeliharaan dan pendidikan alat musik ini sangat penting untuk menjaga keberlanjutannya dan menghubungkan masa lalu dengan masa depan.
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

export default TanjidorPage;
