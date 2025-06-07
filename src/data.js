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
    image: "./Fork_Flame.png",
    title: "Fork & Flame",
    type: "FullStack Project",
    href: "https://fork-flame.vercel.app/",
    github: "https://github.com/LusaphoMatiti/Fork-Flame",
    desc: "Fork & Flame is website to make dining experience easier and enjoyable. You can view the full menu and detailed descriptions of each dish or browse dishes by category and book a table online, quickly reserve a spot at your convenience.",
    madeWtih:
      "JavaScript, Tailwind CSS, React, Supabase , Express.js, Axios, External APIs",
    logos: [
      "./js.svg",
      "tailwind.png",
      "./github.png",
      "./express.svg",
      "./vercel.png",
      "./react.png",
      "./Azios.svg",
    ],
    designProcess: {
      research:
        " To ensure the Fork & Flame website addressed real business challenges,I conducted informal user interviews with 3 local restaurant owners and 2 regular diners. The goal was to understand the pain points in their current booking and menu access processes, especially for small to medium-sized restaurants without a dedicated digital team.",
      wireframe:
        "Before jumping into development, I created low-fidelity wireframes to outline the structure and user flow of the site.The wireframes focused on the landing page, menu items layout, and the filter-by-category feature to ensure a smooth and intuitive browsing experience for mobile users.The goal was to visualize a layout that:Immediately showcases the brand and call-to-action (book a table)Displays dishes in a clean, scrollable grid. Allows users to easily filter items by category (e.g., Starters, Mains, Desserts) These wireframes served as a blueprint for both the UI hierarchy and mobile-first responsiveness during development.",
      wireframe_img: "./Fork_Flame_wireframe.png",
      userFlow_img: "./Fork_Flame_User_Flow.png",
    },
  },

  {
    id: 2,
    image: "./BloomNews.png",
    title: "Bloom News",
    type: "FullStack Project",
    href: "https://bloom-news-frontend.vercel.app/",
    github: "https://github.com/LusaphoMatiti/BloomNews",
    desc: "BloomNews is a modern news website that brings the latest headlines from multiple trusted news sources into one clean, easy-to-read platform. ",
    madeWtih:
      "JavaScript, Tailwind CSS, React, Express.js, Axios, External APIs",
    logos: [
      "./js.svg",
      "tailwind.png",
      "./github.png",
      "./express.svg",
      "./vercel.png",
      "./react.png",
      "./Azios.svg",
    ],
    designProcess: {
      research:
        "I spoke with 5 users who regularly read online news to understand their habits and frustrations. Most wanted a clean, mobile-friendly interface with quick access to specific topics. They preferred platforms that offered filters, easy navigation, and trusted sources. These insights helped shape Bloom News into a fast, category-driven, and user-focused reading experience.",
      wireframe:
        "The wireframes focused on creating a clean, intuitive layout optimized for mobile users. Key sections included a landing page with top headlines, a prominent search bar, and quick access to categories. The menu design included filters for sorting articles by topic, date, or relevance. The layout emphasized easy scanning, simple navigation, and a consistent reading experience across devices.",
      wireframe_img: "./bloom_wire.png",
      userFlow_img: "./BloomNews_User_Flow.png",
    },
  },
  {
    id: 3,
    image: lp,
    title: "Luman Photography",
    type: "FRONTEND PROJECT",
    href: "https://luman-photography.vercel.app/",
    github: "https://github.com/LusaphoMatiti/Fork-Flame",
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
    designProcess: {
      research:
        "To design a clean and impactful photography site, I spoke with the photographer and he emphasized the importance of visual storytelling, fast-loading galleries, and a layout that feels elegant but not cluttered. The photographer wanted a site that showcased work with minimal distraction, while also supporting mobile-first browsing. These insights guided a design that’s simple, immersive, and highlights the imagery without unnecessary friction.",
      wireframe:
        "The wireframes were designed to highlight visual content without distractions. The landing page features a fullscreen hero image with the photographer’s logo. Below about the photographer is a clean grid-based gallery layout allows users to browse the gallery. A contact section is included at the bottom for quick client inquiries. The layout prioritizes minimal text, whitespace, and smooth scrolling to keep focus on the images and storytelling.",
      wireframe_img: "./Luman_wireframe.png",
      userFlow_img: "./Luman_userflow.png",
    },
  },
  {
    id: 4,
    image: "./under_construction.png",
    title: "Zipora",
    type: "Application",

    desc: "Coming Soon....",
    madeWtih: "Coming Soon....",
    logos: [
      "./js.svg",
      "css3.png",
      "./github.png",
      "./html.png",
      "./vercel.png",
      "./react.png",
    ],
    designProcess: {
      research: "",
      wireframe: "",
      wireframe_img: "",
      userFlow_img: "",
    },
  },
  {
    id: 5,
    image: fn,
    title: "FlowNest Landing Page (Demo)",
    type: "FRONTEND PROJECT",
    href: "https://flownest-landing-page.vercel.app/",
    github: "https://github.com/LusaphoMatiti/Fork-Flame",
    desc: "FlowNest is a simple web app built for freelancers and creative teams to stay organized.",
    madeWtih: "React, Tailwind CSS",
    logos: ["./js.svg", "./github.png", "./vercel.png", "./tailwind.png"],
    designProcess: {
      research: "",
      wireframe: "",
      wireframe_img: "",
      userFlow_img: "",
    },
  },

  {
    id: 6,
    image: cnc,
    title: "CNC CUSTOMS",
    type: "FullStack Project",
    href: "https://www.cnccustoms.co.za",
    github: "https://github.com/LusaphoMatiti/Fork-Flame",
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
    designProcess: {
      research: "",
      wireframe: "",
      wireframe_img: "",
      userFlow_img: "",
    },
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
    { name: "Axios", image: "./Azios.svg" },
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
