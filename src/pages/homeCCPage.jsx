import ErrorBoundary from "@components/errorBoundary";

import CalculatorContainer from "@containers/classComponents/calculatorContainer";

const HomeCCPAGE = () => {
  return (
    <ErrorBoundary>
      <CalculatorContainer />
    </ErrorBoundary>
  );
};

export default HomeCCPAGE;
