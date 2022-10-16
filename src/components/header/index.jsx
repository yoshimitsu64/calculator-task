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
        <StyledRoute>Home</StyledRoute>
        <StyledRoute>Settings</StyledRoute>
      </StyledRoutesContainer>
    </StyledContainer>
  );
};

export default Header;
