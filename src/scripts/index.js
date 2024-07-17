import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/translate-page.css';
import './views/pages/home';
import App from './views/app';

const app = new App({
  button: document.querySelector('#nav__drawer'),
  drawer: document.querySelector('#nav__menu'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
