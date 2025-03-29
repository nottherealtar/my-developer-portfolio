import dynamic from "next/dynamic";
import React from "react";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

interface SkillCardProps {
  title: string;
  lottieAnimationFile: string;
  skills: string[];
  softwareSkills: { skillName: string; iconifyTag: string }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, lottieAnimationFile, skills, softwareSkills }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`.${lottieAnimationFile}`), // Dynamically require the animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <h3>{title}</h3>
      <Lottie options={defaultOptions} height={200} width={200} />
      {/* Render skills and softwareSkills */}
    </div>
  );
};

export default SkillCard;
