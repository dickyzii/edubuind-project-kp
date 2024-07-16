import HomePage from '../views/pages/home';
import TarianPage from '../views/pages/tarian';
import AlatMusik from '../views/pages/alat-musik';
import Adat from '../views/pages/adat';
import Pakaian from '../views/pages/pakaian';
import Kuliner from '../views/pages/kuliner';
import Bahasa from '../views/pages/bahasa';
import TariSamanGalleryPage from '../views/pages/gallery/tari-saman'; // Ubah nama TarianPage menjadi TariSamanGalleryPage untuk menghindari duplikasi

const routes = {
  '/': HomePage, // Halaman default
  '/tarian': TarianPage,
  '/musik': AlatMusik,
  '/adat': Adat,
  '/pakaian': Pakaian,
  '/kuliner': Kuliner,
  '/bahasa': Bahasa,
  '/gallery/tari-saman': TariSamanGalleryPage, // Halaman galeri Tari Saman
};

export default routes;
