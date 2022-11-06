import { routes } from "@constants/routes";
import { StyledContainer, StyledRoute, StyledRoutesContainer, StyledTitle } from "./styled";

const Header = () => {
  return (
    <StyledContainer>
      <StyledTitle>Calculator</StyledTitle>
      <StyledRoutesContainer>
        {routes.map(({ path, Title, id }) => (
          <StyledRoute to={path} key={id}>
            {Title}
          </StyledRoute>
        ))}
      </StyledRoutesContainer>
    </StyledContainer>
  );
};

export default Header;
