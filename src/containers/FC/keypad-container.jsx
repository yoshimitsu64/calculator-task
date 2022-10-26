import { useDispatch, useSelector } from "react-redux";
import Keypad from "@components/keypad";
import { calctulateExpression } from "@utils/calculator";
import { validateExpression } from "@utils/calculator-helpers";
import { addHistory } from "@store/actions";
import { addExpression } from "@store/actions";
import { temporaryExpresssionArray } from "@utils/calculator-helpers";

function KeypadContainer() {
  const dispatch = useDispatch();
  const expression = useSelector((state) => state?.expression);

  const handleClick = (e) => {
    switch (e.target.value) {
      case "C":
        temporaryExpresssionArray.length = 0;
        dispatch(addExpression("0"));
        break;
      case "CE":
          if (expression[expression.length -1] === "." || expression.length !==1){
            dispatch(addExpression(expression.slice(0, -1)));
          }else if(expression.length === 1 && expression[expression.length - 1] !== "0") {
            dispatch(addExpression("0"));
          }
         temporaryExpresssionArray.pop();
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
          validateExpression(e.target.value, expression, dispatch);
        } else {
          validateExpression(e.target.value, "", dispatch);
        }
        break;
    }
  };

  return <Keypad handleClick={handleClick} />;
}

export default KeypadContainer;
