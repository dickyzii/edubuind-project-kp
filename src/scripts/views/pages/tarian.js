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
              <img src="${tarian.pictureId}" alt="${tarian.name}">
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
