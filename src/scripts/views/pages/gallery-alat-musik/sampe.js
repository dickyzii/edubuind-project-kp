import sampeData from '../../../../DATA/alatmusik-json/sampe.json';

const SampePage = {
  async render() {
    const alatMusikList = sampeData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Sampe di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Sampe ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Sampe: Melodi Tradisional dari Kalimantan</h2>
          <p>
            Sampe adalah alat musik tradisional dari Kalimantan, Indonesia. Alat musik ini merupakan jenis alat musik petik yang sering dimainkan dalam pertunjukan musik tradisional Dayak, memberikan kontribusi pada harmoni dan ritme dalam musik.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Sampe memiliki sejarah panjang dalam tradisi musik Kalimantan. Alat musik ini digunakan dalam berbagai upacara adat dan perayaan oleh suku Dayak, mencerminkan kekayaan budaya lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Sampe dimainkan dengan cara dipetik menggunakan jari atau alat pemetik. Teknik permainan ini memerlukan keterampilan khusus untuk menghasilkan suara yang merdu dan harmonis. Sampe sering menjadi bagian integral dari pertunjukan musik tradisional Kalimantan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Sampe tidak hanya sebagai alat musik tetapi juga memiliki makna budaya yang mendalam bagi masyarakat Dayak. Alat musik ini sering digunakan dalam ritual adat dan acara penting, menyampaikan nilai-nilai budaya dan spiritual.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pendidikan dan pemeliharaan Sampe sangat penting untuk melestarikan tradisi ini. Banyak lembaga dan komunitas di Kalimantan yang mengajarkan cara bermain Sampe kepada generasi muda, memastikan warisan budaya ini tetap hidup.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Sampe adalah alat musik yang penting dalam tradisi Kalimantan. Dengan suara khas dan peran penting dalam pertunjukan musik tradisional, Sampe adalah simbol kekayaan budaya yang perlu dilestarikan melalui pendidikan dan pemeliharaan.
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

export default SampePage;
