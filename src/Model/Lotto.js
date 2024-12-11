import Validator from '../Service/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    Validator.lotto(numbers);
  }

  getWinningCount(winningNumber) {
    return this.#numbers.filter((number) => winningNumber.includes(number)).length;
  }

  getBonusInclude(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
