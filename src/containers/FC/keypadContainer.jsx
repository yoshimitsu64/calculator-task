import { useDispatch, useSelector } from "react-redux"
import { useState, useMemo, useEffect, memo } from "react"

import Keypad from "@components/keypad"
import { calctulateExpression } from "@utils/calculator"
import {
  validateExpression,
  temporaryExpresssionArray,
  checkExpressionForOperators,
} from "@helpers/calculatorHelpers"
import { addHistory, addExpression, setResult, setPreviousExpression } from "@actions"
import { containsOperator } from "@helpers/calculatorHelpers"

function KeypadContainer() {
  const dispatch = useDispatch()

  const [calculate, setCalculate] = useState(false)
  const [error, setError] = useState(null)

  const expression = useSelector((state) => state?.expression)
  const result = useSelector((state) => state?.result)
  const previousExpression = useSelector((state) => state.previousExpression)

  const memoizedExpr = useMemo(() => {
    if (previousExpression && expression) {
      try {
        return calctulateExpression(previousExpression)
      } catch (e) {
        setError(e.message)
        setCalculate(false)
        return e.message
      }
    }
    return expression
  }, [previousExpression])

  const handleClick = (e) => {
    switch (e.target.value) {
      case "C":
        result.length !== 0 && dispatch(setResult(""))
        temporaryExpresssionArray.length = 0
        dispatch(setResult("0"))
        dispatch(addExpression(""))
        break
      case "CE":
        result.length !== 0 && dispatch(setResult("0"))
        if (expression[expression.length - 1] === "." || expression.length !== 1) {
          dispatch(addExpression(expression.slice(0, -1)))
        } else if (expression.length === 1 && expression[expression.length - 1] !== "0") {
          dispatch(addExpression("0"))
        }
        temporaryExpresssionArray.pop()
        break
      case "=":
        if (
          checkExpressionForOperators(expression) &&
          !containsOperator(expression[expression.length - 1])
        ) {
          try {
            temporaryExpresssionArray.length = 0
            dispatch(setPreviousExpression(expression))
            setCalculate(true)
            break
          } catch (e) {
            dispatch(addExpression(e.message))
          }
        }
        break
      default:
        result?.length !== 0 && dispatch(setResult("0"))
        if (!expression.includes("Error")) {
          validateExpression(e.target.value, expression, dispatch)
        } else {
          validateExpression(e.target.value, "", dispatch)
        }
        break
    }
  }

  useEffect(() => {
    if (previousExpression && error === null && expression) {
      dispatch(setResult(memoizedExpr))
      dispatch(addHistory(expression))
      dispatch(addExpression(""))
      setCalculate(false)
    }
  }, [calculate])

  useEffect(() => {
    if (error) {
      dispatch(addHistory(previousExpression));
      dispatch(addExpression(error))
      setError(null)
    }
  }, [error])

  return <Keypad handleClick={handleClick} />
}

export default memo(KeypadContainer)
