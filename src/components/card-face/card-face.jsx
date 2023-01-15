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
  return (
    <CardWrapper isBack={isBack} color={color}>
      <Title highlightColour={highlightColour(title)}>
        {title ? title : " "}
      </Title>

      {highlightedAnswer ? (
        <Content
          dangerouslySetInnerHTML={{
            __html: highlightSubstring(content, highlightedAnswer),
          }}
        />
      ) : (
        <Content>{content}</Content>
      )}
      {SubtextText && <SubtextText>{subtext}</SubtextText>}
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
  margin-bottom: 16px;
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
