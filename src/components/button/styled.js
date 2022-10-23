import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 15%;
  height: 20%;
  font-size: 50px;
  margin: 1%;
  border: none;
  &:hover {
    transition: all 0.2s;
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;
