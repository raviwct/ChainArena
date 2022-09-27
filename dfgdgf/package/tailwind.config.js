/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('../public/img/hero-bg.png')",
        'heros-bg': "url('../public/img/heros-bg.png')",
        'register-bg': "url('../public/img/register-bg.png')",
        'coll-bg': "url('../public/img/collection-bg.png')",
        'coll-slider-bg': "url('../public/img/slider-bg.png')",
        'road-bg': "url('../public/img/road-bg.png')",
        'metaverse-light': "url('../public/img/light-meta.png')",
        'metaverse-bg': "url('../public/img/metaverse.png')",
        'app-bg': "url('../public/img/download-app.png')",
        'join-bg': "url('../public/img/footer.png')",


      },
      dropShadow: {
        'shadow-font': "4px 4px #9A1715",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        BakBakRegular:"BakBakRegular"
      },
      colors: {
        'input-bg': 'rgba(217, 217, 217, 0.2)',
        'form-bg': 'rgba(2, 2, 2, 0.6)',
        'faq-row': 'rgba(231, 159, 106, 0.6)',
    
        'btn-wish': 'rgba(0, 0, 0, 0.5)',

      },
      transform: {
        'trans-center': 'translate(-50%, -50%)',
      }
    },
  },
  plugins: [],
}
