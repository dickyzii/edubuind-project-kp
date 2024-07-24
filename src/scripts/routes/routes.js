import HomePage from '../views/pages/home';
import TarianPage from '../views/pages/tarian';
import AlatMusik from '../views/pages/alat-musik';
import Adat from '../views/pages/adat';
import Pakaian from '../views/pages/pakaian';
import Kuliner from '../views/pages/kuliner';
import Bahasa from '../views/pages/bahasa';

// import gallery tari pages
import TariSaman from '../views/pages/gallery/tari-saman';
import TariTortor from '../views/pages/gallery/tari-tortor';
import TariGendingSriwijaya from '../views/pages/gallery/tarian-gending-sriwijaya';
import TariPiring from '../views/pages/gallery/tari-piring';
import TariAndun from '../views/pages/gallery/tari-andun';
import TariZapin from '../views/pages/gallery/tari-zapin';
import TariMakyong from '../views/pages/gallery/tari-makyong';
import TariSekapurSirih from '../views/pages/gallery/tari-sekapur-sirih';
import TariSigehPengunten from '../views/pages/gallery/tari-sigeh-pengunten';
import TariCampak from '../views/pages/gallery/tari-campak';
import TariAjatTemuaiDatai from '../views/pages/gallery/tari-ajat-temuai-datai';
import TariGantar from '../views/pages/gallery/tari-gantar';
import TariBaksaKembang from '../views/pages/gallery/tari-baksa-kembang';
import TariBaleanDadas from '../views/pages/gallery/tari-balean-dadas';
import TariJepen from '../views/pages/gallery/tari-jepen';
import TariCokek from '../views/pages/gallery/tari-cokek';
import TariTopengBetawi from '../views/pages/gallery/tari-topeng-betawi';
import TariJaipong from '../views/pages/gallery/tari-jaipong';
import TariGambyong from '../views/pages/gallery/tari-gambyong';
import TariSerimpi from '../views/pages/gallery/tari-serimpi';
import TariReogPonorogo from '../views/pages/gallery/tari-reog-ponorogo';
import TariKecak from '../views/pages/gallery/tari-kecak';
import TariCaci from '../views/pages/gallery/tari-caci';
import TariRudat from '../views/pages/gallery/tari-rudat';
import TariSaronde from '../views/pages/gallery/tari-saronde';
import TariPattuddu from '../views/pages/gallery/tari-pattuddu';
import TariDero from '../views/pages/gallery/tari-dero';
import TariMaengket from '../views/pages/gallery/tari-maengket';
import TariLulo from '../views/pages/gallery/tari-lulo';
import TariPakarena from '../views/pages/gallery/tari-pakarena';
import TariLenso from '../views/pages/gallery/tari-lenso';
import TariCakalele from '../views/pages/gallery/tari-cakalele';
import TariYospan from '../views/pages/gallery/tari-yospan';
import TariSelamatDatang from '../views/pages/gallery/tari-selamat-datang';
import TariMusyoh from '../views/pages/gallery/tari-musyoh';
import TariSajojo from '../views/pages/gallery/tari-sajojo';
import TariYosimPancar from '../views/pages/gallery/tari-yosim-pancar';
import TariSeka from '../views/pages/gallery/tari-seka';

// import gallery alat musik pages
import SeruneKalee from '../views/pages/gallery-alat-musik/serune-kalee';
import Sabangunan from '../views/pages/gallery-alat-musik/gondang-sabangunan';
import GendangMelayu from '../views/pages/gallery-alat-musik/gendang-melayu';
import Saluang from '../views/pages/gallery-alat-musik/saluang';
import DoliDoli from '../views/pages/gallery-alat-musik/doli-doli';
import Gambus from '../views/pages/gallery-alat-musik/gambus';
import Kompang from '../views/pages/gallery-alat-musik/kompang';
import Cangor from '../views/pages/gallery-alat-musik/cangor';
import GambangLampung from '../views/pages/gallery-alat-musik/gambang-lampung';
import Dambus from '../views/pages/gallery-alat-musik/dambus';
import Sape from '../views/pages/gallery-alat-musik/sape';
import Sampe from '../views/pages/gallery-alat-musik/sampe';
import Panting from '../views/pages/gallery-alat-musik/panting';
import GendangTiwah from '../views/pages/gallery-alat-musik/gendang-tiwah';
import Kecapi from '../views/pages/gallery-alat-musik/kecapi';
import AngklungBuhun from '../views/pages/gallery-alat-musik/angklung-buhun';
import Tanjidor from '../views/pages/gallery-alat-musik/tanjidor';
import Angklung from '../views/pages/gallery-alat-musik/angklung';
import Gamelan from '../views/pages/gallery-alat-musik/gamelan';
import Gendhing from '../views/pages/gallery-alat-musik/gendhing';
import Bonang from '../views/pages/gallery-alat-musik/bonang';
import CengCeng from '../views/pages/gallery-alat-musik/ceng-ceng';
import GendangBeleq from '../views/pages/gallery-alat-musik/gendang-beleq';
import Sasando from '../views/pages/gallery-alat-musik/sasando';
import Polopalo from '../views/pages/gallery-alat-musik/polopalo';
import Kolintang from '../views/pages/gallery-alat-musik/kolintang';
import Ganda from '../views/pages/gallery-alat-musik/ganda';
import KesoKeso from '../views/pages/gallery-alat-musik/keso-keso';
import Santu from '../views/pages/gallery-alat-musik/santu';
import Calong from '../views/pages/gallery-alat-musik/calong';
import Totobuang from '../views/pages/gallery-alat-musik/totobuang';
import Jukulele from '../views/pages/gallery-alat-musik/jukulele';
import Tifa from '../views/pages/gallery-alat-musik/tifa';
import Pikon from '../views/pages/gallery-alat-musik/pikon';
import Fuu from '../views/pages/gallery-alat-musik/fuu';
import Krombi from '../views/pages/gallery-alat-musik/krombi';
import Atowo from '../views/pages/gallery-alat-musik/atowo';

const routes = {
  '/': HomePage, // Halaman default
  '/tarian': TarianPage,
  '/musik': AlatMusik,
  '/adat': Adat,
  '/pakaian': Pakaian,
  '/kuliner': Kuliner,
  '/bahasa': Bahasa,
  '/gallery/tari-saman': TariSaman,
  '/gallery/tari-tortor': TariTortor,
  '/gallery/tarian-gending-sriwijaya': TariGendingSriwijaya,
  '/gallery/tari-piring': TariPiring,
  '/gallery/tari-andun': TariAndun,
  '/gallery/tari-zapin': TariZapin,
  '/gallery/tari-makyong': TariMakyong,
  '/gallery/tari-sekapur-sirih': TariSekapurSirih,
  '/gallery/tari-sigeh-pengunten': TariSigehPengunten,
  '/gallery/tari-campak': TariCampak,
  '/gallery/tari-ajat-temuai-datai': TariAjatTemuaiDatai,
  '/gallery/tari-gantar': TariGantar,
  '/gallery/tari-baksa-kembang': TariBaksaKembang,
  '/gallery/tari-balean-dadas': TariBaleanDadas,
  '/gallery/tari-jepen': TariJepen,
  '/gallery/tari-cokek': TariCokek,
  '/gallery/tari-topeng-betawi': TariTopengBetawi,
  '/gallery/tari-jaipong': TariJaipong,
  '/gallery/tari-gambyong': TariGambyong,
  '/gallery/tari-serimpi': TariSerimpi,
  '/gallery/tari-reog-ponorogo': TariReogPonorogo,
  '/gallery/tari-kecak': TariKecak,
  '/gallery/tari-caci': TariCaci,
  '/gallery/tari-rudat': TariRudat,
  '/gallery/tari-saronde': TariSaronde,
  '/gallery/tari-pattuddu': TariPattuddu,
  '/gallery/tari-dero': TariDero,
  '/gallery/tari-maengket': TariMaengket,
  '/gallery/tari-lulo': TariLulo,
  '/gallery/tari-pakarena': TariPakarena,
  '/gallery/tari-lenso': TariLenso,
  '/gallery/tari-cakalele': TariCakalele,
  '/gallery/tari-yospan': TariYospan,
  '/gallery/tari-selamat-datang': TariSelamatDatang,
  '/gallery/tari-musyoh': TariMusyoh,
  '/gallery/tari-sajojo': TariSajojo,
  '/gallery/tari-yosim-pancar': TariYosimPancar,
  '/gallery/tari-seka': TariSeka,

  // route gallery alatmusik
  '/gallery-alat-musik/serune-kalee': SeruneKalee,
  '/gallery-alat-musik/gondang-sabangunan': Sabangunan,
  '/gallery-alat-musik/gendang-melayu': GendangMelayu,
  '/gallery-alat-musik/saluang': Saluang,
  '/gallery-alat-musik/doli-doli': DoliDoli,
  '/gallery-alat-musik/gambus': Gambus,
  '/gallery-alat-musik/kompang': Kompang,
  '/gallery-alat-musik/cangor': Cangor,
  '/gallery-alat-musik/gambang-lampung': GambangLampung,
  '/gallery-alat-musik/dambus': Dambus,
  '/gallery-alat-musik/sape': Sape,
  '/gallery-alat-musik/sampe': Sampe,
  '/gallery-alat-musik/panting': Panting,
  '/gallery-alat-musik/gendang-tiwah': GendangTiwah,
  '/gallery-alat-musik/kecapi': Kecapi,
  '/gallery-alat-musik/angklung-buhun': AngklungBuhun,
  '/gallery-alat-musik/tanjidor': Tanjidor,
  '/gallery-alat-musik/angklung': Angklung,
  '/gallery-alat-musik/gamelan': Gamelan,
  '/gallery-alat-musik/gendhing': Gendhing,
  '/gallery-alat-musik/bonang': Bonang,
  '/gallery-alat-musik/ceng-ceng': CengCeng,
  '/gallery-alat-musik/gendang-beleq': GendangBeleq,
  '/gallery-alat-musik/sasando': Sasando,
  '/gallery-alat-musik/polopalo': Polopalo,
  '/gallery-alat-musik/kolintang': Kolintang,
  '/gallery-alat-musik/ganda': Ganda,
  '/gallery-alat-musik/keso-keso': KesoKeso,
  '/gallery-alat-musik/santu': Santu,
  '/gallery-alat-musik/calong': Calong,
  '/gallery-alat-musik/totobuang': Totobuang,
  '/gallery-alat-musik/jukulele': Jukulele,
  '/gallery-alat-musik/tifa': Tifa,
  '/gallery-alat-musik/pikon': Pikon,
  '/gallery-alat-musik/fuu': Fuu,
  '/gallery-alat-musik/krombi': Krombi,
  '/gallery-alat-musik/atowo': Atowo,
};

export default routes;
