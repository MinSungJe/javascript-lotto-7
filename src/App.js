import LottoController from './Controller/LottoController.js';
import Lotto from './Model/Lotto.js';
import getLottoAmount from './Util/getLottoAmount.js';
import getRandomNumbers from './Util/getRandomNumbers.js';
import loopWhileValid from './Util/loopWhileValid.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    const price = await loopWhileValid(InputView.getPrice);
    const lottoes = Array.from(
      { length: getLottoAmount(price) },
      () => new Lotto(getRandomNumbers())
    );
    OutputView.printLottoes(lottoes);
    const winningNumber = await loopWhileValid(InputView.getWinningNumber);
    const bonusNumber = await loopWhileValid(InputView.getBonusNumber, winningNumber);
    const lottoController = new LottoController(price, lottoes, winningNumber, bonusNumber);
    lottoController.run();
  }
}

export default App;
