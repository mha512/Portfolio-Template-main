import {
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiPython,
  SiMysql,
  SiGit,
  SiFigma,
  SiGithub,
  SiLinkedin,
  SiX,
  SiDjango,
  SiFlutter,
  SiBootstrap,
  SiKotlin,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import sarmadImage from "../../public/profile-photo.png";
import { calculateAge } from "@/utils/utils";

type skillObj = {
  logo: JSX.Element;
  name: string;
};

export type projectObj = {
  name: string;
  description: string;
  url: string;
  pages: string[];
  features: string[];
};

type profileLinks = {
  name: string;
  url: string;
  logo: JSX.Element;
};

const birthYear = 2004;
const birthMonth = 7;
const birthDate = 17;
const age = calculateAge(birthYear, birthMonth, birthDate);

export const personalData = [
  {
    name: "Muhammad Hashaam Ahmad",
    age,
    image: sarmadImage,
    about: "Software Engineer. Android App Developer.",
  },
];
export const bio = [
  {
    role: "Full Stack Engineer",
    bio: "Hi I am M Hashaam Ahmad,a passionate Android App Developer (Java & Kotlin) and Software Engineer with a strong focus on building robust, user-centric, and high-performance mobile applications.I specialize in developing modern Android apps with clean architecture, intuitive UI/UX, and seamless performance using Java, Kotlin, and the latest Jetpack components. From Firebase integration to RESTful APIs, I deliver scalable solutions optimized for real-world use.",
  },
];
export const skills: skillObj[] = [
  {
    logo: <SiHtml5 />,
    name: "HTML",
  },
  {
    logo: <SiCss3 />,
    name: "CSS",
  },
  {
    logo: <SiBootstrap />,
    name: "Bootstrap",
  },
  {
    logo: <SiPython />,
    name: "Python",
  },
  {
    logo: <SiDjango />,
    name: "Django",
  },
  {
    logo: <SiMysql />,
    name: "MYSQL",
  },
  {
    logo: <FaJava />,
    name: "Java",
  },
  {
    logo: <SiKotlin />,
    name: "Kotlin",
  },
  {
    logo: <SiFlutter />,
    name: "Flutter",
  },
  {
    logo: <SiGit />,
    name: "Git",
  },
];
export const contact = {
  email: "hashaamahmad6@gmail.com",
  logo: <BiMailSend />,
};
export const protfolioLinks: profileLinks[] = [
  {
    name: "Github",
    logo: <SiGithub />,
    url: "https://github.com/mha512",
  },
  {
    name: "LinkedIn",
    logo: <SiLinkedin />,
    url: "https://www.linkedin.com/in/muhammad-hashaam-ahmad-148398315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "X",
    logo: <SiX />,
    url: "https://x.com/hashaam37?s=21",
  },
];
export const education = {
  bachelors: "Undergraduate Software Engineer",
  logo: <FaGraduationCap />,
};

export const projects: projectObj[] = [
  {
    name: "Ecommerce App",
    description: "Mini Amazon Ecommerce App built on top of React and Sass.",
    url: "https://progressivesite.netlify.app/",
    pages: [
      "Home Page",
      "About Page",
      "Products Page",
      "Product Preview Page",
      "Login and Sign-up Forms page",
      "Cart and Wishlist Page",
      "Payments Form Page",
      "Shipping Page",
      "Help Page",
    ],
    features: [
      "Login and Sign-up",
      "Add to Cart",
      "Add to Wishlist",
      "Track Order",
      "Proceed to checkout",
      "Full form validation",
    ],
  },
  {
    name: "Ecommerce Hackathon",
    description:
      "Hackthon UI for hackathon. Built with Next js, Typescript, Tailwind CSS.",
    url: "https://hackathon-1-xi.vercel.app/",
    pages: [
      "Home Page",
      "Product Category Pages",
      "Product Preview Page",
      "Cart Page",
      "Checkout Page",
    ],
    features: [
      "Fully Responsive UI across all devices",
      "Product Quantity control",
      "Full Form Validation",
      "Proceed to checkout",
    ],
  },
  {
    name: "Car Show Case UI",
    description:
      "Car Show case ui. Built With Next js, Typescript, Tailwind CSS.",
    url: "https://car-show-case-web.vercel.app/",
    pages: ["Single Page App"],
    features: [
      "Fully Responsive UI across all devices",
      "Fully Functional Authentication Modals",
      "Search Bar with suggestions",
      "Car Preview Modals",
      "Car Preview Image Gallery",
    ],
  },
  {
    name: "Todo List App",
    description:
      "Simple Todo List app. Built With Next js, Typescript, Tailwind CSS and neon (Serverless Postgresql).",
    url: "https://next-server-actions-todo-app-jade.vercel.app/",
    pages: ["Form page to create new todos", "Page to view todos"],
    features: [
      "Add a Todo",
      "Mark todo as completed",
      "Delete a todo",
      "Responsive UI",
      "Beautiful Toast Notifications",
      "Separate Pending and Completed Todos Section",
    ],
  },
  {
    name: "Full Stack Hackathon",
    description: "Full Stack E-commerce App built with Next.js and Sanity.io",
    url: "https://next-sanity-ecommerce-gold.vercel.app",
    pages: [
      "Home Page",
      "Products Page",
      "Individual category pages",
      "Product Details Page",
      "Authentication pages",
    ],
    features: [
      "Fully Responsive across all devices",
      "Fully Authenticated",
      "Search and Filtering",
      "Cart Functionalities",
      "Order Summary",
      "Related Products Section",
    ],
  },
  {
    name: "Image Search App",
    description: "React Image Search app with live Unsplash api.",
    url: "https://progressive-image-search-app.netlify.app/",
    pages: ["Single Page Application"],
    features: ["Image Search App", "Live Unsplash API", "Live Images"],
  },
];