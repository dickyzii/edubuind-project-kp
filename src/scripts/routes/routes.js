import HomePage from '../views/pages/home';
import TarianPage from '../views/pages/tarian';
import AlatMusik from '../views/pages/alat-musik';
import Adat from '../views/pages/adat';
import Pakaian from '../views/pages/pakaian';
import Kuliner from '../views/pages/kuliner';
import Bahasa from '../views/pages/bahasa';

const routes = {
  '/': HomePage, // default page
  '/tarian': TarianPage,
  '/musik': AlatMusik,
  '/adat': Adat,
  '/pakaian': Pakaian,
  '/kuliner': Kuliner,
  '/bahasa': Bahasa,
};

export default routes;
