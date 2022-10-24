import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 80px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.header};
  align-items: center;
  font-size: 30px;
  transition: all 0.6s;
  padding: 10px 10px 10px 10px;
`;
const StyledTitle = styled.div`
  color: white;
  color: ${(props) => props.theme.color};
`;
const StyledRoutesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledRoute = styled(Link)`
  margin: 10px;
  color: white;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: red;
    transform: scaleX(0);
    transition: all 0.2s;
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export { StyledContainer, StyledTitle, StyledRoutesContainer, StyledRoute };
