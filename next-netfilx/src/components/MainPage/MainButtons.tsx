import styled from "styled-components";
import PlayIcon from "../../../public/PlayIcon";
import { motion } from "framer-motion";

export default function MainButtons() {
  return (
    <ButtonContainer>
      <motion.img
        src="/myList.svg"
        width={41}
        height={45}
        alt="My List"
        whileHover={{ scale: 1.1 }}
      />
      <PlayBox whileHover={{ scale: 1.1 }}>
        <motion.img
          src="/playButton.svg"
          width={110}
          height={45}
          alt="Play Button Background"
        />
        <PlayIcon />
      </PlayBox>
      <motion.img
        src="/infoIcon.svg"
        width={24}
        height={45}
        alt="Info"
        whileHover={{ scale: 1.1 }}
      />
    </ButtonContainer>
  );
}

const ButtonContainer = styled(motion.div)`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 80%;
  margin-top: 11px;
`;

const PlayBox = styled(motion.div)`
  width: 110px;
  height: 45px;
  position: relative;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
