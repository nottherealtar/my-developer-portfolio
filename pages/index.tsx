import dynamic from "next/dynamic";
import React from "react";

// Dynamically import components with SSR disabled where necessary
const Navigation = dynamic(() => import("../components/Navigation"), { ssr: false });
const Greetings = dynamic(() => import("../containers/Greetings"), { ssr: false });
const Skills = dynamic(() => import("../containers/Skills"), { ssr: false });
const Proficiency = dynamic(() => import("../containers/Proficiency"), { ssr: false });
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"), { ssr: false });
const SkillCard = dynamic(() => import("../components/SkillCard"), { ssr: false });

import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import { GithubUserType } from "../types";

export default function Home({ githubProfileData }: { githubProfileData: GithubUserType | null }) {
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
      {githubProfileData && <GithubProfileCard {...githubProfileData} />}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const githubProfileData: GithubUserType = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    ).then(res => res.json());

    return {
      props: { githubProfileData },
    };
  } catch (error) {
    console.error("Failed to fetch GitHub profile data:", error);
    return {
      props: { githubProfileData: null }, // Return null if data fetching fails
    };
  }
}
