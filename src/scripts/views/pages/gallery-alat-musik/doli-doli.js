import alatMusikData from '../../../../DATA/alatmusik-json/doli-doli.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Doli-Doli di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Doli-Doli ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Doli-Doli: Melodi Tradisional dari Maluku</h2>
          <p>
            Doli-Doli adalah alat musik tradisional yang berasal dari Maluku, Indonesia. Alat musik ini dibuat dari bambu dengan berbagai ukuran, menghasilkan suara yang khas dan merdu. Doli-Doli sering dimainkan dalam berbagai acara adat dan kesenian tradisional Maluku, menciptakan melodi yang mempesona.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Doli-Doli telah menjadi bagian penting dari budaya Maluku selama berabad-abad. Alat musik ini digunakan dalam berbagai upacara adat, seperti pernikahan, upacara keagamaan, dan festival budaya. Nama "Doli-Doli" sendiri berasal dari bahasa daerah yang berarti alat musik bambu.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Doli-Doli dimainkan dengan cara dipukul menggunakan tangan atau alat pemukul khusus. Teknik bermainnya relatif sederhana, tetapi menghasilkan melodi yang harmonis dan menarik. Pemain Doli-Doli biasanya memadukan beberapa ukuran bambu untuk menciptakan variasi nada dan ritme.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Doli-Doli juga memiliki makna budaya dan spiritual yang mendalam bagi masyarakat Maluku. Alat musik ini sering dimainkan dalam upacara keagamaan dan ritual adat, sebagai simbol kesucian dan penghormatan. Melalui melodi Doli-Doli, nilai-nilai tradisional dan spiritual disampaikan kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan keberlangsungan tradisi ini, pendidikan dan pemeliharaan Doli-Doli menjadi sangat penting. Banyak sekolah dan lembaga budaya di Maluku mengajarkan cara bermain Doli-Doli kepada generasi muda, dengan harapan mereka dapat melestarikan dan mengembangkan warisan budaya ini. Melalui pendidikan formal dan informal, pengetahuan tentang Doli-Doli terus disebarluaskan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Doli-Doli adalah salah satu warisan budaya Maluku yang paling berharga. Dengan suara yang khas dan melodi yang mempesona, alat musik ini tidak hanya menghibur tetapi juga menyampaikan nilai-nilai budaya dan spiritual yang mendalam. Melalui upaya pelestarian dan pendidikan, Doli-Doli akan terus hidup dan menjadi bagian integral dari kehidupan masyarakat Maluku, menghubungkan masa lalu dengan masa depan.
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

export default AlatMusikPage;
