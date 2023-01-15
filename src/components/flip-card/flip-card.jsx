import { useState } from "react";
import styled from "styled-components";
import { CardFace } from "../card-face";

export const FlipCard = ({ data }) => {
  const [frontIsShown, setFrontIsShown] = useState(false);
  const {
    frontTitle,
    frontContent,
    frontSubtext,
    frontColor,
    backContent,
    highlightedAnswer,
    translatedAnswer,
    backColor,
  } = data;
  return (
    <CardHolder>
      <Card
        isFlipped={frontIsShown}
        onClick={() => setFrontIsShown((prev) => !prev)}
      >
        <CardFace
          title={frontTitle}
          content={frontContent}
          color={frontColor}
          subtext={frontSubtext}
        />
        <CardFace
          content={backContent}
          isBack
          color={backColor}
          subtext={translatedAnswer}
          highlightedAnswer={highlightedAnswer}
        />
      </Card>
    </CardHolder>
  );
};

const CardHolder = styled.div`
  height: 400px;
  width: 100%;
  margin: 40px 0;
  padding-left: 16px;
  padding-right: 16px;
  perspective: 600px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1s, background-color 0.3s 0.25s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.05);
  border-radius: 20px;

  ${({ isFlipped }) =>
    isFlipped &&
    `
  transform: rotateY(180deg)
  `};
`;
