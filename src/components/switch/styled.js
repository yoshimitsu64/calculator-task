import styled from "styled-components";

export const StyledToogleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.sizes.width[1]}px;
  height: ${({ theme }) => theme.sizes.height[2]}px;
  margin: ${({ theme }) => theme.space.margin[4]}px;
  & input[type="checkbox"]:checked + span::before {
    transform: translateX(25px);
    background-color: ${({ theme }) => theme.colors.backgroundColor[4]};
  }
  & input[type="checkbox"]:checked + span {
    background-color: ${({ theme }) => theme.colors.backgroundColor[3]};
  }
`;

export const StyledInput = styled.input`
  display: none;
`;

export const StyledSwitch = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgroundColor[2]};
  border-radius: ${({ theme }) => theme.borders.borderRadius[1]}px;
  top: ${({ theme }) => theme.placement.top[0]};
  right: ${({ theme }) => theme.placement.right[0]};
  bottom: ${({ theme }) => theme.placement.bottom[0]};
  left: ${({ theme }) => theme.placement.left[0]};
  transition: background-color 0.2s ease;
  &::before {
    position: absolute;
    content: "";
    left: ${({ theme }) => theme.placement.left[1]}px;
    top: ${({ theme }) => theme.placement.top[1]}px;
    width: ${({ theme }) => theme.sizes.width[0]}px;
    height: ${({ theme }) => theme.sizes.height[1]}px;
    background-color: ${({ theme }) => theme.colors.backgroundColor[4]};
    border-radius: ${({ theme }) => theme.borders.borderRadius[3]}%;
    transition: transform 0.3s ease;
  }
`;
