import alatMusikData from '../../../../DATA/alatmusik-json/serunee.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Serune Kalee di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Serune Kalee ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Serune Kalee: Melodi Tradisional dari Aceh</h2>
          <p>
            Serune Kalee adalah alat musik tradisional yang berasal dari Aceh, Indonesia. Alat musik ini berbentuk seperti seruling dengan ukuran yang lebih besar dan memiliki suara yang khas. Serune Kalee sering dimainkan dalam berbagai acara adat dan upacara keagamaan, menciptakan melodi yang indah dan memikat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Serune Kalee telah menjadi bagian integral dari budaya Aceh selama berabad-abad. Alat musik ini digunakan dalam berbagai upacara adat, seperti pernikahan, penyambutan tamu penting, dan acara keagamaan. Nama "Serune Kalee" sendiri berasal dari bahasa Aceh yang berarti "seruling dengan suara yang melengking".
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Serune Kalee dimainkan dengan cara ditiup seperti seruling, namun memiliki teknik yang unik dan kompleks. Pemain Serune Kalee harus menguasai berbagai teknik tiupan dan jari untuk menghasilkan melodi yang harmonis. Suara yang dihasilkan memiliki karakteristik yang kuat dan dapat terdengar dari jarak yang jauh, membuatnya sangat cocok untuk upacara besar dan acara yang membutuhkan perhatian luas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Serune Kalee juga memiliki makna budaya dan spiritual yang mendalam bagi masyarakat Aceh. Alat musik ini sering dimainkan dalam upacara keagamaan dan ritual adat, sebagai simbol kesucian dan penghormatan. Melalui melodi Serune Kalee, nilai-nilai tradisional dan spiritual disampaikan kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan keberlangsungan tradisi ini, pendidikan dan pemeliharaan Serune Kalee menjadi sangat penting. Banyak sekolah dan lembaga budaya di Aceh mengajarkan cara bermain Serune Kalee kepada generasi muda, dengan harapan mereka dapat melestarikan dan mengembangkan warisan budaya ini. Melalui pendidikan formal dan informal, pengetahuan tentang Serune Kalee terus disebarluaskan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Serune Kalee adalah salah satu warisan budaya Aceh yang paling berharga. Dengan suara yang khas dan melodi yang memikat, alat musik ini tidak hanya menghibur tetapi juga menyampaikan nilai-nilai budaya dan spiritual yang mendalam. Melalui upaya pelestarian dan pendidikan, Serune Kalee akan terus hidup dan menjadi bagian integral dari kehidupan masyarakat Aceh, menghubungkan masa lalu dengan masa depan.
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
