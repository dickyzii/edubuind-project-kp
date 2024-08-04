import alatMusikData from '../../../../DATA/alatmusik-json/kompang.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Kompang di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Kompang ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Kompang: Gendang Tradisional dari Malaysia dan Indonesia</h2>
          <p>
            Kompang adalah alat musik tradisional yang berbentuk seperti drum kecil dan dimainkan dengan cara dipukul. Alat musik ini sering dimainkan dalam berbagai acara adat, terutama di Malaysia dan beberapa daerah di Indonesia. Kompang menghasilkan suara yang berirama dan sering digunakan dalam pertunjukan musik tradisional dan tarian.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Kompang memiliki akar sejarah yang panjang dan telah menjadi bagian dari budaya tradisional di Malaysia dan Indonesia. Alat musik ini dikenal sejak zaman dahulu dan sering digunakan dalam berbagai acara adat seperti perayaan, pernikahan, dan festival. Nama "Kompang" berasal dari bahasa Melayu yang berarti "drum kecil".
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Kompang dimainkan dengan cara dipukul menggunakan tangan atau alat pemukul khusus. Teknik bermainnya melibatkan variasi pukulan untuk menciptakan pola ritme yang beragam. Pemain Kompang biasanya menguasai berbagai teknik pukulan untuk menghasilkan melodi yang harmonis dan mengiringi tarian atau lagu.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Kompang juga memiliki makna budaya yang mendalam. Alat musik ini sering dimainkan dalam acara adat dan ritual sebagai simbol kehormatan dan keberuntungan. Melalui melodi Kompang, nilai-nilai tradisional dan budaya disampaikan kepada masyarakat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan keberlangsungan tradisi ini, pendidikan dan pemeliharaan Kompang menjadi penting. Banyak lembaga budaya dan sekolah di Malaysia dan Indonesia yang mengajarkan cara bermain Kompang kepada generasi muda, agar tradisi ini tetap hidup. Melalui pendidikan dan pelatihan, pengetahuan tentang Kompang terus disebarluaskan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Kompang adalah salah satu warisan budaya yang berharga di Malaysia dan Indonesia. Dengan suara yang khas dan ritme yang berirama, alat musik ini tidak hanya menghibur tetapi juga menyampaikan nilai-nilai budaya yang mendalam. Melalui upaya pelestarian dan pendidikan, Kompang akan terus menjadi bagian integral dari kehidupan masyarakat, menghubungkan masa lalu dengan masa depan.
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
