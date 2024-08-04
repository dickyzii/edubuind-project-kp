import alatMusikData from '../../../../DATA/alatmusik-json/saluang.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Saluang di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Saluang ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Saluang: Melodi Tradisional dari Minangkabau</h2>
          <p>
            Saluang adalah alat musik tradisional yang berasal dari Minangkabau, Sumatera Barat, Indonesia. Alat musik ini berbentuk seperti seruling yang dibuat dari bambu tipis, menghasilkan suara yang lembut dan merdu. Saluang sering dimainkan dalam berbagai acara adat dan kesenian tradisional Minangkabau, menciptakan melodi yang mempesona.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Saluang telah menjadi bagian penting dari budaya Minangkabau selama berabad-abad. Alat musik ini digunakan dalam berbagai upacara adat, seperti pernikahan, randai, dan acara keagamaan. Nama "Saluang" sendiri berasal dari bahasa Minangkabau yang berarti seruling bambu.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Saluang dimainkan dengan cara ditiup seperti seruling, tetapi memiliki teknik yang sederhana dan mudah dipelajari. Pemain Saluang biasanya memanfaatkan teknik pernapasan melingkar untuk menghasilkan suara yang terus-menerus tanpa henti. Melodi yang dihasilkan oleh Saluang sangat khas dan sering digunakan untuk mengiringi lagu-lagu Minang.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Saluang juga memiliki makna budaya dan spiritual yang dalam bagi masyarakat Minangkabau. Alat musik ini sering dimainkan dalam upacara keagamaan dan ritual adat, sebagai simbol kesucian dan penghormatan. Melalui melodi Saluang, nilai-nilai tradisional dan spiritual disampaikan kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan keberlangsungan tradisi ini, pendidikan dan pemeliharaan Saluang menjadi sangat penting. Banyak sekolah dan lembaga budaya di Minangkabau mengajarkan cara bermain Saluang kepada generasi muda, dengan harapan mereka dapat melestarikan dan mengembangkan warisan budaya ini. Melalui pendidikan formal dan informal, pengetahuan tentang Saluang terus disebarluaskan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Saluang adalah salah satu warisan budaya Minangkabau yang paling berharga. Dengan suara yang lembut dan melodi yang mempesona, alat musik ini tidak hanya menghibur tetapi juga menyampaikan nilai-nilai budaya dan spiritual yang mendalam. Melalui upaya pelestarian dan pendidikan, Saluang akan terus hidup dan menjadi bagian integral dari kehidupan masyarakat Minangkabau, menghubungkan masa lalu dengan masa depan.
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
