import ErrorBoundary from "@components/error-boundary";
import Header from "@components/header";
import CalculatorContainer from "@containers/CC/calculator-container";
const HomeCCPAGE = () => {
  return (
    <ErrorBoundary>
      <Header />
      <CalculatorContainer />
    </ErrorBoundary>
  );
};

export default HomeCCPAGE;
