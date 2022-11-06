import ErrorBoundary from "@components/errorBoundary";

import CalculatorContainer from "@containers/functionalComponents/calculatorContainer";

const HomeFCPAGE = () => {
  return (
    <ErrorBoundary>
      <CalculatorContainer />
    </ErrorBoundary>
  );
};

export default HomeFCPAGE;
