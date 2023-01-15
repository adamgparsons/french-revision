import styled from "styled-components";

export const ProgressBar = ({ width }) => (
  <ProgessBarContainer>
    <Bar width={width} />
  </ProgessBarContainer>
);

const ProgessBarContainer = styled.div`
  width: 100%;
  height: 8px;
  overflow: hidden;
  background: #e5e5e5;
  border-radius: 8px;
  transform: translateY(-1px);
`;

const Bar = styled.div`
  position: relative;
  float: left;
  min-width: 1%;
  height: 100%;
  background: var(--primary-blue);
  transition: width 0.5s ease-in-out;
  ${({ width }) => width && `width: ${width}%`}
`;
