import tarianData from '../../../../DATA/galleryjson/andun.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Andun di Indonesia</h1>
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
          <h2>Tari Andun: Keindahan Gerakan dan Makna Budaya dari Bengkulu</h2>
          <p>
            Tari Andun adalah salah satu warisan budaya Indonesia yang kaya akan keindahan gerakan dan makna mendalam di balik setiap langkahnya. Berakar di tanah Bengkulu, tarian ini tidak hanya menghibur tetapi juga mengajarkan nilai-nilai tradisional dan spiritual kepada masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Andun berasal dari masyarakat suku Rejang di Bengkulu, diperkirakan berasal dari zaman Kerajaan Rejang. Awalnya, tarian ini digunakan dalam upacara adat dan ritual keagamaan. Gerakannya yang lincah dan atraktif, disertai dengan irama dan musik khas Tari Andun, menjadi daya tarik utama dalam pertunjukan ini. Tari Andun tidak hanya sebagai bentuk seni, tetapi juga memuat nilai-nilai moral dan keagamaan yang kuat dalam setiap gerakannya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Lincah dan Simbolis</h3>
          <p>
            Tari Andun dikenal dengan gerakan tangan dan kaki yang cepat dan lincah, yang menuntut koordinasi yang sangat baik antara para penari. Gerakan ini tidak hanya memukau secara visual, tetapi juga mengandung makna simbolis yang dalam. Beberapa gerakan mencerminkan kehidupan sehari-hari, sementara yang lain menggambarkan kisah-kisah epik atau nilai-nilai kearifan lokal. Setiap gerakan diikuti dengan musik Tari Andun yang mengiringi, menciptakan harmoni yang memukau di antara penari dan penonton.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Tari Andun tidak hanya sebagai pertunjukan seni semata, tetapi juga memiliki makna yang dalam dalam konteks budaya dan spiritual Rejang. Di banyak kesempatan, tarian ini menjadi bagian integral dari acara adat seperti pernikahan, upacara keagamaan, atau festival budaya. Melalui gerakan dan musik Tari Andun yang kuat, tarian ini tidak hanya merayakan keberagaman budaya Rejang tetapi juga memperkuat identitas masyarakatnya.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kehadiran dalam Kehidupan Masyarakat Rejang</h3>
          <p>
            Kehadiran Tari Andun dalam kehidupan sehari-hari masyarakat Rejang menunjukkan betapa pentingnya warisan budaya ini dalam mempertahankan identitas lokal. Generasi muda diajak untuk belajar dan menghargai tarian ini melalui pendidikan formal dan informal, serta melalui pelatihan komunitas. Hal ini bertujuan untuk memastikan bahwa nilai-nilai tradisional Tari Andun terus hidup dan berkembang di tengah arus globalisasi dan modernisasi.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Upaya pemeliharaan dan pengajaran Tari Andun menjadi sangat penting untuk melestarikan warisan budaya yang berharga ini. Banyak sekolah dan lembaga seni di Bengkulu aktif mengajarkan tarian ini kepada generasi muda, dengan harapan mereka akan menjadi pelanjut dalam melestarikan dan mengembangkan seni budaya Rejang. Pendidikan formal juga mengintegrasikan Tari Andun sebagai bagian dari kurikulum budaya, memastikan bahwa pengetahuan akan warisan ini tidak punah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Andun adalah simbol keindahan, kekuatan, dan kekayaan budaya dari Bengkulu. Dengan gerakan yang lincah, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Rejang, tarian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Andun akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Rejang yang begitu berharga.
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

    // Tambahkan script Google AdSense
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  },
};

export default TarianPage;
