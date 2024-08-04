// src/views/pages/alatMusik.js
import alatMusikData from '../../../DATA/musik.json';

const AlatMusikPage = {
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
              <a class="image-link" data-name="${musik.name.replace(/\s+/g, '-').toLowerCase()}" href="#">
                <img src="${musik.pictureId}" alt="${musik.name}">
              </a>
              <p tabindex="0">${musik.description}</p>
              <p tabindex="0">Ibu Kota: ${musik.capital}</p>
            </div>
          </div>
        `).join('')}
      </div>
      <!-- Placeholder for AdSense -->
      <div id="adsense-placeholder"></div>
    `;
  },

  async afterRender() {
    // Tambahkan event listener pada link gambar
    const imageLinks = document.querySelectorAll('.image-link');
    imageLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const musikName = event.currentTarget.dataset.name;
        window.location.hash = `#/gallery-alat-musik/${musikName}`;
      });
    });

    // Tambahkan kode AdSense ke placeholder
    const adsensePlaceholder = document.getElementById('adsense-placeholder');
    const adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5908431925689495';
    adsenseScript.crossOrigin = 'anonymous';
    adsensePlaceholder.appendChild(adsenseScript);
  },
};

export default AlatMusikPage;
