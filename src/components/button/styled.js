import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #001d3d;
  width: 12%;
  height: 17%;
  font-size: 50px;
  margin: 0 3% 0 3%;
  &:hover {
    transition: all 0.2s;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.87);
  }
`;
