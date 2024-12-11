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
    this.lottoes = Array(getLottoAmount(price)).map(getRandomNumbers);
  }
}

export default LottoService;
