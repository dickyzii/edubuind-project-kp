import jukuleleData from '../../../../DATA/alatmusik-json/jukulele.json';

const JukulelePage = {
  async render() {
    const alatMusikList = jukuleleData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Jukulele di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Jukulele ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Jukulele: Tradisi dari Indonesia</h2>
          <p>
            Jukulele adalah alat musik tradisional dari Indonesia yang memiliki bentuk dan teknik permainan khas. Alat musik ini sering digunakan dalam berbagai acara adat dan pertunjukan seni.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Jukulele merupakan bagian dari tradisi musik Indonesia dengan sejarah yang kaya. Alat musik ini digunakan dalam berbagai upacara adat dan acara penting, mencerminkan kekayaan budaya lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Teknik bermain Jukulele melibatkan cara unik dan khas yang berbeda dari alat musik lainnya. Biasanya dimainkan dengan cara dipetik atau dipukul, menghasilkan suara yang khas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Jukulele memiliki makna budaya dan spiritual yang mendalam dalam masyarakat Indonesia. Alat musik ini sering dimainkan dalam konteks upacara adat dan ritual, melambangkan kekuatan budaya dan spiritualitas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Melestarikan Jukulele sebagai bagian dari warisan budaya memerlukan upaya pemeliharaan dan pendidikan. Berbagai inisiatif pendidikan dan pelatihan membantu generasi muda memahami dan memainkan Jukulele dengan benar.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Jukulele adalah alat musik tradisional yang penting dalam budaya Indonesia. Dengan teknik permainan dan makna budaya yang mendalam, Jukulele berperan besar dalam pelestarian tradisi dan budaya lokal.
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

export default JukulelePage;
