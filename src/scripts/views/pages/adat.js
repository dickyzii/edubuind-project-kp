// src/views/pages/adat.js
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

export default Adat;
