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
        <StyledRoute to="/">Home(FC)</StyledRoute>
        <StyledRoute to="HOMECC">Home(CC)</StyledRoute>
        <Switch />
      </StyledRoutesContainer>
    </StyledContainer>
  );
};

export default Header;
