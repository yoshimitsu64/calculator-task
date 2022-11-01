import styled from "styled-components"

export const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.padding[0]};
  color: ${({ theme }) => theme.display};
  font-size: ${({ theme }) => theme.fontSizes[6]};
`
export const StyledSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[5]};
  margin-bottom: ${({ theme }) => theme.space.marginBottom[1]};
  color: ${({ theme }) => theme.display};
`

export const StyledCleanHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.width[5]};
`

export const StyledButton = styled.button`
  border: ${({ theme }) => theme.borders.border[0]};
  border-radius: ${({ theme }) => theme.borders.borderRadius[0]};
  width: ${({ theme }) => theme.sizes.width[6]};
  background-color: ${({ theme }) => theme.colors.backgroundColor[1]};
  border: ${({ theme }) => theme.borders.borderRadius[1]};
  color: ${({ theme }) => theme.colors.color[0]};
  height: ${({ theme }) => theme.sizes.height[3]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  margin-bottom: ${({ theme }) => theme.space.marginBottom[0]};
  &:active {
    transform: scale(0.9);
  }
`
