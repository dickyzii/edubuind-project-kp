// src/views/pages/tarian.js
import tarianData from '../../../DATA/tarian.json';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;

    return `
      <div tabindex="0" class="title">
        <h1>Tarian di Indonesia berdasarkan Provinsi</h1>
      </div>
      <div class="container">
        ${tarianList.map((tarian) => `
          <div class="card-container">
            <h2 tabindex="0">Provinsi ${tarian.province}</h2>
            <div class="card-content">
              <h3 tabindex="0">${tarian.name}</h3>
              <a class="image-link" data-name="${tarian.name.replace(/\s+/g, '-').toLowerCase()}" href="#">
                <img src="${tarian.pictureId}" alt="${tarian.name}">
              </a>
              <p tabindex="0">${tarian.description}</p>
              <p tabindex="0">Ibu Kota: ${tarian.capital}</p>
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
        const tarianName = event.currentTarget.dataset.name;
        window.location.hash = `#/gallery/${tarianName}`;
      });
    });
  },
};

export default TarianPage;
