import styled from "styled-components"
export const StyledCalculatorContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width[6]};
  display: flex;
  height: ${({ theme }) => theme.sizes.height[7]};
  padding-top: ${({ theme }) => theme.space.paddingTop[1]};
  padding-bottom: ${({ theme }) => theme.space.paddingBottom[1]};
  position: relative;
`
export const StyledCalculatorDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.width[6]};
  width: ${({ theme }) => theme.sizes.width[7]};
  margin-right: ${({ theme }) => theme.space.marginRight[0]};
`
export const StyledHistoryContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width[4]};
  height: ${({ theme }) => theme.sizes.height[7]};
  display: ${({ isHidden }) => (isHidden ? "block" : "none")};
`
