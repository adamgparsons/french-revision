import { FlipCard } from "../flip-card";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
export const Cards = ({ lessonData, setProgress }) => (
  <CardContainer>
    <BindKeyboardSwipeableViews
      enableMouseEvents
      resistance
      onChangeIndex={(index) => setProgress((index / lessonData.length) * 100)}
    >
      {lessonData.map((lessonItem, i) => (
        <FlipCard
          data={{
            frontTitle: lessonItem["title type"],
            frontContent: lessonItem.front,
            frontSubtext: lessonItem["front subtext"],
            frontColor: "light-grey",
            backContent: lessonItem.back,
            highlightedAnswer: lessonItem["highlighted answer"],
            translatedAnswer: lessonItem["translated answer"],
            backColor: "white",
          }}
          key={i}
        />
      ))}
    </BindKeyboardSwipeableViews>
  </CardContainer>
);

const CardContainer = styled.div`
  margin-top: 16px;
`;
