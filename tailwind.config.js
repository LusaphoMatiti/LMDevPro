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
    "./src/pages/Blogs.jsx",
    "./src/pages/blogposts/Post1.jsx",
    "./src/pages/blogposts/Post2.jsx",
    "./src/pages/blogposts/Post3.jsx",
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
        slideLeftLoop: "slideLeftLoop 25s linear infinite",
      },
      colors: {
        skyBlue: {
          light: "#b3e5fc", // Light sky blue
          DEFAULT: "#87CEEB", // Sky blue
          dark: "#00bcd4", // Darker aqua blue
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
