import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Josh Coetzer",
  title: "Hi all, I'm Josh",
  description:
    "I'm a passionate Full Stack developer with experience developing Full Stack web applications with Python, Flask, Postgres, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always learning, working, growing and improving.",
  resumeLink: "https://flowcv.com/resume/8hq4od1r7o",
};

export const openSource = {
  githubUserName: "nottherealtar",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:#",
  linkedin: "https://www.linkedin.com/in/josh-coetzer-31a874239/",
  github: "https://github.com/nottherealtar",
  instagram: "https://www.instagram.com/tar2times",
};

export const skillsSection: SkillsSectionType = {
  title: "A bit about me",
  subTitle: "A south african full stack dev with a passion for learning.",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building scalable and responsive azure solutions using JavaScript"),
        emoji("⚡ Building scalable and responsive web applications using Flask"),
        emoji("⚡ Building tightly integrated solutions for business applications"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend & Design", //Insert stack or technology you have experience in
    progressPercentage: "76", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Planning & Hypercare",
    progressPercentage: "85",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Product Manager",
    feedback: "Josh is a talented developer with a passion for learning and a strong work ethic. He consistently delivers high-quality work and is always looking for ways to improve his skills.",
    role: "CRM Config Owner & Full Stack Dev",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Comptia IT",
    subHeader: "Certfitied IT Fundamentals, A+, N+, CCNA",
    duration: "January 2021 - Feb 2022",
    grade: "Grade B",
    desc: "Completed foundational IT certifications and gained expertise in networking and troubleshooting.",
    descBullets: [
      "Completed CompTIA IT Fundamentals, A+, N+, and CCNA certifications.",
      "Gained foundational knowledge in IT concepts, networking, and security.",
      "Developed skills in troubleshooting and problem-solving hardware and networking.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "CRM Config Owner & Full Stack Dev",
    company: "Wetility",
    companyLogo: "/img/icons/common/ODLS.png",
    date: "Sep 2024 - Present",
    desc: "Managed CRM and CMS platforms, optimized processes, coordinated deployments, integrated third-party software, and led cross-functional collaboration to drive innovation.",
  },
  {
    role: "Solutions Architect",
    company: "FreshTechAfrica",
    companyLogo: "/img/icons/common/fta.png",
    date: "Sep 2023 - Aug 2024",
    desc: "#",
  },
  {
    role: "Owner & Main Dev",
    company: "TarsOnlineCafe",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2018 - Present",
    desc: "Created a platform for developers to showcase work, connect, and access resources. Focused on fostering a community and providing tools for staying updated with modern technologies.",
    descBullets: [
      "Discord Based Community",
      "Repo's of Knowledge",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Azure System Integrations",
    desc: "A Solution for integrating multiple systems using Azure Logic Apps, Functions, and Service Bus. It allows for seamless data exchange and process automation between different applications and services.",
  },
  {
    name: "Flask SaaS Web App",
    desc: "A multi-functional, multi-tenant web application built using Flask, Python, and PostgreSQL. It includes features such as user authentication, data visualization, and RESTful APIs for seamless communication with other services.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Joshua Coetzer",
  description: greetings.description,
  author: "Joshua Coetzer",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "",
  keywords: [
    "Josh",
    "Joshua",
    "Josh Coetzer",
    "Joshua Coetzer Portfolio",
    "Portfolio",
    "Joshs portfolio",
    "Josh Coetzer Portfolio",
    "joshua coetzer wetility",
  ],
};
