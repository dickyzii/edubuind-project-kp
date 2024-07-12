import adatData from '../../../DATA/adat.json';

const Adat = {
  async render() {
    const adatList = adatData.adat;
    return `
    <div tabindex="0" class="title">
        <h1>Adat Istiadat dan Tradisi di Indonesia berdasarkan Provinsi</h1>
      </div>
    <div class="container">
      ${adatList.map((adat) => `
        <div class="card-container">
          <h2 tabindex="0">Provinsi ${adat.province}</h2>
            <div class="card-content">
              <h3 tabindex="0">${adat.name}</h3>
                <img src="${adat.pictureId}" alt="${adat.name}">
                <p tabindex="0">${adat.description}</p>
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

export default Adat;
