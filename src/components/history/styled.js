import styled from "styled-components"

export const StyledHistoryContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width[6]};
  height: ${({ theme }) => theme.sizes.height[7]};
  display: flex;
  flex-direction: column;
  position: relative;
  &::before {
    position: absolute;
    display: block;
    content: "";
    width: ${({ theme }) => theme.sizes.width[8]};
    height: ${({ theme }) => theme.sizes.height[7]};
    background-color: ${({ theme }) => theme.devider};
  }
`

export const StyledHistory = styled.div`
  width: ${({ theme }) => theme.sizes.width[6]};
  height: ${({ theme }) => theme.sizes.height[7]};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  overflow: auto;
  padding-bottom: ${({ theme }) => theme.space.paddingBottom[0]};
`

export const StyledHistoryItem = styled.div`
  width: ${({ theme }) => theme.sizes.width[6]};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${({ theme }) => theme.space.margin[0]};
  color: ${({ theme }) => theme.history};
`
export const StyledHistoryTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]};
  align-self: center;
  height: ${({ theme }) => theme.sizes.height[5]};
  color: ${({ theme }) => theme.history};
`
