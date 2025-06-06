import { getRandomNumber } from '../utils.js';
import runGame from '../engine.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(calculateGCD(num1, num2));
  return [question, correctAnswer];
};

export default () => runGame(description, generateQuestionAndAnswer);