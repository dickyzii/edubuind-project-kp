import sasandoData from '../../../../DATA/alatmusik-json/sasando.json';

const SasandoPage = {
  async render() {
    const alatMusikList = sasandoData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Sasando di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Sasando ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Sasando: Melodi Tradisional dari Rote</h2>
          <p>
            Sasando adalah alat musik tradisional dari Pulau Rote, Nusa Tenggara Timur. Alat musik ini merupakan jenis harpa yang menggunakan daun lontar sebagai resonator dan memiliki suara yang khas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Sasando memiliki sejarah panjang dalam budaya Rote. Alat musik ini telah ada sejak zaman dahulu dan sering dimainkan dalam upacara adat serta pertunjukan musik tradisional sebagai simbol budaya Rote.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Sasando dimainkan dengan cara dipetik menggunakan jari. Teknik bermainnya memerlukan keterampilan untuk menghasilkan melodi yang harmonis dan berirama. Suara yang dihasilkan dari Sasando memiliki karakteristik yang lembut dan menenangkan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Dalam budaya Rote, Sasando memiliki makna yang mendalam sebagai simbol kebanggaan dan identitas. Alat musik ini sering dimainkan dalam upacara adat dan acara khusus sebagai bentuk penghormatan dan pelestarian budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pemeliharaan dan pendidikan Sasando sangat penting untuk melestarikan tradisi ini. Banyak lembaga budaya di Nusa Tenggara Timur yang mengajarkan cara bermain Sasando kepada generasi muda untuk memastikan alat musik ini tetap hidup dan dikenal luas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Sasando adalah alat musik yang sangat berharga dalam budaya Rote. Dengan melodi yang lembut dan perannya dalam upacara adat, Sasando terus menjadi simbol penting dari kekayaan budaya daerah tersebut.
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

export default SasandoPage;
