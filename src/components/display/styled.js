import styled from "styled-components";

export const StyledDisplayContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
`;
export const StyledOutputField = styled.span`
  margin-top: 10px;
  width: 100%;
  border-radius: 10px;
  &::after {
    display: block;
    background-color: ${({theme}) => theme.devider};
    content: "";
    width: 100%;
    height: 2px;
  }
`;
export const StyledOutput = styled.span`
  display: flex;
  justify-content: end;
  font-size: 70px;
  color: ${({theme}) => theme.display};
`;
