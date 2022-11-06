import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.sizes.width[7]}%;
  height: ${({ theme }) => theme.sizes.height[4]}px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.header};
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  transition: all 0.6s;
  padding: ${({ theme }) => theme.space.padding[1]}px;
`;
const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color};
`;
const StyledRoutesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledRoute = styled(Link)`
  margin: ${({ theme }) => theme.space.margin[4]}px;
  color: ${({ theme }) => theme.colors.color[0]};
  text-decoration: none;
  color: ${({ theme }) => theme.color};
  &::after {
    display: block;
    content: "";
    width: ${({ theme }) => theme.sizes.width[6]}%;
    height: ${({ theme }) => theme.sizes.height[0]}px;
    background-color: ${({ theme }) => theme.colors.backgroundColor[0]};
    transform: scaleX(0);
    transition: all 0.2s;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export { StyledContainer, StyledTitle, StyledRoutesContainer, StyledRoute };
