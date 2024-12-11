import Lotto from '../Model/Lotto.js';
import getLottoAmount from '../Util/getLottoAmount.js';
import getRandomNumbers from '../Util/getRandomNumbers.js';

class LottoService {
  price;
  lottoes;
  result = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    miss: 0,
  };

  constructor(price, winningNumber, bonusNumber) {
    this.price = price;
    this.#getLottoes(price);
    this.#getResult(winningNumber, bonusNumber);
  }

  #getLottoes(price) {
    this.lottoes = Array.from(
      { length: getLottoAmount(price) },
      () => new Lotto(getRandomNumbers())
    );
  }

  #getResult(winningNumber, bonusNumber) {
    this.lottoes.forEach((lotto) => {
      this.result[lotto.getResult(winningNumber, bonusNumber)] += 1;
    });
  }

  calculateWinnings() {
    return (
      2_000_000_000 * this.result.first +
      30_000_000 * this.result.second +
      1_500_000 * this.result.third +
      50_000 * this.result.fourth +
      5_000 * this.result.fifth
    );
  }

  calculateRate() {
    return (this.calculateWinnings / this.price) * 100;
  }
}

export default LottoService;
