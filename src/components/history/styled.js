import styled from "styled-components";

export const StyledHistory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;
  &::before {
    position: absolute;
    top:0;
    left:0;
    display: block;
    content: "";
    width: 2px;
    height: 100%;
    background-color: #001524;
  }
  overflow:auto;
`;

export const StyledHistoryItem = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
`
export const StyledHistoryTitle = styled.div`
  align-self: center;
  height:5%;
`;
