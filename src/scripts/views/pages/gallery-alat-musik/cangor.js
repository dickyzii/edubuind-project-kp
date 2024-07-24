import alatMusikData from '../../../../DATA/alatmusik-json/cangor.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Cangor di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Cangor ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Cangor: Instrumen Tradisional dari Bali</h2>
          <p>
            Cangor adalah alat musik tradisional Bali yang terbuat dari bambu. Alat musik ini memiliki bentuk seperti seruling dengan beberapa lubang yang dimainkan dengan cara ditiup. Cangor biasanya digunakan dalam pertunjukan musik tradisional Bali dan upacara adat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Cangor adalah bagian integral dari musik tradisional Bali dan telah digunakan selama berabad-abad. Alat musik ini sering dimainkan dalam berbagai acara adat, termasuk perayaan dan upacara keagamaan. Cangor dikenal dengan suara yang unik dan melodi yang khas, yang mencerminkan kekayaan budaya Bali.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Cangor dimainkan dengan cara ditiup melalui lubang-lubang yang ada pada alat musik ini. Teknik bermainnya melibatkan variasi tiupan dan penempatan jari untuk menghasilkan berbagai nada dan melodi. Pemain Cangor harus menguasai teknik ini untuk menciptakan harmoni yang sesuai dengan musik tradisional Bali.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Cangor memiliki makna budaya dan spiritual yang mendalam dalam masyarakat Bali. Alat musik ini sering dimainkan dalam upacara adat dan ritual keagamaan sebagai simbol kehormatan dan penghormatan. Melalui melodi Cangor, nilai-nilai budaya dan spiritual Bali disampaikan kepada masyarakat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan tradisi ini tetap hidup, pendidikan dan pemeliharaan Cangor sangat penting. Banyak sekolah seni dan lembaga budaya di Bali yang mengajarkan cara bermain Cangor kepada generasi muda, agar alat musik ini tidak punah. Melalui pendidikan dan latihan, pengetahuan tentang Cangor terus disebarluaskan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Cangor adalah salah satu alat musik tradisional Bali yang memiliki nilai budaya dan sejarah yang tinggi. Dengan suara yang unik dan melodi yang khas, Cangor tidak hanya menghibur tetapi juga menyampaikan nilai-nilai budaya yang mendalam. Melalui pelestarian dan pendidikan, Cangor akan terus menjadi bagian penting dari kehidupan masyarakat Bali.
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
