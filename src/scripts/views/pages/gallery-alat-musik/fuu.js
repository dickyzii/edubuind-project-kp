import fuuData from '../../../../DATA/alatmusik-json/fuu.json';

const FuuPage = {
  async render() {
    const alatMusikList = fuuData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Fuu di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Fuu ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Fuu: Tradisi dari Nusa Tenggara Timur</h2>
          <p>
            Fuu adalah alat musik tradisional dari Nusa Tenggara Timur, Indonesia. Alat musik ini merupakan instrumen tiup yang memiliki suara khas dan sering digunakan dalam acara adat dan upacara keagamaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Fuu telah menjadi bagian dari budaya masyarakat Nusa Tenggara Timur selama bertahun-tahun. Alat musik ini memiliki sejarah panjang dan sering dimainkan dalam upacara adat sebagai bagian dari tradisi lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Fuu dimainkan dengan cara ditiup. Teknik bermainnya melibatkan penggunaan embouchure dan teknik tiupan khusus untuk menghasilkan suara yang harmonis dan khas. Alat musik ini sering dimainkan dalam pertunjukan adat dan festival budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Dalam masyarakat Nusa Tenggara Timur, Fuu memiliki makna budaya dan spiritual yang mendalam. Alat musik ini sering digunakan dalam ritual adat untuk menyampaikan pesan dan simbol budaya kepada masyarakat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk menjaga keberlangsungan tradisi Fuu, penting untuk melakukan pemeliharaan dan pendidikan. Banyak komunitas di Nusa Tenggara Timur yang mengajarkan cara memainkan Fuu kepada generasi muda untuk melestarikan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Fuu adalah alat musik tradisional yang memiliki peran penting dalam budaya Nusa Tenggara Timur. Dengan suara khasnya dan kontribusinya dalam berbagai acara adat, Fuu memainkan peran yang signifikan dalam pelestarian budaya lokal.
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

export default FuuPage;
