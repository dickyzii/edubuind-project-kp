import gendangBeleqData from '../../../../DATA/alatmusik-json/gendang-beleq.json';

const GendangBeleqPage = {
  async render() {
    const alatMusikList = gendangBeleqData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Gendang Beleq di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Gendang Beleq ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Gendang Beleq: Keberagaman dari Lombok</h2>
          <p>
            Gendang Beleq adalah alat musik tradisional dari Lombok, Indonesia. Alat musik ini merupakan drum besar yang biasanya dimainkan dalam upacara adat dan festival. Gendang Beleq menghasilkan suara yang kuat dan ritmis, menciptakan suasana yang meriah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Gendang Beleq telah menjadi bagian dari budaya Lombok selama bertahun-tahun. Drum ini sering digunakan dalam upacara adat dan perayaan, serta dalam pertunjukan seni yang merayakan kebudayaan lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Gendang Beleq dimainkan dengan cara dipukul menggunakan stik atau tangan. Teknik bermainnya melibatkan ritme yang kompleks dan kekuatan dalam memukul drum untuk menghasilkan suara yang khas dan bertenaga.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Gendang Beleq memiliki makna budaya yang mendalam di Lombok. Drum ini sering dimainkan dalam upacara adat dan perayaan sebagai simbol semangat komunitas dan persatuan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pemeliharaan dan pendidikan mengenai Gendang Beleq penting untuk melestarikan tradisi ini. Banyak komunitas di Lombok yang mengajarkan cara memainkan Gendang Beleq kepada generasi muda untuk memastikan kelangsungan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Gendang Beleq adalah alat musik yang penting dalam tradisi Lombok. Dengan suara yang kuat dan perannya dalam upacara adat, Gendang Beleq merupakan bagian integral dari warisan budaya lokal.
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

export default GendangBeleqPage;
