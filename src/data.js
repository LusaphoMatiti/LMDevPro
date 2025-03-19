import cnc from "./images/CNC-homepage.png";
import wa from "./images/WA-auto-repair.png";
import fa from "./images/Fitness-tracker.png";

export const homePageLinks = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
  { id: 4, href: "/contact", text: "Contact" },
  { id: 5, href: "/blogs", text: "Blogs" },
];

export const otherPageLinks = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
  { id: 4, href: "/contact", text: "Contact" },
  { id: 5, href: "/blogs", text: "Blogs" },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://github.com/LusaphoMatiti",
    icon: "fa-brands fa-github",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    id: 2,
    href: "https://www.instagram.com/_lusapho_",
    icon: "fab fa-instagram",
    ariaLabel: "Visit my Instagram profile",
  },
  {
    id: 3,
    href: "mailto:lusaphomatiti07@gmail.com",
    icon: "fas fa-envelope",
    ariaLabel: "Send me an email",
  },
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
    href: "https://www.waautorepairs.co.za/",
  },
  {
    id: 3,
    image: fa,
    title: "Fitness Tracker",
    href: "https://fitness-tracker-ashy-ten.vercel.app/",
  },
];
