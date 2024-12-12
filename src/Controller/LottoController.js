import LottoService from '../Service/LottoService.js';
import loopWhileValid from '../Util/loopWhileValid.js';
import InputView from '../View/InputView.js';

class LottoController {
  lottoService;
  async run() {
    const price = await loopWhileValid(InputView.getPrice);
    this.createLottoService(price);

    const winningNumber = await loopWhileValid(InputView.getWinningNumber);
    const bonusNumber = await loopWhileValid(InputView.getBonusNumber, winningNumber);

    this.lottoService.calculateResult(winningNumber, bonusNumber);
    this.lottoService.printResult();
  }

  createLottoService(price) {
    this.lottoService = new LottoService(price);
    this.lottoService.printLottoesNumber();
  }
}

export default LottoController;
