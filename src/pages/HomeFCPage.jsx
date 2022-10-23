import Calculator from "@components/calculator";
import ErrorBoundary from "@components/error-boundary";
import Header from "@components/header";
import CalculatorContainer from "@containers/FC/calculator-container";

const HomeFCPAGE = () => {
  return (
    <ErrorBoundary>
      <Header />
      <CalculatorContainer />
    </ErrorBoundary>
  );
};

export default HomeFCPAGE;
