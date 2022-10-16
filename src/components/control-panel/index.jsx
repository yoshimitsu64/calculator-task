import { StyledControlPanelContainer, StyledKey, StyledKeyboard } from "./styled";
import {keys} from '@constants/keys'
function ControlPanel() {
  return (
    <StyledControlPanelContainer>
      <StyledKeyboard>
        {keys.map((item, index) =>(
            <StyledKey key={`${item} + ${index}`}>{item}</StyledKey>
        ))}
      </StyledKeyboard>
    </StyledControlPanelContainer>
  );
}

export default ControlPanel;
