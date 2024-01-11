import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Tailwind",
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Tailwind CSS, demonstrating expertise in building responsive and visually appealing web interfaces through efficient utilization of the Tailwind utility-first framework.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in TypeScript, adept at developing robust and scalable web applications with strong static typing and improved code maintainability.",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitAlt className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Git version control, proficient in managing collaborative software development projects, ensuring efficient code tracking, and facilitating seamless team collaboration.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5-menu.ad92319f.png&w=3840&q=75",
    url: "https://menu-check.netlify.app",
    github: "https://github.com/lizayurchenko/React-05-project-menu",
    title: "Menu",
    text: "Explore a dynamic React project that beautifully displays and categorizes a diverse menu, allowing users to easily filter items for breakfast, lunch, and more.",
  },
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4-questions.4644e281.png&w=3840&q=75",
    url: "https://questions-check.netlify.app",
    github: "https://questions-check.netlify.app",
    title: "Questions",
    text: "A user-friendly FAQ section with a clean interface, allowing seamless toggling between questions and answers.",
  },
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3-reviews.2de73d3b.png&w=3840&q=75",
    url: "https://review-users.netlify.app",
    github: "https://github.com/john-smilga",
    title: "Reviews",
    text: "Presents an interactive platform showcasing people's profiles, offering the flexibility to navigate through previous and next profiles or randomly explore different users.",
  },
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2-tours.e0ec0668.png&w=3840&q=75",
    url: "https:tours-checker.netlify.app",
    github: "https://github.com/john-smilga",
    title: "Tours",
    text: "A visually engaging web application displaying a curated list of exciting tours, complete with detailed information and stunning visuals.",
  },

  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9-colors.275e5185.png&w=3840&q=75",
    url: "https://color-generator-check.netlify.app",
    github: "https://color-generator-check.netlify.app",
    title: "Color generator",
    text: "Dynamically generates a vibrant array of shadows based on user-selected colors, adding a visually appealing and customizable touch to web design.",
  },
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F10-grocery.62cde133.png&w=2048&q=75",
    url: "https://grocery-bud-checker.netlify.app",
    github: "https://grocery-bud-checker.netlify.app",
    title: "Grocery bud",
    text: "Empowers users to create, manage, and customize their shopping lists, allowing them to mark items as completed and efficiently remove them as needed.",
  },
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8-lorem.f5aa9306.png&w=3840&q=75",
    url: "https://lorem-ipsum-check.netlify.app",
    github: "https://github.com/john-smilga",
    title: "Lorem ipsum",
    text: "Enables users to easily generate custom Lorem Ipsum text by specifying the desired number of paragraphs, streamlining the process of creating placeholder content for various design and development needs.",
  },
  {
    id: nanoid(),
    img: "https://react-projects.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6-jobs.fff51491.png&w=3840&q=75",
    url: "https://tabs-check.netlify.app",
    github: "https://github.com/john-smilga",
    title: "Tabs",
    text: "Facilitates user interaction by dynamically toggling work candidate profiles based on the company buttons clicked, offering an intuitive way to explore and evaluate potential hires.",
  },
];
