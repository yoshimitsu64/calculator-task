import styled from "styled-components";

export const StyledDisplayContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
`;
export const StyledOutputField = styled.span`
  width: 100%;
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #001524;
  }
`;
export const StyledOutput = styled.span`
  display:flex;
  justify-content:end;
  font-size:70px;

`;
