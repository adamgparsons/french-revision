import styled from "styled-components";
import Link from 'next/link'
import { groupBy, StringToSlug } from "../utils";

import courseData from "../data/data.json"
import Head from "next/head";

export default function Home() {


  const courseDataFormatted = groupBy(courseData, 'course');
  return (
    <main>
      <Head>
        <title>French revision</title>
      </Head>
      <Wrapper>
        <FranceFlag>🇫🇷</FranceFlag>
        <SiteName>French revision</SiteName>
        {courseDataFormatted ? Object.keys(courseDataFormatted).map((course, i) => (
          <div key={i}>
            <CourseHeading>{course}</CourseHeading>
            {[...new Set(courseDataFormatted[course].map(item => item.lesson))].map((weekItem, key) =>
              <LessonLink href={`/${StringToSlug(course).toLowerCase()}/${weekItem}`} key={key}>Week {weekItem}</LessonLink>)}
          </div>
        )) : null}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
padding: 0 16px;
`

const FranceFlag = styled.span`
display: block;
margin-top: 40px;
font-size: 60px;
line-height: 1;
`

const SiteName = styled.h1`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 39px;
letter-spacing: -0.1px;
margin-bottom: 24px;
`

const CourseHeading = styled.h2`
margin-top: 24px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #797979;
margin-bottom: 8px;
`
const LessonLink = styled(Link)`
display: block;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-decoration-line: underline;
color: var(--primary-blue);
cursor: pointer;
margin-bottom: 8px;
`