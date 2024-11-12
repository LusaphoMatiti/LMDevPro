import cnc from "./images/CNC-homepage.png";
import wa from "./images/WA-auto-repair.png";
import fa from "./images/Finance-tracker.png";

export const homePageLinks = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
  { id: 4, href: "/contact", text: "Contact" },
];

export const otherPageLinks = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
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
    image: cnc,
    title: "CNC CUSTOMS",
    href: "https://www.cnccustoms.co.za",
  },
  {
    id: 2,
    image: wa,
    title: "WA AUTO REPAIR",
    href: "https://wa-auto-repair.vercel.app/",
  },
  {
    id: 3,
    image: fa,
    title: "Finance Tracker",
    href: "https://finance-tracker-plum-eight.vercel.app/",
  },
];
