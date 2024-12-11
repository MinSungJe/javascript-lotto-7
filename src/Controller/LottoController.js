import LottoService from '../Service/LottoService.js';
import parseRate from '../Util/parseRate.js';
import OutputView from '../View/OutputView.js';

class LottoController {
  price;
  lottoService;
  constructor(price, lottoes, winningNumber, bonusNumber) {
    this.price = price;
    this.lottoService = new LottoService(lottoes, winningNumber, bonusNumber);
  }

  run() {
    OutputView.printStatistic(this.lottoService.result, this.calculateRate());
  }

  calculateRate() {
    return parseRate((this.lottoService.calculateWinnings() / this.price) * 100);
  }
}

export default LottoController;
