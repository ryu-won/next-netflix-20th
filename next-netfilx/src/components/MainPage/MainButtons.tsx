import styled from "styled-components";
import Image from "next/image";

export default function MainButtons() {
  return (
    <ButtonContainer>
      <Image src="/myList.svg" width={41} height={45} alt="My List" />
      <PlayBox>
        <Image
          src="/playButton.svg"
          width={110}
          height={45}
          alt="Play Button Background"
        />
        <Image
          src="/play.svg"
          width={72}
          height={30}
          alt="Play Icon"
          className="play-icon"
        />
      </PlayBox>
      <Image src="/infoIcon.svg" width={24} height={45} alt="Info" />
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 80%;
  margin-top: 11px;
`;

const PlayBox = styled.div`
  width: 110px;
  height: 45px;
  position: relative;

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
