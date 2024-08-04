import tarianData from '../../../../DATA/galleryjson/makyong.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
     <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Makyong di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Andun ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Makyong: Warisan Seni Pertunjukan Melayu yang Memukau</h2>
          <p>
            Tari Makyong adalah salah satu bentuk seni pertunjukan tradisional yang berasal dari budaya Melayu, khususnya berkembang di wilayah Riau dan Kepulauan Riau. Tarian ini menggabungkan unsur tari, musik, dan drama yang menceritakan berbagai kisah legenda dan mitos yang diwariskan turun-temurun.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Sejarah dan Asal-usul</h3>
          <p>
            Tari Makyong memiliki akar sejarah yang panjang, diperkirakan sudah ada sejak zaman Kerajaan Melayu Kuno. Tarian ini awalnya dipentaskan sebagai bentuk ritual pemujaan kepada roh nenek moyang dan dewa-dewi. Seiring perkembangan zaman, Tari Makyong menjadi hiburan rakyat yang sarat akan pesan moral dan nilai budaya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Elemen Seni Pertunjukan</h3>
          <p>
            Tari Makyong adalah gabungan dari seni tari, musik, dan drama. Para penari, yang juga berperan sebagai aktor, mengenakan kostum tradisional yang indah dan penuh warna. Musik pengiring yang dimainkan dengan alat musik tradisional seperti rebab, gendang, dan serunai menciptakan suasana magis yang memukau penonton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Simbolis dan Filosofis</h3>
          <p>
            Setiap gerakan dalam Tari Makyong memiliki makna simbolis yang dalam, mencerminkan berbagai aspek kehidupan dan alam semesta. Drama yang dipentaskan sering kali mengangkat tema-tema tentang kepahlawanan, cinta, dan perjuangan hidup, yang disampaikan dengan cara yang menghibur sekaligus mendidik.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Peran dalam Kehidupan Masyarakat</h3>
          <p>
            Tari Makyong tidak hanya sebagai bentuk hiburan, tetapi juga sebagai media pendidikan dan pelestarian nilai-nilai budaya Melayu. Tarian ini sering dipentaskan dalam berbagai upacara adat, festival budaya, dan acara-acara penting lainnya. Melalui Tari Makyong, generasi muda diajak untuk mengenal dan menghargai warisan budaya nenek moyang mereka.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pelestarian dan Pengajaran</h3>
          <p>
            Pelestarian Tari Makyong menjadi tanggung jawab bersama, baik pemerintah, lembaga budaya, maupun masyarakat. Upaya pelestarian ini dilakukan melalui pendidikan formal di sekolah-sekolah, pelatihan di sanggar-sanggar seni, serta promosi dan pementasan di tingkat nasional dan internasional. Dengan demikian, Tari Makyong diharapkan tetap hidup dan berkembang sebagai salah satu kekayaan budaya Indonesia.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Makyong adalah cerminan kekayaan seni dan budaya Melayu yang perlu dijaga dan dilestarikan. Melalui gerakan yang indah, musik yang memikat, dan drama yang menghibur, Tari Makyong menyampaikan pesan-pesan moral dan nilai-nilai kehidupan yang universal. Upaya pelestarian dan pengajaran Tari Makyong harus terus dilakukan agar warisan budaya ini tetap hidup dan dapat dinikmati oleh generasi mendatang.
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
