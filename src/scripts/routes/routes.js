import HomePage from '../views/pages/home';
import TarianPage from '../views/pages/tarian';
import AlatMusik from '../views/pages/alat-musik';
import Adat from '../views/pages/adat';
import Pakaian from '../views/pages/pakaian';
import Kuliner from '../views/pages/kuliner';
import Bahasa from '../views/pages/bahasa';
import GalleryPage from '../views/pages/gallery/gallery-tarian'; // Ensure this path is correct

const routes = {
  '/': HomePage, // default page
  '/tarian': TarianPage,
  '/musik': AlatMusik,
  '/adat': Adat,
  '/pakaian': Pakaian,
  '/kuliner': Kuliner,
  '/bahasa': Bahasa,
  '/gallery/:id': GalleryPage, // fixed route
};

export default routes;
