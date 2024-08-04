import angklungData from '../../../../DATA/alatmusik-json/angklung.json';

const AngklungPage = {
  async render() {
    const alatMusikList = angklungData.musik;

    return `
         <!-- Google AdSense Script -->
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495"
              crossorigin="anonymous"></script>
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Angklung di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Angklung ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Angklung: Harmoni dari Sunda</h2>
          <p>
            Angklung adalah alat musik tradisional dari Sunda, Jawa Barat, Indonesia. Angklung terbuat dari bambu dan dimainkan dengan cara digoyangkan, menghasilkan suara yang harmonis dan menyenangkan. Alat musik ini sering digunakan dalam pertunjukan musik dan upacara adat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Angklung telah ada sejak abad ke-12 dan memiliki peranan penting dalam budaya Sunda. Alat musik ini digunakan dalam berbagai acara adat dan perayaan sebagai simbol persatuan dan keharmonisan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Angklung dimainkan dengan cara digoyangkan sehingga batang bambu bergetar dan menghasilkan nada. Teknik bermain melibatkan koordinasi tangan untuk mengatur nada-nada yang dihasilkan dan menciptakan harmoni.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Angklung memiliki makna budaya yang mendalam bagi masyarakat Sunda. Alat musik ini sering digunakan dalam upacara adat sebagai bentuk penghormatan dan perayaan, serta simbol keharmonisan dan persatuan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pendidikan dan pemeliharaan Angklung sangat penting untuk menjaga keberlanjutan tradisi ini. Banyak sekolah dan lembaga budaya di Jawa Barat yang mengajarkan cara bermain Angklung kepada generasi muda.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Angklung adalah salah satu alat musik tradisional yang sangat berharga dalam budaya Sunda. Dengan suara yang harmonis dan makna budaya yang mendalam, Angklung terus dilestarikan melalui pendidikan dan pertunjukan.
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

export default AngklungPage;
