import gambangLampungData from '../../../../DATA/alatmusik-json/gambang-lampung.json';

const GambangLampungPage = {
  async render() {
    const alatMusikList = gambangLampungData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Alat Musik Gambang Lampung di Indonesia</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${musik.pictureId}" alt="Gambang Lampung ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Alat Musik Gambang Lampung: Melodi Tradisional dari Lampung</h2>
          <p>
            Gambang Lampung adalah alat musik tradisional yang berasal dari Lampung, Indonesia. Alat musik ini merupakan salah satu instrumen perkusi yang digunakan dalam pertunjukan musik tradisional Lampung, memberikan kontribusi penting dalam melodi dan ritme.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Gambang Lampung memiliki sejarah panjang dalam budaya Lampung. Alat musik ini sering dimainkan dalam berbagai upacara adat dan pertunjukan musik, menggambarkan kekayaan tradisi lokal dan hubungan budaya yang mendalam.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Cara Bermain dan Teknik</h3>
          <p>
            Gambang Lampung dimainkan dengan cara dipukul menggunakan alat pemukul khusus. Teknik permainan ini memerlukan keterampilan dan koordinasi yang baik untuk menghasilkan suara yang harmonis dan sesuai dengan irama musik tradisional Lampung.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Spiritual</h3>
          <p>
            Selain sebagai alat musik, Gambang Lampung memiliki makna budaya yang mendalam bagi masyarakat Lampung. Alat musik ini sering menjadi bagian dari ritual adat dan perayaan, menyampaikan pesan budaya dan spiritual yang penting.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pendidikan</h3>
          <p>
            Untuk melestarikan tradisi Gambang Lampung, pendidikan dan pemeliharaan sangat penting. Banyak lembaga dan komunitas di Lampung yang mengajarkan cara memainkan Gambang Lampung kepada generasi muda, menjaga agar warisan budaya ini tetap hidup.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Gambang Lampung adalah simbol penting dari budaya Lampung dengan suara khas dan kontribusi besar dalam pertunjukan musik tradisional. Melalui usaha pelestarian dan pendidikan, alat musik ini akan terus memainkan peran yang signifikan dalam masyarakat Lampung.
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

export default GambangLampungPage;
