import { useSelector } from "react-redux";
import Calculator from "@components/calculator-FC";

function CalculatorContainer() {
    const historyVisability= useSelector((state) => state.historyVisability);
    
    return (
        <Calculator isHidden={historyVisability}/>
    )
}

export default CalculatorContainer;