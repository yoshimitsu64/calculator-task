import { StyledKeypadContainer, StyledKey, StyledKeyboard } from "./styled";
import {keys} from '@constants/keys'
function Keypad() {
  return (
    <StyledKeypadContainer>
      <StyledKeyboard>
        {keys.map((item) =>(
            <StyledKey key={item} data-key={item}>{item}</StyledKey>
        ))}
      </StyledKeyboard>
    </StyledKeypadContainer>
  );
}

export default Keypad;
