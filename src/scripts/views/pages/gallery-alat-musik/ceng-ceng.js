import cengCengData from '../../../../DATA/alatmusik-json/ceng-ceng.json';

const CengCengPage = {
  async render() {
    const alatMusikList = cengCengData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Ceng-ceng di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Ceng-ceng ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Ceng-ceng: Irama Tradisional dari Bali</h2>
          <p>
            Ceng-ceng adalah alat musik tradisional Bali yang terdiri dari beberapa piring logam kecil yang digantung dan dipukul dengan palu kecil. Alat musik ini sering digunakan dalam pertunjukan gamelan Bali.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Ceng-ceng merupakan bagian integral dari ansambel gamelan Bali yang sudah ada sejak zaman kuno. Alat musik ini memainkan peran penting dalam berbagai ritual dan pertunjukan adat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Ceng-ceng dimainkan dengan memukul piring logam kecil menggunakan palu. Teknik bermainnya memerlukan keterampilan untuk menghasilkan ritme dan suara yang harmonis, serta mengiringi musik gamelan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Dalam budaya Bali, Ceng-ceng tidak hanya sebagai alat musik, tetapi juga memiliki makna spiritual. Alat musik ini sering digunakan dalam upacara keagamaan untuk menyampaikan pesan spiritual melalui musik.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk menjaga keberlangsungan tradisi ini, pendidikan dan pemeliharaan Ceng-ceng sangat penting. Banyak lembaga seni di Bali yang mengajarkan cara bermain Ceng-ceng kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Ceng-ceng adalah alat musik yang memainkan peran penting dalam musik tradisional Bali. Dengan suara yang khas dan teknik bermain yang unik, Ceng-ceng terus menjadi bagian integral dari budaya Bali.
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

export default CengCengPage;
