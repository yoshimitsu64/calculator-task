import styled from "styled-components";

export const StyledControlPanel = styled.div`
  display: flex;
  width: 16.45%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledItem = styled.button`
  border: 1px solid black;
  background-color: grey;
  color: white;
  width: 100%;
  height: 40px;
  font-size: 13px;
  margin-bottom: 20px;
  &:active {
    transform: scale(0.9);
  }
`;


