import kulinerData from '../../../DATA/kuliner.json';

const Kuliner = {
  async render() {
    const kulinerList = kulinerData.kuliner;

    return `
    <div tabindex="0" class="title">
      <h1>Kuliner di Indonesia berdasarkan Provinsi</h1>
    </div>
    <div class="container">
      ${kulinerList.map((kuliner) => `
        <div class="card-container">
          <h2 tabindex="0">Provinsi ${kuliner.province}</h2>
            <div class="card-content">
              <h3 tabindex="0">${kuliner.name}</h3>
                <img src="${kuliner.pictureId}" alt="${kuliner.name}">
                <p tabindex="0">${kuliner.description}</p>
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

export default Kuliner;
