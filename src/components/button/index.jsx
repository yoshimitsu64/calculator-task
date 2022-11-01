import PropTypes from "prop-types"

import { StyledButton } from "./styled"

function Button(props) {
  const { button, handleClick } = props

  return (
    <StyledButton onClick={handleClick} data-cypress={button} value={button}>
      {button}
    </StyledButton>
  )
}
Button.propTypes = {
  button: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button
