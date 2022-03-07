import { firstNumber, secondNumber } from "./calculadora.js"
export default function multiplicacao() {

  const result = Number(firstNumber) * Number(secondNumber)
  if(Number(firstNumber) === 0 || (Number(secondNumber) === 0)) {

    return 'zero'

  }
  else {

    return result

  }
}
