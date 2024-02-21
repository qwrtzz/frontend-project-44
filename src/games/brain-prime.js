import readlineSync from 'readline-sync';
import {
  bodyGame, checkAnswer, getNumber, showMessage, showQuestion, startGame,
} from '../index.js';

const brainPrime = () => {
  const game = 'prime';

  const name = startGame('Answer "yes" if given number is prime. Otherwise answer "no".');
  bodyGame(name,answer)
  const number = getNumber();
  showQuestion(game, number);
  const answer = readlineSync.question('Your answer: ');
  const rigthAnswer = isPrime(number); 

  const message = checkAnswer = (name, answer, isPrime());

  return message;
  }

  export const bodyGame = (name, body) => {
    let i = 0;
    while (i < 3) {
      const message = body();
      if (message === 'Correct!') {
        i += 1;
      } else {
        break;
      }
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  };
  
const isPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
      return 'no';
    }
    return 'yes';
  };

  showMessage(message);


export default brainPrime;
