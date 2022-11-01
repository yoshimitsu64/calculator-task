import PropTypes from "prop-types"

import Button from "@components/button"
import { StyledKeypadContainer, StyledKeyboard } from "./styled"
import { buttons } from "@constants/buttons"

function Keypad(props) {
  const { handleClick } = props

  return (
    <StyledKeypadContainer>
      <StyledKeyboard>
        {buttons?.map((button, index) => (
          <Button key={`${button} + ${index}`} button={button} handleClick={handleClick} />
        ))}
      </StyledKeyboard>
    </StyledKeypadContainer>
  )
}

Keypad.propTypes = {
  handleClick: PropTypes.func,
}

export default Keypad
