import atowoData from '../../../../DATA/alatmusik-json/atowo.json';

const AtowoPage = {
  async render() {
    const alatMusikList = atowoData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Atowo di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Atowo ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Atowo: Warisan dari Sulawesi</h2>
          <p>
            Atowo adalah alat musik tradisional dari Sulawesi, Indonesia. Alat musik ini merupakan instrumen perkusi yang terbuat dari bahan alami dan sering digunakan dalam berbagai acara adat serta upacara keagamaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Atowo telah menjadi bagian dari tradisi musik Sulawesi selama berabad-abad. Alat musik ini memainkan peran penting dalam upacara adat dan sering dipersembahkan sebagai simbol penghormatan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Atowo dimainkan dengan cara dipukul, menghasilkan suara yang khas dan resonan. Teknik bermainnya memerlukan keterampilan dalam mengatur tekanan pukulan dan posisi tangan untuk menghasilkan melodi yang harmonis.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Atowo memiliki makna budaya dan spiritual yang mendalam bagi masyarakat Sulawesi. Alat musik ini sering dimainkan dalam upacara keagamaan dan ritual adat sebagai simbol komunikasi dengan dunia spiritual.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk melestarikan tradisi Atowo, pendidikan dan pemeliharaan sangat penting. Banyak komunitas di Sulawesi yang mengajarkan cara memainkan Atowo kepada generasi muda untuk menjaga keberlangsungan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Atowo adalah salah satu alat musik tradisional yang memiliki nilai budaya tinggi di Sulawesi. Dengan suara yang khas dan perannya dalam upacara adat, Atowo merupakan bagian penting dari warisan budaya lokal.
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

export default AtowoPage;
