import styled from "styled-components";

export const StyledDisplayContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width[6]}%;
  height: ${({ theme }) => theme.sizes.height[9]}px;
  display: flex;
  align-items: end;
  position: relative;
`;
export const StyledOutputField = styled.span`
  margin-top: ${({ theme }) => theme.space.marginTop[0]}px;
  width: ${({ theme }) => theme.sizes.width[6]}%;
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]}px;
  display: flex;
  flex-direction: column;
  &::after {
    display: block;
    background-color: ${({ theme }) => theme.devider};
    content: "";
    width: ${({ theme }) => theme.sizes.width[6]}%;
    height: ${({ theme }) => theme.sizes.height[0]}px;
  }
`;

export const StyledPreviousExpression = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  color: ${({ theme }) => theme.colors.color[1]};
  align-self: flex-end;
  margin-right: ${({ theme }) => theme.space.marginRight[0]}px;
  position: absolute;
  top: 0;
`;

export const StyledOutput = styled.span`
  display: flex;
  justify-content: end;
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  color: ${({ theme }) => theme.display};
`;
