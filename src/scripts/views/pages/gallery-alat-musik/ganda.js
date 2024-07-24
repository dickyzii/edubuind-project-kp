import gandaData from '../../../../DATA/alatmusik-json/ganda.json';

const GandaPage = {
  async render() {
    const alatMusikList = gandaData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Ganda di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Ganda ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Ganda: Suara Tradisional dari Sulawesi Tengah</h2>
          <p>
            Ganda adalah alat musik tradisional yang digunakan dalam berbagai upacara adat dan pertunjukan musik di Indonesia. Alat musik ini biasanya terbuat dari bahan yang menghasilkan suara khas dan memiliki peran penting dalam budaya lokal.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Ganda memiliki akar budaya yang dalam di berbagai daerah di Indonesia. Meskipun sering dipandang sebagai alat musik lokal, Ganda telah memainkan peran penting dalam ritual adat dan acara budaya sepanjang sejarah.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Ganda dimainkan dengan berbagai teknik, tergantung pada jenisnya. Biasanya, alat musik ini dipukul atau digesek untuk menghasilkan suara. Teknik bermain yang tepat penting untuk menghasilkan nada yang harmonis dan sesuai dengan kebutuhan pertunjukan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Dalam konteks budaya dan spiritual, Ganda sering digunakan dalam upacara adat dan acara keagamaan. Alat musik ini memiliki makna simbolis yang mendalam, melambangkan kekuatan budaya dan spiritualitas masyarakat setempat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk memastikan bahwa Ganda tetap terjaga sebagai bagian dari warisan budaya, pemeliharaan dan pendidikan sangat penting. Berbagai program pendidikan musik dan pelatihan tradisional membantu generasi muda untuk memahami dan memainkan Ganda dengan benar.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Ganda adalah alat musik yang mencerminkan kekayaan budaya Indonesia. Dengan peranannya dalam upacara adat dan pertunjukan musik, Ganda terus berkontribusi pada pelestarian tradisi dan budaya lokal.
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

export default GandaPage;
