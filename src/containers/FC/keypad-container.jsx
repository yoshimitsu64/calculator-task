import { useDispatch, useSelector } from "react-redux";
import Keypad from "@components/keypad";
import { calctulateExpression } from "@utils/calculator";
import { validator } from "@utils/calculator-helpers";
import { addHistory } from "@store/actions";
import { addExpression } from "@store/actions";

function KeypadContainer() {
  const dispatch = useDispatch();
  const expression = useSelector((state) => state?.expression);

  const handleClick = (e) => {
    switch (e.target.value) {
      case "C":
        dispatch(addExpression("0"));
        break;
      case "CE":
        dispatch(addExpression(expression.slice(0, -1)));
        break;
      case "=":
        try {
          dispatch(addExpression(calctulateExpression(expression)));
          dispatch(addHistory(expression));
          break;
        } catch (e) {
          dispatch(addExpression(e.message));
        }
        break;
      default:
        if (!expression.includes("Error")) {
          validator(e.target.value, expression, dispatch);
        } else {
          validator(e.target.value, "", dispatch);
        }
        break;
    }
  };

  return <Keypad handleClick={handleClick} />;
}

export default KeypadContainer;
