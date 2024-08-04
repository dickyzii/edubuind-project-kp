import tarianData from '../../../../DATA/galleryjson/gendingsriwijaya.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Gending Sriwijaya di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Gending Sriwijaya ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Gending Sriwijaya: Keindahan Gerakan dan Makna Budaya dari Sumatera Selatan</h2>
          <p>
            Tari Gending Sriwijaya adalah salah satu warisan budaya Indonesia yang kaya akan keindahan gerakan dan makna mendalam di balik setiap langkahnya. Berakar di tanah Sumatera Selatan, tarian ini tidak hanya menghibur tetapi juga mengajarkan nilai-nilai tradisional dan spiritual kepada masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Gending Sriwijaya berasal dari masyarakat suku Melayu di Sumatera Selatan, diperkirakan berasal dari zaman Kerajaan Sriwijaya. Awalnya, tarian ini digunakan dalam upacara adat dan ritual keagamaan. Gerakannya yang anggun, disertai dengan irama dan musik khas Gending Sriwijaya, menjadi daya tarik utama dalam pertunjukan ini. Tari Gending Sriwijaya tidak hanya sebagai bentuk seni, tetapi juga memuat nilai-nilai moral dan keagamaan yang kuat dalam setiap gerakannya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Anggun dan Simbolis</h3>
          <p>
            Tari Gending Sriwijaya dikenal dengan gerakan tangan dan kaki yang anggun dan serempak, yang menuntut koordinasi yang sangat baik antara para penari. Gerakan ini tidak hanya memukau secara visual, tetapi juga mengandung makna simbolis yang dalam. Beberapa gerakan mencerminkan kehidupan sehari-hari, sementara yang lain menggambarkan kisah-kisah epik atau nilai-nilai kearifan lokal. Setiap gerakan diikuti dengan musik Gending Sriwijaya yang mengiringi, menciptakan harmoni yang memukau di antara penari dan penonton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tari Gending Sriwijaya tidak hanya sebagai pertunjukan seni semata, tetapi juga memiliki makna yang dalam dalam konteks budaya dan spiritual Melayu. Di banyak kesempatan, tarian ini menjadi bagian integral dari acara adat seperti pernikahan, upacara keagamaan, atau festival budaya. Melalui gerakan dan musik Gending Sriwijaya yang kuat, tarian ini tidak hanya merayakan keberagaman budaya Melayu tetapi juga memperkuat identitas masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kehadiran dalam Kehidupan Masyarakat Melayu</h3>
          <p>
            Kehadiran Tari Gending Sriwijaya dalam kehidupan sehari-hari masyarakat Melayu menunjukkan betapa pentingnya warisan budaya ini dalam mempertahankan identitas lokal. Generasi muda diajak untuk belajar dan menghargai tarian ini melalui pendidikan formal dan informal, serta melalui pelatihan komunitas. Hal ini bertujuan untuk memastikan bahwa nilai-nilai tradisional Tari Gending Sriwijaya terus hidup dan berkembang di tengah arus globalisasi dan modernisasi.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Upaya pemeliharaan dan pengajaran Tari Gending Sriwijaya menjadi sangat penting untuk melestarikan warisan budaya yang berharga ini. Banyak sekolah dan lembaga seni di Sumatera Selatan aktif mengajarkan tarian ini kepada generasi muda, dengan harapan mereka akan menjadi pelanjut dalam melestarikan dan mengembangkan seni budaya Melayu. Pendidikan formal juga mengintegrasikan Tari Gending Sriwijaya sebagai bagian dari kurikulum budaya, memastikan bahwa pengetahuan akan warisan ini tidak punah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Gending Sriwijaya adalah simbol keindahan, kekuatan, dan kekayaan budaya dari Sumatera Selatan. Dengan gerakan yang anggun, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Melayu, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Gending Sriwijaya akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Melayu yang begitu berharga.
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
