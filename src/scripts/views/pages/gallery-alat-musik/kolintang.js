import kolintangData from '../../../../DATA/alatmusik-json/kolintang.json';

const KolintangPage = {
  async render() {
    const alatMusikList = kolintangData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Kolintang di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Kolintang ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Kolintang: Melodi Indah dari Sulawesi Utara</h2>
          <p>
            Kolintang adalah alat musik tradisional yang berasal dari Sulawesi Utara, Indonesia. Alat musik ini berupa alat pukul yang terbuat dari kayu, menghasilkan suara yang melodius dan sering digunakan dalam berbagai pertunjukan musik tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Kolintang memiliki sejarah panjang dalam budaya Minahasa. Alat musik ini sudah ada sejak lama dan digunakan dalam berbagai upacara adat serta pertunjukan, mencerminkan kekayaan budaya Sulawesi Utara.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Kolintang dimainkan dengan cara dipukul menggunakan palu kecil. Teknik memainkan Kolintang memerlukan keahlian khusus untuk menghasilkan nada yang harmonis. Biasanya dimainkan dalam ansambel musik tradisional.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Kolintang memiliki makna budaya yang mendalam bagi masyarakat Minahasa. Selain digunakan dalam upacara adat, Kolintang juga dianggap sebagai simbol kekayaan budaya dan warisan leluhur.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Pemeliharaan Kolintang penting untuk melestarikan tradisi musik ini. Pendidikan mengenai Kolintang diajarkan di sekolah-sekolah musik dan lembaga budaya di Sulawesi Utara untuk memastikan alat musik ini tetap terjaga.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Kolintang adalah alat musik yang sangat berharga dalam budaya Sulawesi Utara. Dengan suara yang khas dan perannya dalam berbagai pertunjukan, Kolintang terus menjadi simbol dari kekayaan budaya Minahasa.
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

export default KolintangPage;
