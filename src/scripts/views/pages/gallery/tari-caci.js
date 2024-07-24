import tarianData from '../../../../DATA/galleryjson/caci.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Caci di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Caci ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Caci: Seni Bela Diri Tradisional dari Flores</h2>
          <p>
            Tari Caci adalah salah satu bentuk seni bela diri tradisional yang berasal dari Flores, Nusa Tenggara Timur. Tarian ini tidak hanya memukau dengan gerakan yang dinamis tetapi juga sarat dengan makna budaya dan simbolis yang mendalam.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Caci berasal dari tradisi masyarakat Manggarai di Flores. Tarian ini biasanya dipentaskan dalam rangkaian upacara adat seperti pesta panen atau penyambutan tamu penting. Sebagai bentuk pertunjukan yang menggabungkan seni bela diri dan tarian, Tari Caci menggambarkan keberanian dan keperkasaan para pria Manggarai.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Perlengkapan</h3>
          <p>
            Tari Caci dikenal dengan gerakan yang cepat dan penuh semangat, di mana dua penari akan saling berhadapan dan bertarung menggunakan cambuk dan perisai. Penari juga mengenakan pakaian tradisional dan topi yang disebut "Sake," yang melambangkan perlindungan dan kekuatan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritualitas</h3>
          <p>
            Selain sebagai pertunjukan seni, Tari Caci memiliki makna budaya yang mendalam. Tarian ini dianggap sebagai bentuk syukur kepada leluhur dan dewa atas hasil panen yang melimpah. Pertarungan dalam Tari Caci juga melambangkan perjuangan hidup dan keberanian yang harus dimiliki oleh setiap pria Manggarai.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Caci sering dipentaskan dalam berbagai festival budaya dan pariwisata di Flores dan wilayah lainnya di Indonesia. Tarian ini menjadi salah satu daya tarik utama bagi wisatawan yang ingin menyaksikan keunikan dan keindahan budaya Manggarai.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Caci, banyak komunitas seni dan budaya di Flores yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Caci adalah simbol keindahan, keberanian, dan kekayaan budaya dari Flores. Dengan gerakan yang dinamis, makna yang mendalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat Manggarai, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Caci akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya Manggarai yang begitu berharga.
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
