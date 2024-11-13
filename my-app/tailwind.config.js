/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Navbar.jsx",
    "./src/App.jsx",
    "./src/index.js",
    "./src/pages/Projects.jsx",
    "./src/pages/CV.jsx",
    "./src/pages/Contact.jsx",
    "./src/pages/HomePage.jsx",
    "./src/pages/LandPage.jsx",
    "./src/components/Footer.jsx",
  ],
  theme: {
    extend: {
      animation: {
        fadeInSlideUp: "fadeInSlideUp 2s ease-out forwards",
      },
    },
    keyframes: {
      fadeInSlideUp: {
        "0%": { opacity: "0", transform: "translateY(50px)" },
        "100%": { opacity: "1", transform: "translateY(0px)" },
      },
    },
  },
  variants: {},
  plugins: [],
};
