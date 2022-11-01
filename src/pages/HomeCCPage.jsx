import ErrorBoundary from "@components/error-boundary"
import CalculatorContainer from "@containers/CC/calculatorContainer"

const HomeCCPAGE = () => {
  return (
    <ErrorBoundary>
      <CalculatorContainer />
    </ErrorBoundary>
  )
}

export default HomeCCPAGE
