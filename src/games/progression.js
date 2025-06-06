import runGame from '../engine.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateProgression = (start, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 5);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  
  const progression = generateProgression(start, step, hiddenIndex);
  const correctAnswer = String(start + hiddenIndex * step);
  
  return [progression.join(' '), correctAnswer];
};

export default () => runGame(description, generateQuestionAndAnswer);