import { useState } from "react";
import styled from "styled-components";

function highlightColour(cardType) {
  switch (cardType) {
    case "Translate":
      return "light-green";
    case "Fill the gap":
      return "light-pink";
    default:
      return "white";
  }
}

function highlightSubstring(str, substring) {
  return str.replace(
    new RegExp(substring, "gi"),
    "<mark>" + substring + "</mark>"
  );
}

export const CardFace = ({
  isBack,
  title,
  content,
  color,
  subtext,
  highlightedAnswer,
}) => {
  const [showHint, setShowHint] = useState(isBack);
  return (
    <CardWrapper isBack={isBack} color={color}>
      <TopBar>
        <Title highlightColour={highlightColour(title)}>
          {title ? title : " "}
        </Title>
        {!isBack && subtext && (
          <HintButton
            data-button
            onClick={(e) => {
              e.preventDefault();
              console.log("firing");
              setShowHint(!showHint);
            }}
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-button
            >
              <path
                d="M4.80869 0.447247C2.48518 0.730645 0.565508 2.63068 0.198539 5.02997C-0.133823 7.20203 0.75493 9.18389 2.26131 10.3569C2.68271 10.6852 2.94807 11.179 2.96349 11.7231H7.9443C7.95784 11.1825 8.21918 10.6887 8.6387 10.3637C9.93792 9.35602 10.7795 7.74878 10.7795 5.93564C10.7797 2.66139 8.03868 0.0523749 4.80884 0.447094L4.80869 0.447247Z"
                fill="#797979"
                data-button
              />
              <path
                data-button
                d="M2.96906 12.7302V12.828C2.96906 13.545 3.24653 14.188 3.69831 14.6505C4.14376 15.1195 4.76974 15.4075 5.45393 15.4075C6.8286 15.4075 7.9388 14.255 7.9388 12.828V12.7302H2.96906Z"
                fill="#797979"
              />
            </svg>
          </HintButton>
        )}
      </TopBar>
      {highlightedAnswer ? (
        <Content
          dangerouslySetInnerHTML={{
            __html: highlightSubstring(content, highlightedAnswer),
          }}
        />
      ) : (
        <Content>{content}</Content>
      )}
      {SubtextText && showHint && <SubtextText>{subtext}</SubtextText>}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 16px;
  backface-visibility: hidden;
  border-radius: 20px;
  ${({ color }) => color && `background-color: var(--${color});`}
  ${({ isBack }) => isBack && `transform: rotateY(180deg);`}
`;

const Title = styled.p`
  display: inline-block;
  padding: 0 2px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  ${({ highlightColour }) =>
    highlightColour && `background-color: var(--${highlightColour});`}
`;

const Content = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  mark {
    background-color: var(--yellow);
  }
`;

const SubtextText = styled.p`
  margin-top: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: var(--dark-grey);
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 32px;
`;

const HintButton = styled.button`
  border: 0px;
  cursor: pointer;
  padding-left: 4px;
  padding-right: 4px;
  background-color: transparent;
`;
