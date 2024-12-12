import Lotto from '../Model/Lotto.js';
import getLottoAmount from '../Util/getLottoAmount.js';
import getRandomNumbers from '../Util/getRandomNumbers.js';
import parseRate from '../Util/parseRate.js';
import OutputView from '../View/OutputView.js';

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

  constructor(price) {
    this.price = price;
    this.#getLottoes(price);
  }

  #getLottoes(price) {
    this.lottoes = Array.from(
      { length: getLottoAmount(price) },
      () => new Lotto(getRandomNumbers())
    );
  }

  printLottoesNumber() {
    OutputView.printMessage(`${this.lottoes.length}개를 구매했습니다.`);
    this.lottoes.forEach((lotto) => lotto.printNumber());
  }

  calculateResult(winningNumber, bonusNumber) {
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
    return parseRate((this.calculateWinnings() / this.price) * 100);
  }

  printResult() {
    OutputView.printMessage(`3개 일치 (5,000원) - ${this.result.fifth}개`);
    OutputView.printMessage(`4개 일치 (50,000원) - ${this.result.fourth}개`);
    OutputView.printMessage(`5개 일치 (1,500,000원) - ${this.result.third}개`);
    OutputView.printMessage(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.result.second}개`);
    OutputView.printMessage(`6개 일치 (2,000,000,000원) - ${this.result.first}개`);
    OutputView.printMessage(`총 수익률은 ${this.calculateRate()}%입니다.`);
  }
}

export default LottoService;
