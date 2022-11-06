import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.btnText};
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.borderRadius[2]}px;
  border: ${({ theme }) => theme.borders.border[2]};
  width: ${({ theme }) => theme.sizes.width[2]}%;
  height: ${({ theme }) => theme.sizes.height[6]}%;
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  margin-right: ${({ theme }) => theme.space.margin[2]}%;
  margin-left: ${({ theme }) => theme.space.margin[2]}%;
  &:hover {
    transition: all 0.2s;
    background-color: ${({ theme }) => theme.buttonActive};
    color: ${({ theme }) => theme.btnActiveText};
    cursor: pointer;
  }
  &:active {
    transform: scale(0.87);
  }
`;
