import tarianData from '../../../../DATA/gallery-tarian.json';
// eslint-disable-next-line import/named
import { createGalleryUrl } from '../../../routes/url-parser';

const TarianPage = {
  async render() {
    const tarianList = tarianData.tarian;
    console.log(tarianList); // Log untuk memeriksa data

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
              <a href="${createGalleryUrl(tarian.id)}">
                <img src="${tarian.pictureId}" alt="${tarian.name}" data-id="${tarian.id}" class="gallery-link">
              </a>
              <p tabindex="0">${tarian.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  async afterRender() {
    const galleryLinks = document.querySelectorAll('.gallery-link');
    galleryLinks.forEach((link) => {
      link.addEventListener('click', async (event) => {
        event.preventDefault();
        const tarianId = event.target.dataset.id;
        const url = createGalleryUrl(tarianId);
        window.location.hash = url;
      });
    });
  },
};

export default TarianPage;
