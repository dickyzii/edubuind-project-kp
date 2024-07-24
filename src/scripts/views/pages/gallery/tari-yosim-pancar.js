import tarianData from '../../../../DATA/galleryjson/yosimpancar.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Yosim Pancar di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Yosim Pancar ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Yosim Pancar: Ekspresi Dinamis dari Papua</h2>
          <p>
            Tari Yosim Pancar adalah tarian tradisional yang berasal dari Papua. Tarian ini dikenal dengan gerakannya yang dinamis dan penuh semangat, mencerminkan keceriaan dan kebersamaan masyarakat Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Yosim Pancar berasal dari daerah Papua dan merupakan perpaduan dari dua jenis tarian yaitu Tari Yosim dan Tari Pancar. Tarian ini sering ditampilkan dalam berbagai acara adat, perayaan, dan festival budaya di Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Yosim Pancar ditandai dengan gerakan yang lincah dan dinamis. Gerakan tari ini diiringi oleh musik yang khas, menggunakan alat musik tradisional Papua seperti tifa dan suling. Setiap gerakan tari Yosim Pancar mencerminkan semangat kebersamaan dan kekompakan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Yosim Pancar memiliki makna yang mendalam dalam budaya Papua. Tarian ini tidak hanya sebagai hiburan tetapi juga sebagai cara untuk mempererat ikatan sosial dan menyatukan masyarakat dalam semangat kebersamaan. Melalui Tari Yosim Pancar, masyarakat Papua mengekspresikan rasa bangga dan cinta mereka terhadap budaya dan tradisi mereka.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Yosim Pancar sering ditampilkan dalam berbagai acara pariwisata dan festival budaya, baik di Papua maupun di luar Papua. Tarian ini menjadi daya tarik bagi wisatawan yang ingin menyaksikan dan merasakan keunikan budaya Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk melestarikan Tari Yosim Pancar, banyak komunitas seni di Papua yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk memastikan bahwa warisan budaya ini tetap hidup dan berkembang di tengah arus modernisasi.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Yosim Pancar adalah simbol keceriaan dan kebersamaan dari Papua. Dengan gerakan yang dinamis dan musik yang meriah, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya Papua. Melalui upaya pelestarian dan pengajaran, Tari Yosim Pancar akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan dan semangat kebersamaan budaya Papua yang begitu berharga.
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

export default TarianPage;
