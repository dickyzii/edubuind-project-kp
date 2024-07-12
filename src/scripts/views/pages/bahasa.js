import bahasaData from '../../../DATA/bahasa.json';

const Bahasa = {
  async render() {
    const bahasaList = bahasaData.bahasa;

    return `
    <div tabindex="0" class="title">
      <h1>Bahasa di Indonesia berdasarkan Provinsi</h1>
    </div>
    <div class="container">
      ${bahasaList.map((bahasa) => `
        <div class="card-container">
          <h2 tabindex="0">Provinsi ${bahasa.province}</h2>
            <div class="card-content">
              <h3 tabindex="0">${bahasa.name}</h3>
              <ul>
                ${bahasa.example.map((word) => `<li tabindex="0">${word}</li>`).join('')}
              </ul>
              <p tabindex="0">${bahasa.description || ''}</p>
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

export default Bahasa;
