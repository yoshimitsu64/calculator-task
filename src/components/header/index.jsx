import Switch from "../switch";
import {
  StyledContainer,
  StyledRoute,
  StyledRoutesContainer,
  StyledTitle,
} from "./styled";

const Header = () => {
  return (
    <StyledContainer>
      <StyledTitle>Calculator</StyledTitle>
      <StyledRoutesContainer>
        <StyledRoute>Home(FC)</StyledRoute>
        <StyledRoute>Home(CC)</StyledRoute>
        <Switch />
      </StyledRoutesContainer>
    </StyledContainer>
  );
};

export default Header;
