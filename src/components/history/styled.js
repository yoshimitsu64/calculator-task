import styled from "styled-components";

export const StyledHistoryContainer = styled.div`
  width: 100%;
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 2px;
    height: 100%;
    background-color: #001524;
  }
  overflow:auto;
`;
export const StyledHistoryTitle = styled.div`
  align-self: center;
`;
