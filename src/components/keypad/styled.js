import styled from "styled-components";

export const StyledKeypadContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width[6]};
  height: ${({ theme }) => theme.sizes.height[7]}%;
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.space.paddingTop[0]}px;
  padding-bottom: ${({ theme }) => theme.space.paddingBottom[0]}px;
`;
export const StyledKeyboard = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes.width[6]}%;
  height: ${({ theme }) => theme.sizes.height[7]}%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
