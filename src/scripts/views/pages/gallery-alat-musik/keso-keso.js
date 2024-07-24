import kesoKesoData from '../../../../DATA/alatmusik-json/keso-keso.json';

const KesoKesoPage = {
  async render() {
    const alatMusikList = kesoKesoData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Keso-keso di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Keso-keso ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Keso-keso: Tradisi dari Indonesia</h2>
          <p>
            Keso-keso adalah alat musik tradisional yang berasal dari Indonesia. Alat musik ini memiliki bentuk dan teknik permainan yang khas, sering digunakan dalam upacara adat dan pertunjukan musik tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Keso-keso memiliki sejarah panjang dalam budaya Indonesia, digunakan dalam berbagai konteks budaya dan ritual. Alat musik ini sering kali merupakan simbol penting dalam acara adat dan keagamaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Teknik bermain Keso-keso bervariasi tergantung pada jenisnya. Biasanya dimainkan dengan cara dipukul atau digesek, menghasilkan suara yang unik dan khas. Penguasaan teknik yang benar penting untuk menghasilkan suara yang sesuai.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Keso-keso memiliki makna budaya dan spiritual yang mendalam dalam masyarakat Indonesia. Alat musik ini sering digunakan dalam upacara adat, mewakili kekuatan budaya dan spiritualitas masyarakat setempat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk melestarikan Keso-keso sebagai bagian dari warisan budaya, pemeliharaan dan pendidikan sangat penting. Berbagai program pendidikan dan pelatihan membantu generasi muda memahami dan memainkan Keso-keso dengan benar.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Keso-keso adalah alat musik yang memegang peranan penting dalam budaya Indonesia. Dengan teknik permainan dan makna budaya yang unik, Keso-keso terus berkontribusi pada pelestarian tradisi dan budaya lokal.
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

export default KesoKesoPage;
