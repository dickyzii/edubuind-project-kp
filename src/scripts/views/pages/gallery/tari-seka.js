import tarianData from '../../../../DATA/galleryjson/seka.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Seka di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Seka ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Seka: Dinamika dan Kehidupan Budaya Pesisir Papua</h2>
          <p>
            Tari Seka adalah salah satu tarian tradisional yang berasal dari wilayah pesisir Papua, terutama di daerah Teluk Cenderawasih dan sekitarnya. Tarian ini menggambarkan kehidupan masyarakat pesisir yang dinamis dan penuh semangat, dengan gerakan melingkar dan langkah-langkah cepat yang mencerminkan keharmonisan dan kebersamaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal dan Nama</h3>
          <p>
            Nama "Seka" berasal dari kata dalam bahasa setempat yang memiliki makna khusus terkait dengan tarian tersebut. Tari Seka sering ditampilkan dalam berbagai acara adat, perayaan, dan upacara penting, mempererat ikatan sosial dan budaya di antara anggota komunitas.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan Dinamis dan Enerjik</h3>
          <p>
            Gerakan Tari Seka cenderung dinamis dan energik, dengan banyak gerakan melingkar dan langkah-langkah cepat. Tarian ini sering melibatkan gerakan tangan dan kaki yang sinkron, mencerminkan keharmonisan dan kebersamaan. Setiap gerakan diiringi oleh irama alat musik tradisional Papua, seperti tifa, yang menambah semangat dan keceriaan tarian.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna dan Fungsi Sosial</h3>
          <p>
            Tari Seka memiliki fungsi untuk mempererat ikatan sosial dan budaya di antara anggota komunitas. Selain itu, tarian ini juga digunakan sebagai sarana untuk menyampaikan pesan-pesan moral dan nilai-nilai tradisional kepada generasi muda. Melalui tarian ini, nilai-nilai kebersamaan dan harmoni dalam masyarakat pesisir Papua tetap terjaga.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kostum Tradisional</h3>
          <p>
            Penari Seka biasanya mengenakan kostum tradisional yang terbuat dari bahan alami seperti daun, kulit kayu, dan anyaman. Kostum ini sering dihiasi dengan berbagai aksesoris yang mencerminkan kekayaan budaya dan keindahan alam Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Seka adalah salah satu bentuk ekspresi budaya yang penting dari masyarakat pesisir Papua. Tarian ini tidak hanya menggambarkan keindahan gerakan dan ritme, tetapi juga mengandung makna mendalam terkait dengan kehidupan, kebersamaan, dan nilai-nilai tradisional masyarakat Papua. Melalui Tari Seka, generasi muda diajak untuk menghargai dan melestarikan warisan budaya yang kaya ini, memastikan bahwa nilai-nilai dan tradisi ini terus hidup dan berkembang di masa depan.
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
