import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

interface LottieAnimationProps {
  animationPath: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationPath }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure this runs only on the client side
  }, []);

  if (!isClient) {
    return <div>Loading...</div>; // Fallback for SSR
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require(`.${animationPath}`), // Dynamically require the animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default LottieAnimation;
