// src/views/pages/pakaian.js
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
      <!-- Placeholder for AdSense -->
      <div id="adsense-placeholder"></div>
    `;
  },

  async afterRender() {
    // Tambahkan kode AdSense ke placeholder
    const adsensePlaceholder = document.getElementById('adsense-placeholder');
    const adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495';
    adsenseScript.crossOrigin = 'anonymous';
    adsensePlaceholder.appendChild(adsenseScript);
  },
};

export default Pakaian;
