import polopaloData from '../../../../DATA/alatmusik-json/palopalo.json';

const PolopaloPage = {
  async render() {
    const alatMusikList = polopaloData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Polopalo di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Polopalo ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Polopalo: Melodi Tradisional dari Maluku</h2>
          <p>
            Polopalo adalah alat musik tradisional dari Maluku yang dimainkan dengan cara dipukul. Alat musik ini terbuat dari bambu dan sering digunakan dalam upacara adat serta pertunjukan musik tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Polopalo merupakan bagian penting dari budaya Maluku. Alat musik ini telah digunakan dalam berbagai upacara adat dan acara komunitas sejak lama, mencerminkan kekayaan budaya daerah tersebut.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Polopalo dimainkan dengan cara dipukul menggunakan alat pemukul yang khusus. Teknik bermainnya memerlukan keterampilan untuk menghasilkan suara yang harmonis dan ritmis. Polopalo sering dimainkan dalam grup musik tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Dalam budaya Maluku, Polopalo memiliki makna sebagai simbol kekuatan dan keberanian. Alat musik ini sering digunakan dalam upacara adat untuk menandai acara penting dan sebagai bagian dari ritual keagamaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pemeliharaan dan pendidikan mengenai Polopalo sangat penting untuk melestarikan tradisi ini. Banyak lembaga budaya di Maluku yang mengajarkan cara memainkan Polopalo kepada generasi muda untuk memastikan alat musik ini terus ada dan dikenal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Polopalo adalah alat musik yang sangat penting dalam budaya Maluku. Dengan suara khas dan perannya dalam upacara adat, Polopalo terus menjadi simbol dari kekayaan budaya dan warisan tradisional Maluku.
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

export default PolopaloPage;
