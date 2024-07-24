import pantingData from '../../../../DATA/alatmusik-json/panting.json';

const PantingPage = {
  async render() {
    const alatMusikList = pantingData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Panting di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Panting ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Panting: Melodi Tradisional dari Kalimantan</h2>
          <p>
            Panting adalah alat musik tradisional dari Kalimantan, Indonesia. Alat musik ini berupa gitar kecil yang dimainkan dengan cara dipetik, dan sering digunakan dalam pertunjukan musik tradisional Dayak.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Panting memiliki akar sejarah yang kuat dalam budaya Kalimantan. Alat musik ini telah menjadi bagian dari berbagai ritual adat dan acara penting suku Dayak, menyampaikan kekayaan budaya lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Panting dimainkan dengan cara dipetik menggunakan jari. Teknik permainan ini memerlukan keterampilan khusus untuk menghasilkan melodi yang harmonis. Panting sering menjadi bagian penting dari pertunjukan musik tradisional Kalimantan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Panting juga memiliki makna budaya yang mendalam bagi masyarakat Dayak. Alat musik ini sering digunakan dalam upacara adat dan ritual, melambangkan nilai-nilai spiritual dan budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan tradisi ini tetap hidup, pendidikan dan pemeliharaan Panting sangat penting. Banyak lembaga budaya di Kalimantan mengajarkan cara bermain Panting kepada generasi muda, melestarikan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Panting adalah alat musik yang signifikan dalam tradisi Kalimantan. Dengan suara khas dan peran penting dalam pertunjukan musik tradisional, Panting adalah simbol kekayaan budaya yang perlu dilestarikan melalui pendidikan dan pemeliharaan.
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

export default PantingPage;
