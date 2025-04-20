import cnc from "./images/CNC-homepage.webp";
import wa from "./images/WA-auto-repair.webp";
import fa from "./images/Fitness-tracker.webp";
import fn from "./images/flownest.png";
import lp from "./images/luman.png";
import task from "./images/task.png";

export const homePageLinks = [
  { id: 1, href: "/about", text: "About" },
  { id: 2, href: "/projects", text: "Projects" },
  { id: 3, href: "/skills", text: "Skills" },
  { id: 4, href: "/contact", text: "Contact" },
  { id: 5, href: "/blogs", text: "Blogs" },
];

export const otherPageLinks = [...homePageLinks];

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
    desc: "CNC Customs is a company that offers CNC machining, design, and prototyping services. They help turn ideas into real products, from early concepts to final manufacturing.",
    madeWtih: "JavaScript, CSS, React, HTML",
    logos: [
      "./js.svg",
      "css3.png",
      "./github.png",
      "./html.png",
      "./vercel.png",
      "./react.png",
    ],
  },
  {
    id: 2,
    image: wa,
    title: "WA AUTO REPAIR",
    href: "https://www.waautorepairs.co.za/",
    desc: "WA AUTO is a service and repair shop for all diesel and petrol vehicles. They specialize in electronic diagnostics and finding faults that others might miss.",
    madeWtih: "JavaScript, CSS, HTML, Tailwind CSS, React",
    logos: [
      "./js.svg",
      "css3.png",
      "./github.png",
      "./html.png",
      "./vercel.png",
      "./tailwind.png",
      "./react.png",
    ],
  },
  {
    id: 3,
    image: fn,
    title: "FlowNest Landing Page (Demo)",
    href: "https://flownest-landing-page.vercel.app/",
    desc: "FlowNest is a simple web app built for freelancers and creative teams to stay organized.",
    madeWtih: "React, Tailwind CSS",
    logos: ["./js.svg", "./github.png", "./vercel.png", "./tailwind.png"],
  },
  {
    id: 4,
    image: lp,
    title: "Luman Photography",
    href: "https://luman-photography.vercel.app/",
    desc: "Luman Photography is a portfolio site for a Cape Town-based photographer.",
    madeWtih: "React, CSS, Tailwind CSS, JavaScript, HTML",
    logos: [
      "./js.svg",
      "css3.png",
      "./github.png",
      "./html.png",
      "./vercel.png",
      "./tailwind.png",
      "./react.png",
    ],
  },
  {
    id: 5,
    image: task,
    title: "Task App (Beta)",
    href: "http://serverless-task-app.s3-website.eu-north-1.amazonaws.com/",
    desc: "Task App is a simple tool to manage your daily tasks and stay organized.",
    madeWtih: "React, AWS Lambda, AWS S3, AWS API Gateway",
    logos: [
      "./js.svg",
      "./tailwind.png",
      "./html.png",
      "./react.png",
      "./aws.png",
    ],
  },
  {
    id: 6,
    image: fa,
    title: "Fitness Tracker",
    href: "https://fitness-tracker-ashy-ten.vercel.app/",
    desc: "Fitness Tracker lets you log workouts, track duration, and see progress in charts.",
    madeWtih: "JavaScript, GraphJS, React, CSS, HTML",
    logos: [
      "./js.svg",
      "css3.png",
      "./github.png",
      "./html.png",
      "./vercel.png",
      "./react.png",
    ],
  },
];

export const techData = {
  frontend: [
    { name: "JavaScript", image: "./js.svg" },
    { name: "React", image: "./react.png" },
    { name: "Next.js", image: "./nextjs.svg" },
    { name: "WordPress", image: "./wordpress.svg" },
    { name: "GraphQL", image: "./graphql.svg" },
    { name: "Tailwind", image: "./tailwind.png" },
  ],
  backend: [
    { name: "MySQL", image: "./mysql.svg" },
    { name: "Node.js", image: "./nodejs.svg" },
    { name: "Express.js", image: "./express.svg" },
    { name: "Axios", image: "./azios.svg" },
  ],
  cloud: [
    { name: "AWS S3", image: "./aws.png" },
    { name: "AWS Lambda", image: "./aws.png" },
    { name: "API Gateway", image: "./aws.png" },
    { name: "AWS RDS", image: "./aws.png" },
    { name: "DynamoDB", image: "./aws.png" },
    { name: "IAM", image: "./aws.png" },
  ],
  misc: [
    { name: "SEO", image: "./seo.svg" },
    { name: "Figma", image: "./figma.svg" },
    { name: "Copywriting", image: "./writer.svg" },
    { name: "Data Analysis", image: "./da.svg" },
  ],
};
