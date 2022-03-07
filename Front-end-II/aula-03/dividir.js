import { firstNumber, secondNumber } from "./calculadora.js"
export default function dividir() {

  const result = Number(firstNumber) / Number(secondNumber)
  if(Number(firstNumber) === 0 || (Number(secondNumber) === 0)) {

    return 'Não se pode dividir por zero'

  }

  else {

    return result.toFixed(1)
  }
}
