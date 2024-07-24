import tarianData from '../../../../DATA/galleryjson/reogponorogo.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Reog Ponorogo di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Reog Ponorogo ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Reog Ponorogo: Kekuatan dan Keindahan dari Tanah Jawa</h2>
          <p>
            Reog Ponorogo adalah salah satu kesenian tradisional Indonesia yang berasal dari Ponorogo, Jawa Timur. Tarian ini dikenal dengan atraksi yang kuat dan penuh energi, serta kostum yang spektakuler.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Reog Ponorogo memiliki sejarah yang panjang dan kaya, terkait erat dengan legenda dan mitos dari masyarakat Ponorogo. Tarian ini sering dipentaskan dalam berbagai acara adat dan festival, sebagai bentuk penghormatan terhadap leluhur dan kebudayaan setempat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan yang Kuat dan Atraktif</h3>
          <p>
            Reog Ponorogo dikenal dengan gerakan yang kuat dan atraktif, mencerminkan kekuatan dan keberanian. Atraksi utama dari Reog Ponorogo adalah penampilan barongan atau singa barong yang megah, dengan topeng besar dan kostum yang indah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Reog Ponorogo tidak hanya sebagai bentuk hiburan, tetapi juga memiliki makna budaya dan spiritual yang mendalam. Tarian ini mengandung pesan moral dan nilai-nilai kehidupan yang penting, serta menjadi sarana untuk mempererat ikatan sosial di masyarakat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Upaya pemeliharaan dan pelestarian Reog Ponorogo sangat penting untuk memastikan keberlangsungan warisan budaya ini. Banyak komunitas seni dan lembaga budaya yang aktif mengajarkan tarian ini kepada generasi muda, agar mereka dapat mengenal dan mencintai budaya mereka sendiri.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Reog Ponorogo adalah simbol kekuatan, keberanian, dan kekayaan budaya dari Ponorogo, Jawa Timur. Dengan gerakan yang kuat, makna yang dalam, dan kehadiran yang tak tergantikan dalam kehidupan masyarakat, kesenian ini tidak hanya memikat hati tetapi juga memperkuat ikatan sosial dan identitas budaya. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Reog Ponorogo akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan warisan budaya yang begitu berharga.
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
