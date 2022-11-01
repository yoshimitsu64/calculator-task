import ErrorBoundary from "@components/error-boundary"
import CalculatorContainer from "@containers/FC/calculatorContainer"

const HomeFCPAGE = () => {
  return (
    <ErrorBoundary>
      <CalculatorContainer />
    </ErrorBoundary>
  )
}

export default HomeFCPAGE
