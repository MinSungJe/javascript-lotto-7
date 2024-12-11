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

  getResult(winningNumber, bonusNumber) {
    if (this.getWinningCount(winningNumber) === 6) return 'first';
    if (this.getWinningCount(winningNumber) === 5 && this.getBonusInclude(bonusNumber))
      return 'second';
    if (this.getWinningCount(winningNumber) === 5) return 'third';
    if (this.getWinningCount(winningNumber) === 4) return 'fourth';
    if (this.getWinningCount(winningNumber) === 3) return 'fifth';
    return 'miss';
  }
}

export default Lotto;
