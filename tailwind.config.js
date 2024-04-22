/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/header.js",
    "./src/components/hero.js",
    "./src/components/featured.js",
    "./src/components/featuredCard.js",
    "./src/components/tour.js",
    "./src/components/reviewCard.js",
    "./src/components/review.js",
    "./src/components/blogCard.js",
    "./src/components/blog.js",
    "./src/components/form.js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'Subscribe' : "url('./Subscribe.png')"
      }
    },
  },
  plugins: [],
}

// // module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//        'hero-pattern': "url('/img/hero-pattern.svg')",
//        'footer-texture': "url('/img/footer-texture.png')",
//       }
//     }
//   }
// }
