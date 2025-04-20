/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
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
        slideRightLoop: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        // Add bounce animation keyframes
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        fadeInSlideUp: "fadeInSlideUp 2s ease-out forwards",
        slideLeftLoop: "slideLeftLoop 25s linear infinite",
        slideRightLoop: "slideRightLoop 25s linear infinite",
        // Add bounce animation
        bounce: "bounce 1s infinite",
      },
      colors: {
        skyBlue: {
          light: "#b3e5fc",
          DEFAULT: "#87CEEB",
          dark: "#00bcd4",
        },
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
