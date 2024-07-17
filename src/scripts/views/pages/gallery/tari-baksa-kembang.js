import tarianData from '../../../../DATA/galleryjson/baksakembang.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Baksa Kembang di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Baksa Kembang ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Baksa Kembang: Keindahan Gerakan dan Makna Budaya dari Kalimantan Selatan</h2>
          <p>
            Tari Baksa Kembang adalah salah satu warisan budaya Indonesia yang kaya akan keindahan gerakan dan makna mendalam di balik setiap langkahnya. Berakar di tanah Kalimantan Selatan, tarian ini tidak hanya menghibur tetapi juga mengajarkan nilai-nilai tradisional dan spiritual kepada masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Baksa Kembang berasal dari masyarakat Banjar di Kalimantan Selatan, diperkirakan berasal dari zaman Kerajaan Banjar. Awalnya, tarian ini digunakan dalam upacara adat dan ritual keagamaan. Gerakannya yang lincah dan atraktif, disertai dengan irama dan musik khas Tari Baksa Kembang, menjadi daya tarik utama dalam pertunjukan ini. Tari Baksa Kembang tidak hanya sebagai bentuk seni, tetapi juga memuat nilai-nilai moral dan keagamaan yang kuat dalam setiap gerakannya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Lincah dan Simbolis</h3>
          <p>
            Tari Baksa Kembang dikenal dengan gerakan tangan dan kaki yang cepat dan lincah, yang menuntut koordinasi yang sangat baik antara para penari. Gerakan ini tidak hanya memukau secara visual, tetapi juga mengandung makna simbolis yang dalam. Beberapa gerakan mencerminkan kehidupan sehari-hari, sementara yang lain menggambarkan kisah-kisah epik atau nilai-nilai kearifan lokal. Setiap gerakan diikuti dengan musik Tari Baksa Kembang yang mengiringi, menciptakan harmoni yang memukau di antara penari dan penonton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tari Baksa Kembang tidak hanya sebagai pertunjukan seni semata, tetapi juga memiliki makna yang dalam dalam konteks budaya dan spiritual Banjar. Di banyak kesempatan, tarian ini menjadi bagian integral dari acara adat seperti pernikahan, upacara keagamaan, atau festival budaya. Melalui gerakan dan musik Tari Baksa Kembang yang kuat, tarian ini tidak hanya merayakan keberagaman budaya Banjar tetapi juga memperkuat identitas masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kehadiran dalam Kehidupan Masyarakat Banjar</h3>
          <p>
            Kehadiran Tari Baksa Kembang dalam kehidupan sehari-hari masyarakat Banjar menunjukkan betapa pentingnya warisan budaya ini dalam mempertahankan identitas lokal. Generasi muda diajak untuk belajar dan menghargai tarian ini melalui pendidikan formal dan informal, serta melalui pelatihan komunitas. Hal ini bertujuan untuk memastikan bahwa nilai-nilai tradisional Tari Baksa Kembang terus hidup dan berkembang di tengah arus globalisasi dan modernisasi.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Upaya pemeliharaan dan pengajaran Tari Baksa Kembang menjadi sangat penting untuk melestarikan warisan budaya yang berharga ini. Banyak sekolah dan lembaga seni di Kalimantan Selatan aktif mengajarkan tarian ini kepada generasi muda, dengan harapan mereka akan menjadi pelanjut dalam melestarikan dan mengembangkan seni budaya Banjar. Pendidikan formal juga mengintegrasikan Tari Baksa Kembang sebagai bagian dari kurikulum budaya, memastikan bahwa pengetahuan akan warisan ini tidak punah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Baksa Kembang adalah simbol keindahan, kekuatan, dan kekayaan budaya dari Kalimantan Selatan. Dengan gerakan yang lincah, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Banjar, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Baksa Kembang akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Banjar yang begitu berharga.
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
