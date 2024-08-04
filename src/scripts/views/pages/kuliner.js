// src/views/pages/kuliner.js
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

export default Kuliner;
