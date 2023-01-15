import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { FlipCard, ProgressBar } from "../../components";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import data from "../../data/data.json";
import { toCourseName, groupBy, shuffle } from "../../utils";
import Head from "next/head";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const Lesson = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const { course, lesson } = router.query;
  const dataFormatted = groupBy(data, "course");

  let lessonData;
  let courseName;

  if (course && lesson && dataFormatted) {
    courseName = `${toCourseName(course)}`;
    const courseData = dataFormatted[courseName];
    const filteredLessonData = courseData.filter(
      (item) => item.lesson === Number(lesson)
    );
    lessonData = shuffle(filteredLessonData);
  }
  const title = `${courseName} - week ${lesson}`;

  return (
    <main>
      <Head>
        <title>{title && `${title}`}</title>
      </Head>
      <TopBar>
        <CloseLink href="/">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1.05659L14.9433 0L8 6.94332L1.05668 0L0 1.05659L6.94337 7.99995L0 14.9433L1.05668 15.9999L8 9.05659L14.9433 15.9999L16 14.9433L9.05663 7.99995L16 1.05659Z"
              fill="#554B4B"
            />
          </svg>
        </CloseLink>
        <ProgressBar width={progress} />
      </TopBar>
      {lessonData && (
        <CardContainer>
          <BindKeyboardSwipeableViews
            enableMouseEvents
            resistance
            onChangeIndex={(index) =>
              setProgress((index / lessonData.length) * 100)
            }
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
      )}
    </main>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 24px;
  column-gap: 16px;
`;

const CloseLink = styled(Link)`
  padding: 8px;
`;

const CardContainer = styled.div`
  margin-top: 16px;
`;

export default Lesson;
