import pakaianData from '../../../DATA/pakaian.json';

const Pakaian = {
  async render() {
    const pakaianList = pakaianData.pakaian;
    return `
    <div tabindex="0" class="title">
      <h1>Pakaian Adat di Indonesia berdasarkan Provinsi</h1>
    </div>
    <div class="container">
      ${pakaianList.map((pakaian) => `
        <div class="card-container">
          <h2 tabindex="0">Provinsi ${pakaian.province}</h2>
            <div class="card-content">
              <h3 tabindex="0">${pakaian.name}</h3>
                <img src="${pakaian.pictureId}" alt="${pakaian.name}">
                <p tabindex="0">${pakaian.description}</p>
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

export default Pakaian;
