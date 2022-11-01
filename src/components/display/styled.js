import styled from "styled-components"

export const StyledDisplayContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width[6]};
  display: flex;
  align-items: end;
  position: relative;
`
export const StyledOutputField = styled.span`
  margin-top: ${({ theme }) => theme.space.marginTop[0]};
  width: ${({ theme }) => theme.sizes.width[6]};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]};
  display: flex;
  flex-direction: column;
  &::after {
    display: block;
    background-color: ${({ theme }) => theme.devider};
    content: "";
    width: ${({ theme }) => theme.sizes.width[6]};
    height: ${({ theme }) => theme.sizes.height[0]};
  }
`

export const StyledPreviousExpression = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.color[1]};
  align-self: flex-end;
  margin-right: ${({ theme }) => theme.space.marginRight[0]};
  position: absolute;
  top: 0;
`

export const StyledOutput = styled.span`
  display: flex;
  justify-content: end;
  font-size: ${({ theme }) => theme.fontSizes[7]};
  color: ${({ theme }) => theme.display};
`
