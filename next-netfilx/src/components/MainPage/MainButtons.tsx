import styled from "styled-components";

export default function MainButtons() {
  return (
    <>
      <ButtonContainer>
        <img src="/myList.svg" alt="" />
        <PlayBox>
          <img src="/playButton.svg" alt="" />
          <img src="/play.svg" alt="" />
        </PlayBox>
        <img src="/infoIcon.svg" alt="" />
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  width: 80%;
  margin-top: 11px;
  position: static;
`;

const PlayBox = styled.div`
  width: 110px;
  height: 45px;
  position: relative;

  img:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
