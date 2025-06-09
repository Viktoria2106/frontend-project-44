import getRandomNum from '../utils.js'
import runGame from '../index.js'

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      return false
  }
}

const description = 'What is the result of the expression?'

const getQuestionAndAnswer = () => {
  const num1 = getRandomNum()
  const num2 = getRandomNum()
  const operators = ['+', '-', '*']
  const operator = operators[getRandomNum(0, 2)]
  const question = `${num1} ${operator} ${num2}`
  const answer = Number(calculate(num1, num2, operator))
  return [question, answer]
}

const run = () => runGame(getQuestionAndAnswer, description)

export default run
