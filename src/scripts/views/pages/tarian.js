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
<<<<<<< HEAD
              <a href="#/gallery-tarian/${tarian.id}">
=======
              <a href="https://www.shutterstock.com/id/search/${tarian.name.replace(/\s+/g, '-').toLowerCase()}">
>>>>>>> e809acee36bf470dafadfa23cd9091be72418edf
                <img src="${tarian.pictureId}" alt="${tarian.name}">
              </a>
              <p tabindex="0">${tarian.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  async afterRender() {
    // Implementasi setelah render di sini
  },
};

export default TarianPage;
