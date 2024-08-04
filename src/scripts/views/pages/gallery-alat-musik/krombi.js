import krombiData from '../../../../DATA/alatmusik-json/krombi.json';

const KrombiPage = {
  async render() {
    const alatMusikList = krombiData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Krombi di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Krombi ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Krombi: Tradisi dari Kalimantan</h2>
          <p>
            Krombi adalah alat musik tradisional dari Kalimantan, Indonesia. Alat musik ini merupakan instrumen perkusi yang dimainkan dengan cara dipukul dan sering digunakan dalam acara adat serta pertunjukan seni.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Krombi memiliki sejarah panjang sebagai bagian dari tradisi musik Kalimantan. Alat musik ini sering dimainkan dalam upacara adat dan ritual sebagai simbol budaya lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Krombi dimainkan dengan cara dipukul menggunakan alat pemukul khusus. Teknik bermainnya memerlukan keterampilan dalam mengatur ritme dan tempo untuk menghasilkan suara yang harmonis.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Krombi memiliki makna budaya dan spiritual yang mendalam dalam masyarakat Kalimantan. Alat musik ini sering dimainkan dalam berbagai ritual adat untuk menghubungkan manusia dengan dunia spiritual.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk menjaga keberlangsungan tradisi Krombi, penting untuk melakukan pemeliharaan dan pendidikan. Banyak komunitas di Kalimantan yang mengajarkan cara memainkan Krombi kepada generasi muda untuk melestarikan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Krombi adalah alat musik tradisional yang memainkan peran penting dalam budaya Kalimantan. Dengan suara khas dan kontribusinya dalam berbagai acara adat, Krombi merupakan bagian integral dari warisan budaya lokal.
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

export default KrombiPage;
