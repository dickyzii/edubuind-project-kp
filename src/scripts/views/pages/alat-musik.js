import alatMusikData from '../../../DATA/musik.json';

const alatMusik = {
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
                  <img src="${musik.pictureId}" alt="${musik.name}">
                  <p tabindex="0">${musik.description}</p>
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

export default alatMusik;
