import { useSelector } from "react-redux"

import Display from "@components/display"

function DisplayContainer() {
  const expression = useSelector((state) => state?.expression)
  const result = useSelector((state) => state?.result)
  const previousExpression = useSelector((state) => state?.previousExpression)

  return <Display expression={expression} result={result} previousExpression={previousExpression} />
}

export default DisplayContainer
