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
    "./src/pages/Trusted.jsx",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInSlideUp: {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        slideLeftLoop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeInSlideUp: "fadeInSlideUp 2s ease-out forwards",
        slideLeftLoop: "slideLeftLoop 20s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
