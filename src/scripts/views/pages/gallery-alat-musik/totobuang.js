import totobuangData from '../../../../DATA/alatmusik-json/totobuang.json';

const TotobuangPage = {
  async render() {
    const alatMusikList = totobuangData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Totobuang di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Totobuang ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Totobuang: Tradisi dari Indonesia</h2>
          <p>
            Totobuang adalah alat musik tradisional dari Indonesia yang terbuat dari bahan tertentu dan dimainkan dengan cara tertentu. Alat musik ini memiliki peran penting dalam berbagai upacara adat dan pertunjukan musik tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Totobuang memiliki sejarah panjang dan merupakan bagian dari budaya tradisional Indonesia. Digunakan dalam berbagai upacara adat dan acara penting, alat musik ini sering kali menjadi simbol budaya yang kuat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Teknik bermain Totobuang bervariasi tergantung pada jenis dan cara pembuatan alat musik ini. Biasanya dimainkan dengan cara dipukul atau digesek, menghasilkan suara yang khas dan unik.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Totobuang tidak hanya berfungsi sebagai alat musik, tetapi juga memiliki makna budaya dan spiritual dalam masyarakat Indonesia. Alat musik ini sering digunakan dalam upacara adat dan ritual, menandakan kekuatan budaya dan spiritualitas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Melestarikan Totobuang sebagai bagian dari warisan budaya memerlukan upaya pemeliharaan dan pendidikan yang baik. Berbagai inisiatif pendidikan dan pelatihan membantu generasi muda memahami dan memainkan Totobuang dengan benar.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Totobuang adalah alat musik yang penting dalam tradisi Indonesia. Dengan teknik permainan yang khas dan makna budaya yang mendalam, Totobuang berkontribusi pada pelestarian tradisi dan budaya lokal.
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

export default TotobuangPage;
