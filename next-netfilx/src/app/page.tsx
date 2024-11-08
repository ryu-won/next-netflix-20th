"use client";

import styled from "styled-components";
import Lottie from "react-lottie-player";
import netflixLanding from "./netflixLanding.json";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HomePage = () => {
  //여기 코드가 너무 길어서 따로 컴포넌트 만들어서 임포트하기
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

export default HomePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoLottie = styled(Lottie)`
  width: 50%;
`;

const IntroButton = styled(motion.div)`
  background-image: url("/logos_netflix-icon.svg");
  background-size: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 20%;
  width: 20%;
  height: 20%;
  background-color: black;
`;
