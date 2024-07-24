import pikonData from '../../../../DATA/alatmusik-json/pikon.json';

const PikonPage = {
  async render() {
    const alatMusikList = pikonData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Pikon di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Pikon ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Pikon: Tradisi dari Papua</h2>
          <p>
            Pikon adalah alat musik tradisional dari Papua, Indonesia. Alat musik ini merupakan instrumen tiup yang terbuat dari bahan alami. Pikon sering dimainkan dalam upacara adat dan acara keagamaan di Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Pikon telah digunakan dalam budaya Papua selama bertahun-tahun. Alat musik ini memainkan peran penting dalam berbagai upacara adat dan ritual, mencerminkan kekayaan budaya dan sejarah Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Pikon dimainkan dengan cara ditiup. Teknik bermainnya mirip dengan alat musik tiup lainnya, namun memiliki nuansa suara yang unik. Suara yang dihasilkan sering kali digunakan dalam pertunjukan adat dan festival.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Pikon memiliki makna budaya dan spiritual yang mendalam dalam masyarakat Papua. Alat musik ini sering digunakan dalam ritual adat dan acara keagamaan sebagai simbol kekuatan dan keharmonisan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk menjaga kelestarian tradisi Pikon, penting untuk melakukan pemeliharaan dan pendidikan. Banyak komunitas di Papua yang mengajarkan cara memainkan Pikon kepada generasi muda untuk memastikan warisan budaya ini terus hidup.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Pikon adalah alat musik tradisional yang penting dalam budaya Papua. Dengan karakteristik suara yang khas dan peranannya dalam berbagai acara adat, Pikon berkontribusi besar terhadap pelestarian budaya lokal.
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

export default PikonPage;
