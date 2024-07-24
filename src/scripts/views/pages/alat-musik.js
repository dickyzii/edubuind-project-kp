import alatMusikData from '../../../DATA/musik.json';

const AlatMusikPage = {
  async render() {
    const alatMusikList = alatMusikData.musik;

    return `
      <div tabindex="0" class="title">
        <h1>Alat Musik di Indonesia berdasarkan Provinsi</h1>
      </div>
      <div class="container">
        ${alatMusikList.map((musik) => `
          <div class="card-container">
            <h2 tabindex="0">Provinsi ${musik.province}</h2>
            <div class="card-content">
              <h3 tabindex="0">${musik.name}</h3>
              <a class="image-link" data-name="${musik.name.replace(/\s+/g, '-').toLowerCase()}" href="#">
                <img src="${musik.pictureId}" alt="${musik.name}">
              </a>
              <p tabindex="0">${musik.description}</p>
              <p tabindex="0">Ibu Kota: ${musik.capital}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  async afterRender() {
    // Tambahkan event listener pada link gambar
    const imageLinks = document.querySelectorAll('.image-link');
    imageLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const musikName = event.currentTarget.dataset.name;
        window.location.hash = `#/gallery-alat-musik/${musikName}`;
      });
    });
  },
};

export default AlatMusikPage;
