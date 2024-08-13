import project1 from "./images/dumbbell.png";
import project2 from "./images/garden.png";
import project3 from "./images/finance.png";

export const homePageLinks = [
  { id: 1, href: "#about", text: "About" },
  { id: 2, href: "#projects", text: "Projects" },
  { id: 3, href: "#cv", text: "CV" },
  { id: 4, href: "#contact", text: "Contact" },
];

export const otherPageLinks = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/cv", text: "CV" },
  { id: 4, href: "/contact", text: "Contact" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.linkedin.com",
    icon: "fa-brands fa-linkedin",
  },
  {
    id: 2,
    href: "https://www.instagram.com",
    icon: "fab fa-instagram",
  },
  { id: 3, href: "https://www.gmail.com", icon: "fas fa-envelope" },
];

export const projects = [
  {
    id: 1,
    image: project1,
    title: "Fitness Tracker",
    href: "https://fitness-tracker-lusapho.netlify.app",
  },
  {
    id: 2,
    image: project2,
    title: "Garden assist",
    href: "https://garden-lusapho.netlify.app",
  },
  {
    id: 3,
    image: project3,
    title: "Finance Tracker",
    href: "https://finance-tracker-lusapho.netlify.app/",
  },
];
