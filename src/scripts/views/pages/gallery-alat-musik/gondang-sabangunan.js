import alatMusikData from '../../../../DATA/alatmusik-json/sabangunan.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Gondang Sabangunan di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Gondang Sabangunan ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Gondang Sabangunan: Irama Tradisional dari Sumatra Utara</h2>
          <p>
            Gondang Sabangunan adalah alat musik tradisional yang berasal dari Sumatra Utara, Indonesia. Alat musik ini terdiri dari beberapa jenis gendang dan instrumen lain yang dimainkan secara bersama-sama untuk menciptakan musik yang penuh semangat dan ritme yang kuat. Gondang Sabangunan sering dimainkan dalam upacara adat dan festival budaya, menciptakan suasana yang meriah dan dinamis.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Gondang Sabangunan telah menjadi bagian integral dari budaya Batak selama berabad-abad. Alat musik ini digunakan dalam berbagai upacara adat, seperti pernikahan, pemakaman, dan ritual keagamaan. Nama "Gondang Sabangunan" sendiri merujuk pada jenis musik gondang yang dimainkan dalam upacara-upacara besar dan penting.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Gondang Sabangunan dimainkan dengan cara menabuh gendang dan instrumen lainnya secara bersama-sama. Pemain Gondang Sabangunan harus memiliki koordinasi dan keterampilan yang baik untuk menghasilkan musik yang harmonis dan energik. Irama yang dihasilkan memiliki karakteristik yang kuat dan menggugah semangat, membuatnya sangat cocok untuk acara-acara yang membutuhkan suasana meriah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Gondang Sabangunan juga memiliki makna budaya dan spiritual yang mendalam bagi masyarakat Batak. Alat musik ini sering dimainkan dalam upacara keagamaan dan ritual adat, sebagai simbol penghormatan dan kekuatan. Melalui irama Gondang Sabangunan, nilai-nilai tradisional dan spiritual disampaikan kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan keberlangsungan tradisi ini, pendidikan dan pemeliharaan Gondang Sabangunan menjadi sangat penting. Banyak sekolah dan lembaga budaya di Sumatra Utara mengajarkan cara bermain Gondang Sabangunan kepada generasi muda, dengan harapan mereka dapat melestarikan dan mengembangkan warisan budaya ini. Melalui pendidikan formal dan informal, pengetahuan tentang Gondang Sabangunan terus disebarluaskan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Gondang Sabangunan adalah salah satu warisan budaya Batak yang paling berharga. Dengan irama yang khas dan musik yang penuh semangat, alat musik ini tidak hanya menghibur tetapi juga menyampaikan nilai-nilai budaya dan spiritual yang mendalam. Melalui upaya pelestarian dan pendidikan, Gondang Sabangunan akan terus hidup dan menjadi bagian integral dari kehidupan masyarakat Batak, menghubungkan masa lalu dengan masa depan.
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
