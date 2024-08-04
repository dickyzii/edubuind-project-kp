import tarianData from '../../../../DATA/galleryjson/rudat.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Tari Rudat di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Rudat ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Rudat: Seni Pertunjukan Tradisional dari Lombok</h2>
          <p>
            Tari Rudat adalah salah satu bentuk seni pertunjukan tradisional yang berasal dari Lombok, Nusa Tenggara Barat. Tarian ini menggabungkan elemen tari, musik, dan bela diri, serta mencerminkan nilai-nilai budaya dan spiritual masyarakat Lombok.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Rudat berasal dari tradisi masyarakat Sasak di Lombok dan diperkirakan telah ada sejak masa penyebaran Islam di daerah tersebut. Tarian ini biasanya dipertunjukkan dalam upacara adat, perayaan keagamaan, dan acara-acara penting lainnya. Sebagai bentuk seni yang menggabungkan tarian dan gerakan bela diri, Tari Rudat mencerminkan keberanian dan kearifan lokal masyarakat Lombok.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Perlengkapan</h3>
          <p>
            Tari Rudat dikenal dengan gerakan yang dinamis dan energik, di mana para penari mengenakan pakaian tradisional dengan aksesoris khas. Gerakan tari ini sering kali diiringi oleh musik tradisional yang dimainkan dengan alat musik seperti gendang, gambus, dan seruling, menciptakan suasana yang meriah dan penuh semangat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritualitas</h3>
          <p>
            Tari Rudat tidak hanya sekadar hiburan, tetapi juga memiliki makna spiritual dan budaya yang mendalam. Tarian ini sering kali dianggap sebagai sarana untuk menyampaikan pesan moral dan keagamaan, serta sebagai bentuk penghormatan kepada leluhur dan dewa-dewa.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Rudat sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Lombok dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan kekayaan budaya dan tradisi masyarakat Sasak.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Rudat, banyak komunitas seni dan budaya di Lombok yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Rudat adalah simbol keindahan, keberanian, dan kekayaan budaya
            dari Lombok. Dengan gerakan yang dinamis, makna yang mendalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Sasak, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Rudat akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Sasak yang begitu berharga.
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
