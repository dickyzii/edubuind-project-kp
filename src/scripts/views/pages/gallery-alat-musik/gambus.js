import alatMusikData from '../../../../DATA/alatmusik-json/gambus.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Gambus di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Gambus ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Gambus: Melodi Tradisional dari Sumatera</h2>
          <p>
            Gambus adalah alat musik tradisional yang berasal dari Sumatera, Indonesia. Alat musik ini mirip dengan kecapi dan dimainkan dengan cara dipetik. Gambus sering dimainkan dalam berbagai acara adat dan kesenian tradisional di Sumatera, menghasilkan melodi yang merdu dan mengesankan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Gambus telah menjadi bagian penting dari budaya Sumatera selama berabad-abad. Alat musik ini digunakan dalam berbagai upacara adat, seperti pernikahan, upacara keagamaan, dan festival budaya. Nama "Gambus" sendiri berasal dari bahasa Arab yang berarti alat musik petik.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Gambus dimainkan dengan cara dipetik menggunakan jari atau alat pemetik khusus. Teknik bermainnya bisa sangat kompleks, tergantung pada jenis musik yang dimainkan. Pemain Gambus biasanya menguasai berbagai teknik petikan untuk menciptakan variasi nada dan ritme yang harmonis.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Gambus juga memiliki makna budaya dan spiritual yang mendalam bagi masyarakat Sumatera. Alat musik ini sering dimainkan dalam upacara keagamaan dan ritual adat, sebagai simbol kesucian dan penghormatan. Melalui melodi Gambus, nilai-nilai tradisional dan spiritual disampaikan kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan keberlangsungan tradisi ini, pendidikan dan pemeliharaan Gambus menjadi sangat penting. Banyak sekolah dan lembaga budaya di Sumatera mengajarkan cara bermain Gambus kepada generasi muda, dengan harapan mereka dapat melestarikan dan mengembangkan warisan budaya ini. Melalui pendidikan formal dan informal, pengetahuan tentang Gambus terus disebarluaskan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Gambus adalah salah satu warisan budaya Sumatera yang paling berharga. Dengan suara yang khas dan melodi yang mempesona, alat musik ini tidak hanya menghibur tetapi juga menyampaikan nilai-nilai budaya dan spiritual yang mendalam. Melalui upaya pelestarian dan pendidikan, Gambus akan terus hidup dan menjadi bagian integral dari kehidupan masyarakat Sumatera, menghubungkan masa lalu dengan masa depan.
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
