import tarianData from '../../../../DATA/galleryjson/sajojo.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Galeri Tari Sajojo di Indonesia</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian, index) => `
          <div class="gallery-container">
            <div class="image-link" data-index="${index}">
              <img src="${tarian.pictureId}" alt="Tari Sajojo ${index + 1}">
            </div>
          </div>
        `).join('')}
      </div>
      <div tabindex="0" class="deskripsi">
        <div class="deskripsi-container">
          <h2>Tari Sajojo: Energi dan Keceriaan dari Papua</h2>
          <p>
            Tari Sajojo adalah tarian tradisional dari Papua yang penuh dengan energi dan keceriaan. Tarian ini sering ditampilkan dalam berbagai acara adat dan perayaan sebagai bentuk ungkapan kebahagiaan dan kebersamaan.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Asal-usul dan Sejarah</h3>
          <p>
            Tari Sajojo berasal dari masyarakat Papua dan telah menjadi bagian dari budaya mereka selama berabad-abad. Tarian ini biasanya ditampilkan dalam upacara adat, pesta, dan festival untuk merayakan momen-momen penting dalam kehidupan masyarakat.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Gerakan dan Musik</h3>
          <p>
            Tari Sajojo ditandai dengan gerakan yang dinamis dan ritmis, diiringi oleh musik tradisional yang menggunakan alat musik seperti tifa dan suling. Gerakan tarian ini sering kali mencerminkan keceriaan dan semangat kebersamaan masyarakat Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Makna Budaya dan Simbolis</h3>
          <p>
            Tari Sajojo tidak hanya sebagai hiburan, tetapi juga memiliki makna simbolis yang mendalam. Tarian ini menggambarkan kebersamaan, kegembiraan, dan solidaritas di antara masyarakat Papua. Melalui Tari Sajojo, masyarakat Papua mengekspresikan rasa cinta dan kebanggaan mereka terhadap budaya dan tradisi mereka.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pertunjukan Modern</h3>
          <p>
            Saat ini, Tari Sajojo sering dipertunjukkan dalam berbagai festival budaya dan acara pariwisata di Papua dan seluruh Indonesia. Tarian ini menjadi daya tarik bagi wisatawan yang ingin menyaksikan dan merasakan keceriaan budaya Papua.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Pentingnya Pemeliharaan dan Pelestarian</h3>
          <p>
            Untuk memastikan kelangsungan Tari Sajojo, banyak komunitas seni dan budaya di Papua yang aktif mengajarkan tarian ini kepada generasi muda. Melalui pelatihan dan pertunjukan rutin, mereka berusaha untuk melestarikan dan mengembangkan warisan budaya ini.
          </p>
        </div>

        <div class="deskripsi-container">
          <h3>Kesimpulan</h3>
          <p>
            Tari Sajojo adalah simbol energi, keceriaan, dan kebersamaan dari Papua. Dengan gerakan yang dinamis dan musik yang meriah, tarian ini tidak hanya memikat hati tetapi juga memperkuat identitas budaya Papua. Melalui upaya pemeliharaan, pengajaran, dan pengembangan, Tari Sajojo akan terus hidup dan berbicara kepada generasi mendatang tentang keindahan dan keceriaan warisan budaya Papua yang begitu berharga.
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
