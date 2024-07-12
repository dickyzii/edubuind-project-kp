const HomePage = {
  async render() {
    return `
  <div class="maincontent" tabindex="0">
  <article id="mission" tabindex="0">
    <h2 tabindex="0">OUR MISSIONS</h2>
    <p tabindex="0">
      Indonesia memiliki keberagaman budaya yang luar biasa, dari seni tradisional hingga kepercayaan adat. 
      Namun, semakin banyak yang kehilangan koneksi dengan warisan budaya ini karena kurangnya sumber daya pendidikan 
      yang relevan dan menarik. Oleh karena itu, kami ingin mengembangkan sebuah solusi yang memanfaatkan teknologi 
      untuk memperkenalkan budaya Indonesia secara menyeluruh dan menarik bagi semua kalangan.<br>
      Sebagai tim yang peduli terhadap masa depan budaya Indonesia, kami percaya bahwa solusi inovatif ini akan 
      membantu membangkitkan kembali kecintaan dan pemahaman terhadap budaya bangsa, serta meningkatkan apresiasi 
      terhadap kekayaan budaya yang kita miliki. Dengan perkembangan teknologi informasi dan komunikasi menawarkan 
      peluang baru untuk edukasi budaya. Website ini dapat menjadi media edukasi budaya yang efektif dan menarik.
    </p>
  </article>
</div>

      
  <div class="maincontent_team">
    <article id="tim" tabindex="0">
        <div class="team-section" tabindex="0">
            <h2 tabindex="0">Perkenalkan Tim Capstone EduBuind</h2>
            <div class="team-container" tabindex="0">
                <div class="team-member" tabindex="0">
                    <img src="./images/tim/Muhammad_Dzikri_M.jpg" alt="Muhammad Dzikri Mufarrij" tabindex="0">
                    <h3 tabindex="0">Muhammad Dzikri Mufarrij</h3>
                    <p class="role" tabindex="0">Front-End Developer</p>
                    <p tabindex="0">Membangun halaman yang menarik dan interaktif.</p>  
                </div>
                <div class="team-member" tabindex="0">
                    <img src="./images/tim/Alvin_Prasetio.jpg" alt="Alvin Prasetio" tabindex="0">
                    <h3 tabindex="0">Alvin Prasetio</h3>
                    <p class="role" tabindex="0">Front-End Developer</p>
                    <p tabindex="0">Membangun halaman yang menarik dan interaktif.</p>
                </div>
                <div class="team-member" tabindex="0">
                    <img src="./images/tim/Dicky_Andrean.png" alt="Dicky Andrean" tabindex="0">
                    <h3 tabindex="0">Dicky Andrean</h3>
                    <p class="role" tabindex="0">Front-End Developer</p>
                    <p tabindex="0">Membangun halaman yang menarik dan interaktif.</p>
                </div>
            </div>
        </div>
    </article>
</div>

      `;
  },

  async afterRender() {
    const video = document.querySelector('.hero video');
    video.play().catch((error) => {
      console.log('Autoplay prevented: ', error);
    });
  },
};

export default HomePage;
