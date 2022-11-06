import styled from "styled-components";

export const StyledControlPanel = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes.width[3]}%;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledItem = styled.button`
  border: ${({ theme }) => theme.borders.border[0]};
  background-color: ${({ theme }) => theme.colors.backgroundColor[1]};
  color: ${({ theme }) => theme.colors.color[0]};
  width: ${({ theme }) => theme.sizes.width[6]}%;
  height: ${({ theme }) => theme.sizes.height[3]}px;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  margin-bottom: ${({ theme }) => theme.space.marginBottom[1]}px;
  &:active {
    transform: scale(0.9);
  }
`;
