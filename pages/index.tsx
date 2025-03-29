import dynamic from "next/dynamic";
import React from "react";

const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
const SkillCard = dynamic(() => import("../components/SkillCard"), { ssr: false });
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: any }) {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <SkillCard
        title="Full Stack Development"
        lottieAnimationFile="/lottie/skills/fullstack.json"
        skills={[
          "Building scalable and responsive azure solutions using JavaScript",
          "Building scalable and responsive web applications using Flask",
          "Building tightly integrated solutions for business applications",
        ]}
        softwareSkills={[
          { skillName: "Python", iconifyTag: "logos:python" },
          { skillName: "JavaScript", iconifyTag: "logos:javascript" },
          { skillName: "Heroku", iconifyTag: "logos:heroku-icon" },
          { skillName: "Github", iconifyTag: "akar-icons:github-fill" },
          { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        ]}
      />
      <GithubProfileCard {...githubProfileData} />
    </div>
  );
}

export async function getStaticProps() {
  const githubProfileData: GithubUserType = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then(res => res.json());

  return {
    props: { githubProfileData },
  };
}
