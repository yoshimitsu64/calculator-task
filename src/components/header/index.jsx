import { StyledContainer, StyledRoute, StyledRoutesContainer, StyledTitle } from "./styled"
import { routes } from "@constants/routes"

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
  )
}

export default Header
