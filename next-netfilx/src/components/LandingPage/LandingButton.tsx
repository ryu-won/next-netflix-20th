"use client";

import styled from "styled-components";
import Lottie from "react-lottie-player";
import netflixLanding from "../../app/netflixLanding.json";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LandingButton = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>();

  const handleAnimationComplete = () => {
    router.push("/main");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/NetflixIntroSound.mp3");
    }
  }, []);

  useEffect(() => {
    if (isClicked && audioRef.current) {
      audioRef.current.play();
    }
  }, [isClicked]);

  const onIntroClick = () => {
    setIsClicked(true);
  };

  return isClicked ? (
    <Container>
      <LogoLottie
        loop={false}
        animationData={netflixLanding}
        play
        speed={1.25}
        onComplete={handleAnimationComplete}
      />
    </Container>
  ) : (
    <Container>
      <IntroButton
        whileHover={{ scale: 1.5 }}
        onClick={onIntroClick}
      ></IntroButton>
    </Container>
  );
};

export default LandingButton;

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLottie = styled(Lottie)`
  width: 30%;
`;

const IntroButton = styled(motion.div)`
  background-image: url("/logos_netflix-icon.svg");
  background-size: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20%;
  width: 20%;

  background-color: black;

  &::after {
    content: "";
    display: block;
    padding-top: 80%;
  }
`;
