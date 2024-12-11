import Lotto from '../Model/Lotto.js';
import getLottoAmount from '../Util/getLottoAmount.js';
import getRandomNumbers from '../Util/getRandomNumbers.js';

class LottoService {
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
}

export default LottoService;
