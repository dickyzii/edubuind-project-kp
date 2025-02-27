// src/views/pages/tarian.js
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
              <a class="image-link" data-name="${tarian.name.replace(/\s+/g, '-').toLowerCase()}" href="#">
                <img src="${tarian.pictureId}" alt="${tarian.name}">
              </a>
              <p tabindex="0">${tarian.description}</p>
              <p tabindex="0">Ibu Kota: ${tarian.capital}</p>
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
        const tarianName = event.currentTarget.dataset.name;
        window.location.hash = `#/gallery/${tarianName}`;
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

export default TarianPage;
